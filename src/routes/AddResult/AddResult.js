import React, { Component } from 'react'
import ApiContext from '../../contexts/ApiContext'
import ResultsApiService from '../../services/result-api-service'
import './AddResult.css'

class AddResult extends Component {
  static contextType = ApiContext
  state = { error: null, saving: false }

  handleSubmit = async event => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const payload = {
      meal_taken: form.get('meal_taken'),
      result_read: Number(form.get('result_read')),
      date_tested: form.get('date_tested'),
      month_taken: Number(form.get('month_taken')),
      description: form.get('description'),
      diabetestype: form.get('diabetestype'),
    }
    this.setState({ error: null, saving: true })
    try {
      await ResultsApiService.postResult(payload)
      this.props.history.push('/home')
    } catch (error) {
      this.setState({ error: error.message, saving: false })
    }
  }

  render() {
    const { error, saving } = this.state
    return (
      <form className='add-result' onSubmit={this.handleSubmit}>
        <fieldset>
          <h2>New Result</h2>
          {error && <p role='alert' className='form-error'>{error}</p>}
          <div className='form-group'><label htmlFor='meal_taken'>Meal *</label><input id='meal_taken' name='meal_taken' type='text' required /></div>
          <div className='form-group'><label htmlFor='result_read'>Blood glucose (mg/dL) *</label><input id='result_read' name='result_read' type='number' min='0' step='1' required /></div>
          <div className='form-group'><label htmlFor='date_tested'>Date *</label><input id='date_tested' name='date_tested' type='date' required /></div>
          <select name='month_taken' className='form-group-select' required defaultValue=''><option value='' disabled>Select month</option>{['January','February','March','April','May','June','July','August','September','October','November','December'].map((month, index) => <option key={month} value={index + 1}>{month}</option>)}</select>
          <div className='form-group'><label htmlFor='description'>Description *</label><input id='description' name='description' type='text' required /></div>
          <div className='form-group'><label htmlFor='diabetestype'>Diabetes type *</label><input id='diabetestype' name='diabetestype' type='text' required /></div>
          <div className='form__button__group'><button className='form__button' type='submit' disabled={saving}>{saving ? 'Saving...' : 'Save Result'}</button></div>
        </fieldset>
      </form>
    )
  }
}

export default AddResult
