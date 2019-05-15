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

  changeTitleHendler = (newTitle) => {

    this.setState({
      pageTitle: newTitle
    })
  }

  hendleImput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  render(){
    const cars = this.state.cars

    return (
      <div className="wrap">
         <h1>{this.state.pageTitle}</h1>

         <input onChange={this.hendleImput} type="text" placeholder="text please"/>
        

         <button onClick={this.changeTitleHendler.bind(this, "Clickamba!")}>
            Click
         </button>

         <Number 
            name={cars[0].name} 
            age={cars[0].age}
            onChangeTitle = {this.changeTitleHendler.bind(this, cars[0].name)}
          />
         <Number 
            name={cars[1].name} 
            age={cars[1].age}
            onChangeTitle = {() => {this.changeTitleHendler(cars[1].name)}}
          
          />
         <Number 
            name={cars[2].name}
            age={cars[2].age}
            onChangeTitle = {() => {this.changeTitleHendler(cars[2].name)}} 
          />
       
      
      </div>
      
   
    );
  }
}






export default App;
