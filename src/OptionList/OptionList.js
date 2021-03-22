import React, { Component } from 'react';
import './OptionList.css';


class OptionList extends Component {
  

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     filterOption: ''
  //   }
  
  render() {
    const{filterOption} = this.props
    return (
        <div className="OptionList">
          <div className="FilterOptions__option">
          <label htmlFor="filter_all">
            <input
              type="radio"
              value="All year"
              id="filter_all"
              name="filter"
              checked={filterOption ==="All year"}
              onChange={ this.props.handleFilterChange}/>
          All year
          </label>
        </div>
        <div className="OptionList_option">
          <label htmlFor="filter_January">
            <input
             type="radio" 
             value="January" 
             id="filter_january" 
             name="filter" 
             checked={filterOption ==="January"}
             onChange={this.props.handleFilterChange}/>
             
          January
          </label>
        </div>
        <div className="OptionList_option">
          <label htmlFor="filter_February">
            <input 
            type="radio" 
            value="February" 
            id="filter_February" 
            name="filter" 
            checked ={filterOption ==="February"}
            onChange={this.props.handleFilterChange}/>

          February
          </label>
        </div>
        <div className="OptionList_option">  
          <label htmlFor="filter_March">
            <input 
            type="radio" 
            value="March" 
            id="filter_march" 
            name="filter" 
            checked={filterOption==="March"}
            onChange={this.props.handleFilterChange}/>

          March
          </label>
        </div>
        <div className="OptionList_option">  
          <label htmlFor="filter_April">
            <input 
            type="radio" 
            value="April" 
            id="filter_april" 
            name="filter" 
            checked={filterOption==="April"}
            onChange={this.props.handleFilterChange}/>

          April
          </label>
        </div>
        <div className="OptionList_option">  
          <label htmlFor="filter_May">
            <input 
            type="radio" 
            value="May" 
            id="filter_may" 
            name="filter" 
            checked={filterOption==="May"}
            onChange={this.props.handleFilterChange}/>

          May
          </label>
        </div>
        <div className="OptionList_option">  
          <label htmlFor="filter_June">
            <input 
            type="radio" 
            value="June" 
            id="filter_june" 
            name="filter" 
            checked={filterOption==="June"}
            onChange={this.props.handleFilterChange}/>

          June
          </label>
        </div>
        <div className="OptionList_option">  
          <label htmlFor="filter_July">
            <input 
            type="radio" 
            value="July" 
            id="filter_july" 
            name="filter" 
            checked={filterOption==="July"}
            onChange={this.props.handleFilterChange}/>

         July
          </label>
        </div>
        <div className="OptionList_option">  
          <label htmlFor="filter_August">
            <input 
            type="radio" 
            value="August" 
            id="filter_august" 
            name="filter" 
            checked={filterOption==="August"}
            onChange={this.props.handleFilterChange}/>

          August
          </label>
        </div>
        <div className="OptionList_option">  
          <label htmlFor="filter_September">
            <input 
            type="radio" 
            value="September" 
            id="filter_september" 
            name="filter" 
            checked={filterOption==="September"}
            onChange={this.props.handleFilterChange}/>

          September
          </label>
        </div>
        <div className="OptionList_option">  
          <label htmlFor="filter_October">
            <input 
            type="radio" 
            value="October" 
            id="filter_october" 
            name="filter" 
            checked={filterOption==="October"}
            onChange={this.props.handleFilterChange}/>

         October
          </label>
        </div>
        <div className="OptionList_option">  
          <label htmlFor="filter_November">
            <input 
            type="radio" 
            value="November" 
            id="filter_november" 
            name="filter" 
            checked={filterOption==="November"}
            onChange={this.props.handleFilterChange}/>

          November
          </label>
        </div>
        <div className="OptionList_option">  
          <label htmlFor="filter_December">
            <input 
            type="radio" 
            value="December" 
            id="filter_december" 
            name="filter" 
            checked={filterOption==="December"}
            onChange={this.props.handleFilterChange}/>

          December
          </label>
        </div>
      </div>
    
    
    );
  }
}

export default OptionList;



      
    
        
         
      