import React, { Component } from 'react';
import ApiContext from '../../contexts/ApiContext';
import TokenService from '../../services/TokenService'
import './EditResult.css';
import config from '../../config.js'
import moment from 'moment'
import { Link } from 'react-router-dom';


class EditResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meal_taken: {
        value: " ",
        touched: false
      },
      result_read: {
        value: " ",
        touched: false
      },
      date_tested: {
        value: " ",
        touched: false
      },
      month_taken: {
        value: " ",
        touched: false
      },
      description: {
        value: " ",
        touched: false
      },
      diabetestype: {
        value: " ",
        touched: false
      },

      error: null,
      
    };
  }

  static contextType = ApiContext;

  componentDidMount(){
      const id = this.props.match.params.id;
      fetch(`${config.API_ENDPOINT}/results/${id}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Accept': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`
        }
      })
        .then(res => {
          if (!res.ok) {
            return res.json().then(error => {
              throw error
            })
          }
          return res.json()
        })
  
        .then(data => {
          console.log(data)
          console.log(moment(data.date_posted).format("YYYY-MM-DD"));
          this.setState({
              meal_taken:{value: data.meal_taken, touched: true},
              result_read:{ value: data.result_read, touched: true },
              date_tested: { value: moment(data.date_tested).format("YYYY-MM-DD"), touched: true },
              month_taken: { value: data.month_taken, touched: true },
              description: { value: data.description, touched: true },
              diabetestype: { value: data.diabetestype, touched: true }

          })
        })
        .catch(error => {
          console.log(error)
          this.setState({ error })
        })
    
      
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
  updateMonth_taken = (month_taken) => {
    this.setState({ month_taken: { value: month_taken, touched: true } });
  }
  updateDescription = (description) => {
    this.setState({ description: { value: description, touched: true } });
  }
  updateDiabetestype = (diabetestype) => {
    this.setState({ diabetestype: { value: diabetestype, touched: true } });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    const {meal_taken, result_read, date_tested,month_taken, description, diabetestype } = e.target;
    const result = {
      meal_taken: meal_taken.value,
      result_read: result_read.value,
      date_tested: date_tested.value,
      month_taken: month_taken.value,
      description: description.value,
      diabetestype: diabetestype.value,
    }
    console.log('message')
    const id = this.props.match.params.id;
    this.setState({ error: null })
    
    fetch(`${config.API_ENDPOINT}/results/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(result),
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      // .then(res => {
      //   if (!res.ok) {
      //     return res.json().then(error => {
      //       throw error
      //     })
      //   }
      //   return res.json()
      // })

      .then(data => {
        meal_taken.value = '';
        result_read.value = '';
        date_tested.value = '';
        month_taken.value = '';
        description.value = '';
        diabetestype.value = '';
        this.props.history.push('/home')
      })
      .catch(error => {
        console.log(error)
        this.setState({ error })
      })
  }


  render() {
    return (
      <form className="add-result" onSubmit={e => this.handleSubmit(e)}>
        <fieldset>
          <div>
            <h2>Edit Result</h2>
          </div>
          <div className='form-group'>
            <label htmlFor="meal_taken">Meal*</label>
            <input
              type="text"
              className="form__input"
              value={this.state.meal_taken.value}
              name="meal_taken"
              id="meal_taken"
              required
              onChange={e => this.updateMeal_taken(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="result_read">result*</label>
            <input
              type="integer"
              className="form__input"
              value={this.state.result_read.value}
              name="result_read"
              id="result_read"
              required
              onChange={e => this.updateResult_read(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="date_tested">date*</label>
            <input
              type="integer"
              className="form__input"
              value={this.state.date_tested.value}
              name="date_tested"
              id="date_tested"
              required
              onChange={e => this.updateDate_tested(e.target.value)}
            />
          </div>
          <select name="month_taken" className="form-group-select" required onChange={e => this.updateMonth_taken(e.target.value)}  >
          <option value="">Select An Option</option>
            <option value="1" selected={this.state.month_taken.value === 1}>January</option>
            <option value="2" selected={this.state.month_taken.value === 2}>February</option>
            <option value="3" selected={this.state.month_taken.value === 3}>March</option>
            <option value="4" selected={this.state.month_taken.value === 4}>April</option>
            <option value="5" selected={this.state.month_taken.value === 5}>May</option>
            <option value="6" selected={this.state.month_taken.value === 6}>June</option>
            <option value="7" selected={this.state.month_taken.value === 7}>July</option>
            <option value="8" selected={this.state.month_taken.value === 8}>Aout</option>
            <option value="9" selected={this.state.month_taken.value === 9}>September</option>
            <option value="10" selected={this.state.month_taken.value === 10}>October</option>
            <option value="11" selected={this.state.month_taken.value === 11}>November</option>
            <option value="12" selected={this.state.month_taken.value === 12}>December</option>
          </select>

          <div className='form-group'>
            <label htmlFor="description">Description *</label>
            <input
              type="text"
              className="form__input"
              value={this.state.description.value}
              name="description"
              id="description"
              required
              onChange={e => this.updateDescription(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="diabetestype">Diabetestype*</label>
            <input
              type="text"
              className="form__input"
              value={this.state.diabetestype.value}
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
            // onClick={this.handleSubmit}
            >

              Save Result
            </button>

            <Link to={'/home'} type="reset" className="form__button_cancel"
              onClick={this.handleClickCancel}
            >
              Cancel
            </Link>
          </div>

        </fieldset>
      </form>

    )
  }
}

export default EditResult;

