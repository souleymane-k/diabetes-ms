import React from 'react'
 import { Link } from 'react-router-dom'
import ApiContext from '../../contexts/ApiContext';
import TokenService from '../../services/TokenService'
import config  from '../../config.js'
import './NoteResult.css'

export default class Result extends React.Component {
  static defaultProps ={
    onDeleteResult: () => {},
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const id = this.props.id

    fetch(`${config.API_ENDPOINT}/results/${id}` , {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization':`bearer ${TokenService.getAuthToken()}`
      },
    })
      .then(() => {
        this.props.onDeleteResult(id)
      })
      .catch(error => {
        console.log(e)
        console.error({ error })
      })
  }


  render() {
    
    const {result_id,month_taken,meal_taken,result_read,date_tested,month_id,userid,description,diabetestype} = this.props
    
    return (
      <div className='Result'>
        <h2 className='Result_result_read'>
        <Link to={`/AddResult/${result_id}`}>
            Result
          </Link>
          
        </h2>
        
        <div className='Result_month_taken'>
          <div className='Result_results_description'>
          month_taken

          {'  '}
          
            <span className='month_taken'>
              {month_taken}
            </span> 
          </div> 
         </div>
         <div className='Result__meal_taken'>
          <div className='Resultresults_meal_taken'>
          meal_taken
          {'   '}
            <span className='meal_taken'>
              {meal_taken}
            </span> 
          </div> 
         </div>
         <div className='Result_result_read'>
          <div className='Result_result_read'>
          result_read
          {'   '}
            <span className='Result_read'>
              {result_read}
            </span> 
          </div> 
         </div>
         <div className='Result_result_dates'>
          <div className='Result_result_date__tested'>
          date_tested
          {'   '}
            <span className='date_tested'>
              {date_tested}
            </span> 
          </div> 
         </div>
         <div className='Result_month_id'>
          <div className='Result_results_month_id'>
          month_id
          {'   '}
            <span className='month_id'>
              {month_id}
            </span> 
          </div> 
         </div>
         <div className='Result_userid'>
          <div className='Result_results_userid'>
          userid
          {'   '}
            <span className='userid'>
              {userid}
            </span> 
          </div> 
         </div>
        
         <div className='Result_description'>
          <div className='Result_results_description'>
          Description
            {'   '}
            <span className='Description'>
              {description}
            </span> 
          </div> 
         </div>
         <div className='Result_diabetestype'>
          <div className='Result_results_diabetestype'>
          diabetestype
          {'   '}
            <span className='Result_diabetestype'>
              {diabetestype}
            </span> 
          </div> 
         </div>
         <button
          className='Result_delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          Delete
        </button>
      </div>

    )
  }
}