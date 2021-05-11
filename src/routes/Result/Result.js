import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
            {}
          </Link>
        </h2>
        <button
          className='Result__delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          <FontAwesomeIcon icon='trash-alt' />
          {' '}
          Delete
        </button>
        <div className='Result__dates'>
          <div className='Result__dates-date_tested'>
          Date_tested
            {' '}
            <span className='Result'>
              {date_tested}
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
      </div>

    )
  }
}
Result.propTypes = {
  name: PropTypes.string,
  onDeleteResult: PropTypes.func.isRequired
}