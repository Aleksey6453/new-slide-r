import React, { Component } from 'react';
import './App.css';
import Number from './components/number'



class App extends Component {
  render(){
    return (
      <div className="wrap">
         <Number name="Audё" age={7}/>
         <Number name="Мицуба" age={13}/>
      
      
      </div>
      
   
    );
  }
}






export default App;
