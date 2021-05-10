import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ApiContext from '../ApiContext'
import config from '../config'
import './Result.css'

export default class Result extends React.Component {
  static defaultProps ={
    onDeleteResult: () => {},
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const resultId = this.props.id

    fetch(`${config.API_ENDPOINT}/results/${resultId}` , {
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
        this.context.deleteResult(resultId)
        this.props.onDeleteResult(resultId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const {result} = this.props
    // const {month_taken,meal_taken,result_read,date_tested,month_id,userid,description,diabetestype} = this.props
    // const { name, id} = this.props
    // const {name, id, modified} = this.props
    return (
      <div className='Result'>
        <h2 className='Result__title'>
          <Link to={`/result/${id}`}>
            {result}
          </Link>
        </h2>
        <button
          className='Result__delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          <FontAwesomeIcon icon='trash-alt' />
          {' '}
          remove
        </button>
      </div>

    )
  }
}
Result.propTypes = {
  name: PropTypes.string,
  onDeleteResult: PropTypes.func.isRequired
}