import React from 'react';
import './LandingPage.css';
// import Souleymane from '../../souleymane-3.jpg'

export default function LandingPage() {
  // <img src={Souleymane} alt="maPhoto"></img>
  return (
   <div>
     {/* <section className="homePageHeader">
        <h1>Diabetes can be managed by accessing and analysing data!</h1>
     </section> */}
    <section className='homePage'>
      <div className="firtssection">
      <h3>What is DMS?</h3>
      <p>DMS is a tool for people in need to record and report their glucose level for personnel use. Recording Your daily diabetes test result with additional comments
DMS allows individuals to input their daily test result and add their intake diet in order to create a relationalship between glucose level and diet
They can classify those data by refencing the year, the month, the date and the test result. </p>
      </div>
      <div className="secondsection">
      <h3>Type 2 Disbetes</h3>
      <p>According to the Center of Disease Control and Prevention, more than 34 million of americans have diabetes and between 90-95% have type 2. DMS is therefore a welcome tool which can help professionnels and everyday people to make decision regards to relationship between diet, physical activity.</p>
      </div>
      <div className="thirdsection">
      <h3>Recording Your daily diabetes test result with additional comments</h3>
      <p>DMS allows individuals to input their daily test results and add their  diet. These data give more tools to doctors create to take the best decision possible for their patients.
        To start your healthy and preventive actions please sign up and enjoy the application. </p>
      </div>
    </section>
    </div>
  
    
  )
};