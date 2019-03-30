import React, {Component} from 'react';
import './AddressInput.css'

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

class AddressInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = { address: 'asdf' };
    }
  
    handleChange = address => {
      this.props.first ? this.props.updateStart(address) : this.props.updateEnd(address)
    };
  
    handleSelect = address => {
      this.props.first ? this.props.updateStart(address) : this.props.updateEnd(address)
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => console.log('Success', latLng))
        .catch(error => console.error('Error', error));

    };

    placeholder = () => {
      return this.props.firs == true ? '   start address': '   end address'
    }
  
    render() {
      const first = this.props.first ? true: false
      const text = this.props.first ? "  start": "  end"
      return (
        <PlacesAutocomplete
          value    = {first? this.props.start: this.props.end}
          onChange = {this.handleChange}
          onSelect = {this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className="input">
              <input className="input"
                {...getInputProps({
                  placeholder: 'enter address',
                  className  : 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    :            'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    :            { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      );
    }
  }

  export default AddressInput