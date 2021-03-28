import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
faPlus, faChevronLeft, faTrashAlt, faCheckDouble
} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'



library.add(faPlus, faChevronLeft, faTrashAlt, faCheckDouble)



const MONTHS = [
       {"id":"50",  "monthName":"January",  "mealName":"Breakfast","result":"115 mg/dl","date":"01/01/2021","description":" take 2hrs after breakfast. 2 bananas", "dtype":"type 1" },
        {"id":"51", "monthName":"February","mealName":"Lunch","result":"110 mg/dl","date":"01/03/2021","description":"take 2hrs after breakfast. 2 bananas","dtype":"type 1"},
        {"id":"52", "monthName":"March","mealName":"Dinner","result":"140 mg/dl","date":"01/06/2021","description":"take 2hrs after breakfast. 2 bananas", "dtype":"type 1"},
        { "id":"53","monthName":"April","mealName":"Breakfast","result":"130 mg/dl","date":"01/05/2021","description":" take 2hrs after breakfast. 2 bananas", "dtype":"type 1"},
        {"id":"54", "monthName":"May","mealName":"Fasting","result":"80 mg/dl","date":"01/09/2021","description":"nothing eaten", "Diabetes-type":"type 1"},
        {"id":"55", "monthName":"June","mealName":"Breakfast","result":"120 mg/dl","date":"01/10/2021","description":" take 2hrs after breakfast. 2 bananas","dtype":"type 1"},
        { "id":"56","monthName":"July","mealName":"Fasting","result":"75 mg/dl","date":"01/12/2021","description":"nothing eaten","Diabetes-type":"type 1"},
        {"id":"57", "monthName":"August","mealName":"Dinner","result":"140 mg/dl","date":"01/06/2021","description":"take 2hrs after breakfast. 2 bananas","dtype":"type 1"},
        { "id":"58","monthName":"September","mealName":"Breakfast","result":"130 mg/dl","date":"01/05/2021","description":" take 2hrs after breakfast. 2 bananas","dtype":"type 1"},
        {"id":"59", "monthName":"October","mealName":"Fasting","result":"80 mg/dl","date":"01/09/2021","description":"nothing eaten","Diabetes-type":"type 1"},
        { "id":"60","monthName":"November","mealName":"Breakfast","result":"120 mg/dl","date":"01/10/2021","description":" take 2hrs after breakfast. 2 bananas","dtype":"type 1"},
        { "id":"61","monthName":"December","mealName":"Fasting","result":"75 mg/dl","date":"01/12/2021","description":"nothing eaten","Diabetes-type":"type 1"},
        { "id":"62","monthName":"January","mealName":"Breakfast","result":"120 mg/dl","date":"01/10/2021","description":" take 2hrs after breakfast. 2 bananas","dtype":"type 1"},
        { "id":"63","monthName":"May","mealName":"Fasting","result":"75 mg/dl","date":"01/12/2021","description":"nothing eaten","Diabetes-type":"type 1"},
        { "id":"64","monthName":"November","mealName":"Breakfast","result":"120 mg/dl","date":"01/10/2021","description":" take 2hrs after breakfast. 2 bananas","dtype":"type 1"},
        { "id":"65","monthName":"January","mealName":"Fasting","result":"75 mg/dl","date":"01/12/2021","description":"nothing eaten","dtype":"type 1"}
];

console.log(process.env)

ReactDOM.render(
  <BrowserRouter>
    <App months={MONTHS}/>
    </BrowserRouter>,
     document.getElementById('root'));

    

