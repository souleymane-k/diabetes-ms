import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './InputListItem.css';
import InputItem from '../InputItem/InputItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton';

class InputListItem extends Component {
  render() {
        const {filterOption } = this.props;
         const list = this.props.months
            .filter(month => month.monthName
                  && (filterOption === 'All year' || month.monthName === filterOption))
            .map((month, key) => <InputItem {...month} key={key} />);
         return (
           <div>
          <div className="InputList">
             {list}    
      </div>

      <div className='InputItem__button-container'>
          <CircleButton
            tag={Link}
            to='/add-result'
            type='button'
            className='InputIem__add-meal-button'
          >
            <FontAwesomeIcon icon='plus' />
            <br />
            Result
          </CircleButton>
          </div>
      </div>
    





      // class FilterableList extends Component {
//   render() {
//     const { searchTerm, filterOption } = this.props;
//     const list = this.props.files
//         .filter(file => file.name.includes(searchTerm)
//               && (filterOption === 'All' || file.status === filterOption))
//         .map((file, key) => <ListItem {...file} key={key} />);
//     return (
//       <div className="FilterableList">
//         {list}
//       </div>
//     );
//   }
// }





     

      

      
     // const list = this.props.meals
    //     .map((meal, key) => <InputItem {...meal} key={key} />);
    // return (
    //   <div className="InputList">
    //     {list}
    //   </div> 

    

    );
  }
}

InputListItem.defaultProps = {
  months: []
};

export default InputListItem;