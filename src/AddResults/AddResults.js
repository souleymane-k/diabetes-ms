// import React, {Component} from 'react';
// import ValidationError from "../ValidationError/ValidationError";
// import './AddResults.css'
// import {API_ENDPOINT}  from '../config.js'
// import ErrorBoundry from '../ErrorBoundry/ErrorBoundry'


// class AddResults extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         mealName: {
//           value: "", 
//         }, 
//         result: {
//             value: "",   
//         },
//         date: {
//             value: "",  
//         },  
//         description:{
//             value: "",   
//         },
//         error:null,  
//       };
//     }

  

//    updateMealName = (mealName) => {
//       this.setState({ mealName: { value: mealName} });
//     }

//    updateResult = (result) => {
//       this.setState({ result: { value: result} });
//     }
//     updateDate = (date) => {
//         this.setState({ date: { value: date } });
//       }
//     updateDescription = (description) => {
//        this.setState({ description: { value: description } });
//     }


//    handleSubmit = e => {
//         e.preventDefault();
//         const {mealName,result, date, description} = e.target;
//         const meals = {
//             mealName:mealName.value,
//             result:result.value,
//             date:date.value,
//             description:description.value,
           
//           }
       
//       this.setState({ error: null })

//       fetch(`${API_ENDPOINT}/meals`,{
//             method: 'POST',
//             body: JSON.stringify(meals),
//             headers: {
//              'content-type': 'application/json',
//              'Accept': 'application/json'
//             }
//         })
//           .then( res => {
//             if (!res.ok) {
             
//               return res.json().then(error => {
              
//                 throw error
//               })
//             }
//             return res.json()
//           })
          
//           .then(data => {
            
//             mealName.value = '';
//             result.value='';
//             date.value='';
//             description.value = '';
//             this.context.AddResults(data);
//             this.props.history.push('/')
            
//           })
//           .catch(error => {
//               this.setState({ error })
//           })
//       }
   


//     validateMealName() {
//       const mealName = this.state.mealName.value.trim();
//       if (mealName.length === 0) {
//         return "Meal Name is required";
//       } else if (mealName.length < 3) {
//         return "Meal Name must be at least 3 characters long";
//       }
//     }
    
//     validateResult =()=>{
//       const result = this.state.result.value.trim();
//       if (result !== Number){
//         return "result must be a number"
//       }

//     }

//     validateDate =()=>{
//       const date = this.state.date.value.trim();
//       if (date !== Number){
//         return "date must be a number"
//       }

//     }

//     validateDescription=() =>{
//         const description = this.state.description.value.trim();
//         if (description.length === 0) {
//             return "Description is required";
//         } 
//       }
    
//     render() {
//         const nameError = this.validateMealName();
//         const contentError = this.validateDescription();
    
//       return (
//         <form className="add-result-form" onSubmit={e => this.handleSubmit(e)}>
//           <ErrorBoundry>
//           <h2>Add Result</h2>
//           <div className='Diabetes__error' role='alert'>
//              {this.state.error && <p>Something didn't work, please try again</p>}
//           </div>
//           <div className="form-group">
//             <label htmlFor="mealName"> Meal Name *</label>
//             <input
//               type="text"
//               className="form__input"
//               name="mealName"
//               id="mealName"
//               onChange={e => this.updateMealName(e.target.value)}
//             />
//             {this.state.MealName && <ValidationError message={nameError} />}
//           </div>
//           <div className="form-group">
//             <label htmlFor="result">Result *</label>
//             <input
//               type="Number"
//               className="form__input"
//               name="result"
//               id="result"
//               onChange={e => this.updateResult(e.target.value)}
//             />
//             {this.state.result && <ValidationError message={nameError} />}
//           </div>
//           <div className="form-group">
//             <label htmlFor="date"> Date *</label>
//             <input
//               type="date"
//               className="form__input"
//               name="date"
//               id="date"
//               onChange={e => this.updateDate(e.target.value)}
//             />
//             {this.state.date && <ValidationError message={nameError} />}
//           </div>
//           <div className="form-group">
//             <label htmlFor="content">Description *</label>
//             <textarea
//               type="textarea"
//               className="form__input"
//               name="description"
//               id="description"
//               onChange={e => this.updateDescription(e.target.value)}
//             />
//            {this.state.description && <ValidationError message={contentError} />}
//           </div>
//          <div className="form__button__group"> 
//             <button
//               type="submit"
//               className="form__button"
//               disabled={
//                 this.validateMealName() ||
//                 this.validateDescription()        
//               }
//             >
              
//               Save Result
//             </button>

//             <button type="reset" className="form__button"
//               onClick={this.handleClickCancel}
//             >
//               Cancel
//             </button>
//           </div>
//           </ErrorBoundry>
//         </form>
//       );
    
//     }
//   }

// export default AddResults;