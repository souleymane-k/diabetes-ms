import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './components/App/App';
 import { AuthProvider } from './contexts/AuthContext'
import { AppProvider } from './contexts/AppContext'
// import AppError from './components/AppError/AppError'

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
    <AppProvider>
      <App />
      </AppProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('root'));

// ReactDOM.render(
//     <BrowserRouter>
//         <AppProvider>
//           <App />
//         </AppProvider>
//     </BrowserRouter>,
//   document.getElementById('root')
// );


// import React from 'react'
// import ReactDOM from 'react-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import {faPlus, faChevronLeft, faTrashAlt, faCheckDouble} from '@fortawesome/free-solid-svg-icons'
// import { BrowserRouter } from 'react-router-dom'
// import './index.css'
// import App from './components/App/App';
// import store from './store';





//const results = [
//   {
//       "id":1,
//       "month_taken":"January",
//       "meal_taken":"Lunch",
//       "result_read":"110",
//       "date_tested":"01-03-2021",
//       "month_id":1,
//       "user_id":1,
//       "description":"take 2hrs after breakfast. 2 bananas",
//       "diabetesType":"type 1"
//     },
//     {
//      "id":2,
//       "month_taken":"February",
//       "meal_taken":"Lunch",
//       "result_read":"110",
//       "date_tested":"02-03-2021",
//       "month_id":2,
//       "user_id":1,
//       "description":"take 2hrs after breakfast. 2 bananas",
//       "diabetesType":"type 1"
//     },
//     {
//       "id":3,
//       "month_taken":"March",
//       "meal_taken":"Lunch",
//       "result_read":"110",
//       "date_tested":"03-03-2021",
//       "month_id":3,
//       "user_id":1,
//       "description":"take 2hrs after breakfast. 2 bananas",
//       "diabetesType":"type 1"
//     },
//     {
//       "id":4,
//      "month_taken":"April",
//      "meal_taken":"Lunch",
//      "result_read":"110",
//      "date_tested":"04-03-2021",
//      "month_id":4,
//      "user_id":2,
//      "description":"take 2hrs after breakfast. 2 bananas",
//      "diabetesType":"type 1"
//     },
//     {
//       "id":5,
//      "month_taken":"May",
//      "meal_taken":"Lunch",
//      "result_read":"110",
//      "date_tested":"05-03-2021",
//      "month_id":4,
//      "user_id":2,
//      "description":"take 2hrs after breakfast. 2 bananas",
//      "diabetesType":"type 1"
//     },
//     {
//       "id":6,
//       "month_taken":"June",
//       "meal_taken":"Lunch",
//       "result_read":"110",
//       "date_tested":"06-03-2021",
//       "month_id":6,
//       "user_id":2,
//       "description":"take 2hrs after breakfast. 2 bananas",
//       "diabetesType":"type 1"
//     },
//     {
//       "id":7,
//      "month_taken":"July",
//      "meal_taken":"Lunch",
//       "result_read":"110",
//       "date_tested":"07-03-2021",
//       "month_id":7,
//       "user_id":3,
//       "description":"take 2hrs after breakfast. 2 bananas",
//       "diabetesType":"type 1"
//     },
//     {
//       "id":8,
//      "month_taken":"August",
//      "meal_taken":"Lunch",
//       "result_read":"110",
//      "date_tested":"08-03-2021",
//       "month_id":8,
//       "user_id":1,
//      "description":"take 2hrs after breakfast. 2 bananas",
//       "diabetesType":"type 1"
//     },
//     {
//       "id":9,
//      "month_taken":"September",
//       "meal_taken":"Lunch",
//       "result_read":"110",
//       "date_tested":"09-03-2021",
//       "month_id":9,
//       "user_id":4,
//       "description":"take 2hrs after breakfast. 2 bananas",
//       "diabetesType":"type 1"
//     },
//     {
//       "id":10,
//       "month_taken":"October",
//       "meal_taken":"Lunch",
//       "result_read":"110",
//       "date_tested":"10-03-2021",
//       "month_id":10,
//       "user_id":4,
//       "description":"take 2hrs after breakfast. 2 bananas",
//       "diabetesType":"type 1"
//     },
//     {
//       "id":11,
//      "month_taken":"November",
//       "meal_taken":"Lunch",
//       "result_read":"110",
//       "date_tested":"11-03-2021",
//       "month_id":11,
//       "user_id":4,
//       "description":"take 2hrs after breakfast. 2 bananas",
//       "diabetesType":"type 1"
//     },
//     {
//       "id":12,
//       "month_taken":"December",
//       "meal_taken":"Lunch",
//       "result_read":"110",
//       "date_tested":"12-03-2021",
//       "month_id":12,
//       "user_id":3,
//       "description":"take 2hrs after breakfast. 2 bananas",
//       "diabetesType":"type 1"
//     },
//     {
//       "id":13,
//       "month_taken":"January",
//       "meal_taken":"Dinner",
//       "result_read":"120",
//       "date_tested":"01-03-2021",
//       "month_id":1,
//       "user_id":1,
//       "description":"take 2hrs after breakfast. 2 bananas",
//       "diabetesType":"type 1"
//     },
//     {
//       "id":14,
//       "month_taken":"January",
//       "meal_taken":"Breakfast",
//       "result_read":"90",
//       "date_tested":"01-03-2021",
//       "month_id":1,
//       "user_id":1,
//       "description":"take 2hrs after breakfast. 2 bananas",
//       "diabetesType":"type 1"
//     },
//   {
//       "id":15,
//       "month_taken":"February",
//       "meal_taken":"Breakfast",
//       "result_read":"110",
//       "date_tested":"02-03-2021",
//       "month_id":2,
//       "user_id":1,
//       "description":"take 2hrs after breakfast. 2 bananas",
//       "diabetesType":"type 1"
//   },
//   {
//       "id":16,
//       "month_taken":"February",
//       "meal_taken":"Dinner",
//       "result_read":"110",
//       "date_tested":"02-03-2021",
//       "month_id":2,
//       "user_id":2,
//       "description":"take 2hrs after breakfast. 2 bananas",
//       "diabetesType":"type 1"
//   },
//   {
//       "id":17,
//       "month_taken":"June",
//       "meal_taken":"Brakfast",
//       "result_read":"110",
//       "date_tested":"06-03-2021",
//       "month_id":6,
//       "user_id":2,
//       "description":"take 2hrs after breakfast. 2 bananas",
//       "diabetesType":"type 1"
//   },
//   {
//       "id":18,
//       "month_taken":"June",
//       "meal_taken":"Lunch",
//       "result_read":"110",
//       "date_tested":"06-03-2021",
//       "month_id":6,
//       "user_id":3,
//       "description":"take 2hrs after breakfast. 2 bananas",
//       "diabetesType":"type 1"
//   },
//   {
//   "id":19,
//   "month_taken":"July",
//   "meal_taken":"Breakfast",
//   "result_read":"110",
//   "date_tested":"07-03-2021",
//   "month_id":7,
//   "user_id":4,
//   "description":"take 2hrs after breakfast. 2 bananas",
//   "diabetesType":"type 1"
//   },
//   {
//   "id":20,
//   "month_taken":"December",
//   "meal_taken":"Breakfast",
//   "result_read":"110",
//   "date_tested":"12-03-2021",
//   "month_id":12,
//   "user_id":4,
//   "description":"take 2hrs after breakfast. 2 bananas",
//   "diabetesType":"type 1"
//   }
// ]

console.log(process.env)

// ReactDOM.render(
//   <BrowserRouter>
//     <App months={results}/>
//     </BrowserRouter>,
//      document.getElementById('root'));

// ReactDOM.render(
//   <BrowserRouter>
//     <App/>
//     </BrowserRouter>,
//      document.getElementById('root'));


