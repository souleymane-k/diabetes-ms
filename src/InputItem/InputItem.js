import React, { Component } from 'react';
import './InputItem.css';


class InputItem extends Component {

  render() {
    return (
      <div className ="InputItem">
        <div className ="InputItem__choices">
          <div className="InputItem__month">{this.props.monthName}</div>
          <div className="InputItem__mealName">{this.props.mealName}</div>
          <div className="InputItem__result">{this.props.result}</div>
          <div className="InputItem__date">{this.props.date}</div>
          <div className="InputItem__desciption">{this.props.description}</div> 
        </div>
      </div>
    );
  }
}

export default InputItem;