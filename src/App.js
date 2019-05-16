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

         {this.state.cars.map((car, index) => {
            return (
              <Number
                 key = {index}
                 name = {car.name}
                 age = {car.age}
                 onChangeTitle = {()=>{this.changeTitleHendler(car.name)}}
              />
            )
         })}

      </div>
      
   
    );
  }
}






export default App;
