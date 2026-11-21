import React from 'react'
import { Link } from 'react-router-dom'
import ResultsApiService from '../../services/result-api-service'
import './NoteResult.css'

export default class NoteResult extends React.Component {
  state = { deleting: false, error: null }

  handleDelete = async () => {
    this.setState({ deleting: true, error: null })
    try {
      await ResultsApiService.deleteResult(this.props.id)
      this.props.onDeleteResult(this.props.id)
    } catch (error) { this.setState({ deleting: false, error: error.message }) }
  }

  render() {
    const { id, monthName, mealName, result, date, description, diabetesType } = this.props
    return (
      <article className='result-form'>
        {this.state.error && <p role='alert' className='form-error'>{this.state.error}</p>}
        <h3>{monthName || 'Blood glucose result'}: {result} mg/dL</h3>
        <p><strong>Meal:</strong> {mealName}</p>
        <p><strong>Date:</strong> {date ? new Date(date).toLocaleDateString() : ''}</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Diabetes type:</strong> {diabetesType}</p>
        <button className='Result_delete' type='button' onClick={this.handleDelete} disabled={this.state.deleting}>{this.state.deleting ? 'Deleting...' : 'DELETE'}</button>
        <Link to={`/editresult/${id}`} className='edit_result'>Edit Result</Link>
      </article>
    )
  }
}
