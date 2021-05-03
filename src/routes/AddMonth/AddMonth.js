import React, {Component} from 'react';
import './AddMonth.css'
import config  from '../../config.js'
import ApiContext from '../../contexts/ApiContext';

class AddMonth extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        month_taken: {
          value: "",
          touched: false
        },    
        error:null,   
      };
    }

    static contextType = ApiContext;
  
   
   updateMonth_taken = (month_taken)=> {
      this.setState({ month_taken: { value: month_taken, touched: true } });
    }

   handleSubmit = e => {
         e.preventDefault();
        const {month_taken} = e.target;
        const month = {
            month_taken:month_taken.value,
          }
        this.setState({ error: null })

        fetch(`${config.API_ENDPOINT}/months`,{
            method: 'POST',
            body: JSON.stringify(month),
             headers: {
             'content-type': 'application/json',
             'Accept': 'application/json',
             'authorization':`bearer ${config.API_TOKEN}`
            },
        })
          .then(async res => {
            if (!res.ok) {
              const error = await res.json();
                throw error;
            }
            return res.json()
          })
          .then(data => {
            month_taken.value = '';
            this.context.AddMonth(data);
            console.log(this.props.history);
            this.props.history.push('/')

          })
          .catch(error => {
            this.setState({ error })
          })
      }
  
  
    render() {

      
      return (
        <form className="add-month" onSubmit={e => this.handleSubmit(e)}>
        <fieldset>
          <h2>Add Month</h2>
          <div className='Noteful__error' role='alert'>
             {this.state.error && <p>Something didn't work, please try again</p>}
          </div>
          <div className="form-group">
            <label htmlFor="month">Month_taken *</label>
            <input
              type="text"
              className="form__input"
              name="month_taken"
              id="month_taken"
              required
              onChange={e => this.updateMonth_taken(e.target.value)}
            />
          <button type="submit">Save</button>
                </div>
                </fieldset>
        </form>
      );
    }
  }

export default AddMonth;