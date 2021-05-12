import React from 'react'
import NoteResult from '../../components/NoteResult/NoteResult'
import ApiContext from '../../contexts/ApiContext'
import { findResult } from '../../results-helpers'
import './Result.css'
//NotePageMain =result
export default class NotePageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  handleDeleteResult = resultid => {
    this.props.history.push(`/`)
  }
  //this.context.addFolder(data);
  //console.log(this.props.history);
  //this.props.history.push('/')

  render() {
    const { results=[] } = this.context
    const { resultId } = this.props.match.params
    const result = findResult(results, resultId) || {content: '' }
    return (
      <section className='NoteResult'>
      {/* {id,month_taken,meal_taken,result_read,date_tested,month_id,userid,description,diabetestype} = this.props */}

        <NoteResult
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
        <div className='NoteResult__content'>
        {result.content.split(/\n \r|\n/).map((para, i) =>
          <p key={i}>{para}</p>
        )}
      </div>
      </section>
    )
  }
  
}
