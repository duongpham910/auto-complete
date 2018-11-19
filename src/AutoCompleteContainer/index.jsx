import React from 'react'
import Autocomplete from 'react-autocomplete';

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
      <div style={{background: isHighlighted ? 'lightgray' : 'white'}}>
        {item.label}
      </div>
    );
  }

  getItemValue(item){
    return `${item.value} - ${item.label}`;
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
