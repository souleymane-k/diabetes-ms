import React, { Component } from 'react';
import './Option.css';
import OptionList from '../OptionList/OptionList'


class Option extends Component {
  
  render() {
    return (
      <div className="Option">
        <div className="Option__heading">
          <h1>Select A Month To See The Details</h1>
        </div>
        <div className="optionlistelement">This section is an illustartion showing the final list of data. Individuals could retrieve these data by sorting the desired month or the whole the year. select any desire year to see the outcome. Indidivual result emcompasses 5 objects, The month, the meal type, the glucose level, the date and the description or comment. </div>
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