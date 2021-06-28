import React from 'react'
import NoteResult from '../../components/NoteResult/NoteResult'
import ApiContext from '../../contexts/ApiContext'
import ResultApiService from '../../services/result-api-service'
import { findResult } from '../../results-helpers'
import './Result.css'


export default class Result extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext
    state ={
      results:[]
    }
  handleDeleteResult = ()=> {
    this.componentDidMount()
  }

  componentDidMount (){
    ResultApiService.getUserResults()
    .then(data =>{
      this.setState({
        results:data
      })
    })
  }

  render() {
    const { results=[] } = this.context
    const { result_id } = this.props.match.params
    const result = findResult(results, result_id) || {content: '' }
    return (
      <section className='NoteResult'>
        {this.state.results.map(result=>(
        <NoteResult 
        key={result.id}
        id={result.id}
        month_taken={result.month_taken}
        meal_taken={result.meal_taken}
        result_read={result.result_read}
        date_tested={result.date_tested}
        month_id={result.month_id}
        userid={result.userid}
        description={result.description}
        diabetestype={result.diabetestype}
        onDeleteResult={this.handleDeleteResult}
      />
        ))}
        
        <div className='NoteResult__content'>
        {result.content.split(/\n \r|\n/).map((para, i) =>
          <p key={i}>{para}</p>
        )}
      </div>
      </section>
    )
  }
  
}
