import React, { Component } from 'react';
import './App.css';
import Number from './components/number'



class App extends Component {

  state = {
    cars : [
      {name: "Audё", age : 7},
      {name: "Мицуба", age : 13},
      {name: "Mazda", age : 10}
    ],
    pageTitle : "React Title"
  }

  changeTitleHendler = () => {

    const oldTitle = this.state.pageTitle;
    const newTitle = oldTitle + " " + "G"
    
    this.setState({
      pageTitle: newTitle
    })

  }

  render(){
    const cars = this.state.cars

    return (
      <div className="wrap">
         <h1>{this.state.pageTitle}</h1>

         <button onClick={this.changeTitleHendler}>Click</button>

         <Number name={cars[0].name} age={cars[0].age}/>
         <Number name={cars[1].name} age={cars[1].age}/>
         <Number name={cars[2].name} age={cars[2].age} />
       
      
      </div>
      
   
    );
  }
}






export default App;
