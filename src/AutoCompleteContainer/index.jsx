import React from 'react'
import Autocomplete from 'react-autocomplete';
import cities from './cities.json';
import axios from 'axios';

class AutoCompleteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      autocompleteData: []
    };
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
      autocompleteData: this.getSuggestions(e.target.value)
    });
  }

  onSelect = (val) => {
    this.setState({
      value: val
    });
  }

  retrieveDataAsynchronously(searchText){
    let url = ""
    axios.get(url)
    .then(response => {
      this.setState({
        autocompleteData: response.data
      });
    })
    .catch(error => {
      console.error(error);
    })
  }

  getSuggestions = (value) => {
    const escapedValue = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return cities.filter(city => regex.test(city.name));
  }

  renderItem(item, isHighlighted){
    return (
      <div
        style={{background: isHighlighted ? 'lightgray' : 'white'}}
        key={item.locationId}>
        {item.name}
      </div>
    );
  }

  getItemValue(item){
    return `${item.name}`;
  }

  render(){
    return (
      <div>
        <Autocomplete
          getItemValue={this.getItemValue}
          items={this.state.autocompleteData}
          renderItem={this.renderItem}
          value={this.state.value}
          onChange={this.onChange}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

export default AutoCompleteContainer
