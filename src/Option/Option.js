import React, { Component } from 'react';
import './Option.css';
import OptionList from '../OptionList/OptionList'


class Option extends Component {
  render() {
    return (
      <div className="Option">
        <div className="Option__heading">
          <h1>Select A Month To Start</h1>
        </div>
        <div className="OptionList_option">
          <OptionList 
          filterOption={this.props.filterOption}
          handleFilterChange={this.props.handleFilterChange}
          />
          
        </div>
      </div>
    );
  }
}

export default Option;