import React from 'react';
import axios from 'axios';
import './App.css';
import StepOne from '../Steps/StepOne.jsx' 
import StepTwo from '../Steps/StepTwo.jsx'
import StepThree from '../Steps/StepThree.jsx'
import StepFour from '../Steps/StepFour.jsx'
import Review from '../Steps/Review.jsx'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
            <Route exact path="/">
              {/* Step one component goes here */}
              <StepOne />
            </Route>
            <Route exact path="/step-2">
              {/* Step two component goes here */}
              <StepTwo />
            </Route>
            <Route exact path="/step-3">
              {/* Step three component goes here */}
              <StepThree />
            </Route>
            <Route exact path="/step-4">
              <StepFour />
            </Route>
            <Route exact path="/review">
              <Review />
            </Route>
        </Router>
    </div>
  );
}

export default App;
