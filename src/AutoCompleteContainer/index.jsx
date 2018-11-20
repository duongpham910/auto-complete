import React from 'react'
import Autocomplete from 'react-autocomplete';
import cities from './cities.json';


class AutoCompleteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Current value of the select field
      value: "",
      // Data that will be rendered in the autocomplete
      autocompleteData: [
        {
          label: 'Apple',
          value: 1
        },
        {
          label: 'Microsoft',
          value: 2
        },
        {
          label: 'Me, Myself and I',
          value: 3
        }
      ]
    };
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    });

    console.log("The Input Text has changed to ", e.target.value);
  }

  onSelect = (val) => {
    this.setState({
      value: val
    });

    console.log("Option from 'database' selected : ", val);
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
          items={cities}
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
