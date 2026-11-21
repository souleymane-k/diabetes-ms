import React from 'react'
import NoteResult from '../../components/NoteResult/NoteResult'
import ResultsApiService from '../../services/result-api-service'
import './Result.css'

export default class Result extends React.Component {
  state = { results: [], summary: null, loading: true, error: null }

  componentDidMount() { this.loadData() }

  loadData = async () => {
    this.setState({ loading: true, error: null })
    try {
      const [results, summary] = await Promise.all([ResultsApiService.getUserResults(), ResultsApiService.getSummary()])
      this.setState({ results, summary, loading: false })
    } catch (error) { this.setState({ error: error.message, loading: false }) }
  }

  handleDeleteResult = id => this.setState({ results: this.state.results.filter(item => item.id !== id) }, this.loadData)

  render() {
    const { results, summary, loading, error } = this.state
    return (
      <section className='NoteResult'>
        <h2>Your Diabetes Results</h2>
        {loading && <p>Loading results...</p>}
        {error && <p role='alert' className='form-error'>{error}</p>}
        {summary && !loading && (
          <div className='result-summary'>
            <h3>Summary</h3>
            <p><strong>Total readings:</strong> {summary.count}</p>
            <p><strong>Overall average:</strong> {summary.average === null ? 'N/A' : `${summary.average.toFixed(1)} mg/dL`}</p>
            {summary.byMonth.map(month => <p key={month.monthName}><strong>{month.monthName}:</strong> {month.count} reading(s), average {month.average === null ? 'N/A' : `${month.average.toFixed(1)} mg/dL`}</p>)}
          </div>
        )}
        {!loading && results.length === 0 && <p>No readings yet. Add your first result.</p>}
        {results.map(item => <NoteResult key={item.id} {...item} onDeleteResult={this.handleDeleteResult} />)}
      </section>
    )
  }
}
