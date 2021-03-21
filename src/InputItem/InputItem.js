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





      
    //   <form>
    // <div className="InputItem">
    //   <div className="InputItem-date" >
    //      <label  className="InputItem-date-label" >Date:</label>
    //      <input type="number" name="date-month" id="date-month" placeholder="01" min="1" max="12" required=""></input>
    //      <input type="number" name="date-day"   id="date-day" placeholder="01" min="1" max="31" required=""></input>
    //      <input type="number" name="date-year"  id="date-year" placeholder="2021" min="1" max="2030" required=""></input>
    //   </div>   
    //   <div className="InputItem_result">
    //       <label htmlFor="test-result">Result:</label>
    //       <input type="number" id="test-result" min ="1" max="400"></input>
    //    </div>
    //    <div className="InputItem_description">
    //        <label>Description:</label>
    //        <input type="text" id="description" rows="10"></input>
    //    </div>
    //    </div>
    //    <input type="submit"/>
    //    </form>
    );
  }
}

export default InputItem;