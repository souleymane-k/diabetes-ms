import React, {Component} from 'react';
import ApiContext from '../../contexts/ApiContext';
import './AddResult.css';
import config  from '../../config.js'

 class AddResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month_taken: {
        value:" ",
        touched: false
      }, 
      meal_taken: {
        value:" ",
        touched: false
      },
      result_read: {
        value:" ",
        touched: false
      },
      date_tested: {
          value:" ",
          touched: false
      },
    //   month_id: {
    //     value:" ",
    //     touched: false
    // },
      description: {
        value:" ",
        touched: false
    },
      diabetestype: {
        value:" ",
        touched: false
    },
     
      error:null,  
    };
  }

   static contextType = ApiContext;

  updateMonth_taken = (month_taken) => {
    this.setState({ month_taken: { value: month_taken, touched: true } });
  }
  updateMeal_taken = (meal_taken) => {
    this.setState({ meal_taken: { value: meal_taken, touched: true } });
  }
  updateResult_read = (result_read) => {
    this.setState({ result_read: { value: result_read, touched: true } });
  }
  updateDate_tested = (date_tested) => {
    this.setState({ date_tested: { value: date_tested, touched: true } });
  }
  // updateMonth_id = (month_id) => {
  //   this.setState({ month_id: { value: month_id, touched: true } });
  // }
  updateDescription = (description) => {
    this.setState({ description: { value: description, touched: true } });
  }
  updateDiabetestype = (diabetestype) => {
    this.setState({ diabetestype: { value:diabetestype, touched: true } });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { month_taken, meal_taken, result_read,date_tested,description, diabetestype} = e.target;
  
    const result = {
      month_taken:month_taken.value,
      meal_taken:meal_taken.value,
      result_read:result_read.value,
      date_tested:date_tested.value,
      // month_id:month_id.value,
      description:description.value,
      diabetestype:diabetestype.value,
      }
   
  this.setState({ error: null })

  fetch(`${config.API_ENDPOINT}/results`,{
        method: 'POST',
        body: JSON.stringify(result),
        // mode: 'no-cors',
        headers: {
         'content-type': 'application/json',
         'Accept': 'application/json',
         'authorization':`bearer ${config.API_TOKEN}`
        }
    })
      .then( res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error
          })
        }
        return res.json()
      })
      
      .then(data => {
        month_taken.value = '';
        meal_taken.value='';
        result_read.value='';
        date_tested.value='';
        // month_id.value = '';
        description.value='';
        diabetestype.value='';
        this.context.addResult(data);
        this.props.history.push('/')
        
      })
      .catch(error => {
          this.setState({ error })
      })
  }


  render() {

  return (
    <form className="add-result" onSubmit={e => this.handleSubmit(e)}>
      <fieldset>
        <div>
          <h2>New Result</h2>
        </div>
        <div className='form-group'>
        <label htmlFor="month">Month_taken *</label>
        <input
        type="text"
        className="form__input"
        name="month_taken"
        id="month_taken"
        required
        onChange={e => this.updateMonth_taken(e.target.value)}
      />
        </div>
        <div className='form-group'>
        <label htmlFor="meal">Meal_taken *</label>
        <input
        type="text"
        className="form__input"
        name="meal_taken"
        id="meal_taken"
        required
        onChange={e => this.updateMeal_taken(e.target.value)}
      />
        </div>

        <div className='form-group'>
        <label htmlFor="meterRead">result_read *</label>
        <input
        type="integer"
        className="form__input"
        name="result_read"
        id="result_read"
        required
        onChange={e => this.updateResult_read(e.target.value)}
      />
        </div>
        <div className='form-group'>
        <label htmlFor="dateTested">date_tested*</label>
        <input
        type="integer"
        className="form__input"
        name="date_tested"
        id="date_tested"
        required
        onChange={e => this.updateDate_tested(e.target.value)}
      />
        </div>

        <div className='form-group'>
        <label htmlFor="description">Description *</label>
        <input
        type="text"
        className="form__input"
        name="description"
        id="description"
        required
        onChange={e => this.updateDescription(e.target.value)}
      />
        </div>
        <div className='form-group'>
        <label htmlFor="diabetestype">DiabetesType*</label>
        <input
        type="text"
        className="form__input"
        name="diabetestype"
        id="diabetestype"
        required
        onChange={e => this.updateDiabetestype(e.target.value)}
      />
        </div>

        <div className="form__button__group"> 
            <button
              type="submit"
              className="form__button"
            >
              
              Save Result
            </button>

            <button type="reset" className="form__button"
              onClick={this.handleClickCancel}
            >
              Cancel
            </button>
          </div>

        {/* <div>
          <button type='submit' className='addResultButton'>Submit</button>
          <button type='cancel' className='addResultButton'>Cancel</button>
        </div> */}
        </fieldset>
      </form>
   
  )
}
 }

 export default AddResult;

  