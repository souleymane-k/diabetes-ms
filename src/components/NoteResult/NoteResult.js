import React from 'react'
 import { Link } from 'react-router-dom'
import ApiContext from '../../contexts/ApiContext';
import TokenService from '../../services/TokenService'
import config  from '../../config.js'
import './NoteResult.css'
import moment from 'moment'

export default class NoteResult extends React.Component {
  static defaultProps ={
    month_taken: new Date (),
    date_tested: new Date(),
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
    
    const {id,
      month_taken,
      meal_taken,result_read,date_tested,description,diabetestype} = this.props
    
    return (
      <div className="result-form">
      <div className='Result'>
        <h2 className='Result_link'>
        <Link to={`/AddResult/${id}`}>
             ADD RESULT
          </Link> 
        </h2>
        <div className="resultElements">
        <div className='Result_month_taken'>
          <div className='Result_results_description'>
          month of

          {'  '}

            <span className='month_taken'>
              {moment.utc(month_taken).format("MMMM")}
            </span> 
          </div> 
        
         </div>
         <div className='Result__meal_taken'>
          <div className='Resultresults_meal_taken'>
          meal
          {'   '}
            <span className='meal_taken'>
              {meal_taken}
            </span> 
          </div> 
         </div>
         <div className='Result_result_read'>
          <div className='Result_result_read'>
          result
          {'   '}
            <span className='Result_read'>
              {result_read} {'   '} Mg/Dl
            </span> 
          </div> 
         </div>
         <div className='Result_result_dates'>
          <div className='Result_result_date__tested'>
          date
          {'   '}
            <span className='date_tested'>
              {moment.utc(date_tested).format("MM/DD/YYYY")}
            </span> 
          </div> 
         </div>
         <div className='Results_description'>
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
          DELETE
        </button>
        <Link  to={`/editresult/${id}`} className="edit_result">Edit Result</Link>
      </div>
      </div>
      </div>

    )
  }
}