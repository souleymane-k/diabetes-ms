/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';
import './InputItem.css';


class InputItem extends Component {

  render() {
    return (
      <div className ="InputItem">
        <div className ="InputItem__result">
        <div className="InputItem__id">{this.props.id}</div>
          <div className="InputItem__month_taken">{this.props.month_taken}</div>
          <div className="InputItem__meal_taken">{this.props.meal_taken}</div>
          <div className="InputItem__result_read">{this.props.result_read}</div>
          <div className="InputItem__date">{this.props.date_tested}</div>
          <div className="InputItem__month_id">{this.props.month_id}</div>
          <div className="InputItem__userid">{this.props.userid}</div>
          <div className="InputItem__desciption">{this.props.description}</div> 
          <div className="InputItem__diabetesType">{this.props.diabetestype}</div> 
        </div>
      </div>
    );
  }
}


export default InputItem;

{/* <div className ="InputItem">
        <div className ="InputItem__choices">
          <div className="InputItem__month">{this.props.monthName}</div>
          <div className="InputItem__mealName">{this.props.mealName}</div>
          <div className="InputItem__result">{this.props.result}</div>
          <div className="InputItem__date">{this.props.date}</div>
          <div className="InputItem__desciption">{this.props.description}</div> 
          <div className="InputItem__dType">{this.props.dtype}</div> 
        </div>
      </div> */}