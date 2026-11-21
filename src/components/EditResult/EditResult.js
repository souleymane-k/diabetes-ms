import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ResultsApiService from '../../services/result-api-service'
import './EditResult.css'

class EditResult extends Component {
  state = { meal_taken: '', result_read: '', date_tested: '', month_taken: '', description: '', diabetestype: '', error: null, saving: false }

  async componentDidMount() {
    try {
      const data = await ResultsApiService.getResultById(this.props.match.params.id)
      this.setState({
        meal_taken: data.mealName || '', result_read: data.result || '',
        date_tested: data.date ? data.date.slice(0, 10) : '', month_taken: data.monthid || '',
        description: data.description || '', diabetestype: data.diabetesType || '',
      })
    } catch (error) { this.setState({ error: error.message }) }
  }

  handleSubmit = async event => {
    event.preventDefault()
    this.setState({ error: null, saving: true })
    const payload = {
      meal_taken: this.state.meal_taken, result_read: Number(this.state.result_read),
      date_tested: this.state.date_tested, month_taken: Number(this.state.month_taken),
      description: this.state.description, diabetestype: this.state.diabetestype,
    }
    try {
      await ResultsApiService.patchResult(this.props.match.params.id, payload)
      this.props.history.push('/home')
    } catch (error) { this.setState({ error: error.message, saving: false }) }
  }

  update = (key, value) => this.setState({ [key]: value })

  render() {
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    return (
      <form className='add-result' onSubmit={this.handleSubmit}>
        <fieldset>
          <h2>Edit Result</h2>{this.state.error && <p role='alert' className='form-error'>{this.state.error}</p>}
          <div className='form-group'><label htmlFor='edit-meal'>Meal *</label><input id='edit-meal' value={this.state.meal_taken} onChange={event => this.update('meal_taken', event.target.value)} required /></div>
          <div className='form-group'><label htmlFor='edit-result'>Blood glucose (mg/dL) *</label><input id='edit-result' type='number' min='0' value={this.state.result_read} onChange={event => this.update('result_read', event.target.value)} required /></div>
          <div className='form-group'><label htmlFor='edit-date'>Date *</label><input id='edit-date' type='date' value={this.state.date_tested} onChange={event => this.update('date_tested', event.target.value)} required /></div>
          <select className='form-group-select' value={this.state.month_taken} onChange={event => this.update('month_taken', event.target.value)} required>{months.map((month, index) => <option key={month} value={index + 1}>{month}</option>)}</select>
          <div className='form-group'><label htmlFor='edit-description'>Description *</label><input id='edit-description' value={this.state.description} onChange={event => this.update('description', event.target.value)} required /></div>
          <div className='form-group'><label htmlFor='edit-type'>Diabetes type *</label><input id='edit-type' value={this.state.diabetestype} onChange={event => this.update('diabetestype', event.target.value)} required /></div>
          <div className='form__button__group'><button className='form__button' type='submit' disabled={this.state.saving}>{this.state.saving ? 'Saving...' : 'Save Result'}</button><Link to='/home' className='form__button_cancel'>Cancel</Link></div>
        </fieldset>
      </form>
    )
  }
}

export default EditResult
