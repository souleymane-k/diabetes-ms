import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../../contexts/ApiContext';
import config  from '../../config.js'
import './Result.css'

export default class Result extends React.Component {
  static defaultProps ={
    onDeleteResult: () => {},
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const result_id = this.props.id

    fetch(`${config.API_ENDPOINT}/results/${result_id}` , {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization':`bearer ${config.API_TOKEN}`
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(() => {
        this.context.deleteResult(result_id)
        this.props.onDeleteResult(result_id)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    
    const {id,month_taken,meal_taken,result_read,date_tested,month_id,userid,description,diabetestype} = this.props
    
    return (
      <div className='Result'>
        <h2 className='Result__result_read'>
          <Link to={`/results/${id}`}>
            {month_taken}
          </Link>
        </h2>
        <div className='Result__month_taken'>
          <div className='Result__results_description'>
          month_taken
            {' '}
            <span className='month_taken'>
              {month_taken}
            </span> 
          </div> 
         </div>
         <div className='Result__meal_taken'>
          <div className='Result__results_meal_taken'>
          meal_taken
            {' '}
            <span className='meal_taken'>
              {meal_taken}
            </span> 
          </div> 
         </div>
         <div className='Result__result_read'>
          <div className='Result__result_read'>
          result_read
            {' '}
            <span className='Result'>
              {result_read}
            </span> 
          </div> 
         </div>
         <div className='Result__result_dates'>
          <div className='Result__result_date__tested'>
          date__tested
            {' '}
            <span className='Result_results_date__tested'>
              {date_tested}
            </span> 
          </div> 
         </div>
         <div className='Result__month_id'>
          <div className='Result__results_month_id'>
          month_id
            {' '}
            <span className='month_id'>
              {month_id}
            </span> 
          </div> 
         </div>
         <div className='Result__userid'>
          <div className='Result__results_userid'>
          userid
            {' '}
            <span className='userid'>
              {userid}
            </span> 
          </div> 
         </div>
        
         <div className='Result__description'>
          <div className='Result__results_description'>
          Description
            {' '}
            <span className='Description'>
              {description}
            </span> 
          </div> 
         </div>
         <div className='Result__diabetestype'>
          <div className='Result__dates_diabetestype'>
          diabetestype
            {' '}
            <span className='Result'>
              {diabetestype}
            </span> 
          </div> 
         </div>
         <button
          className='Result__delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          {' '}
          Delete
        </button>
      </div>

    )
  }
}
