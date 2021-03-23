import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './InputListItem.css';
import InputItem from '../InputItem/InputItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircleButton from '../CircleButton/CircleButton';


class InputListItem extends Component {
  render(){

        const {filterOption } = this.props;
        // const list = this.props.months
        // .filter(month => month.monthName
        //       && (filterOption === 'All year' || month.monthName === filterOption))
        // .map((month, key) => <InputItem {...month} key={key} />);
     

         const list = this.props.months
            .filter(month => month.monthName
                  && (filterOption === 'All year' || month.monthName === filterOption))
            .map((month, key) => <InputItem {...month} key={key} />);
         
         
            return (
           <div>
          <div className="InputListItem">
             {list}    
      </div>
      <p>The following button is to add new object. Not operation at this stage</p>
      <div className='InputListItem__button-container'>
          <CircleButton
            tag={Link}
            to='/add-result'
            type='button'
            className='InputListIem__add-result-button'
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





     

      

      


    

    );
  }
}

InputListItem.defaultProps = {
  months: []
};

export default InputListItem;