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
    pageTitle : "React Title",
    showCars: false
  }

  toggleCarsHendler = () => { 

    this.setState({
      showCars: !this.state.showCars
    })
  }

  changeTitleHendler = (pageTitle) => {
      this.setState({pageTitle})
  }


  render(){
  
    let cars = null;

    if(this.state.showCars){
       cars = this.state.cars.map((car, index) => {
          return (
            <Number
              key = {index}
              name = {car.name}
              age = {car.age}
              onChangeTitle = {()=>{this.changeTitleHendler(car.name)}}
            />
          )
        })
    }

    return (
      <div className="wrap">
         <h1>{this.state.pageTitle}</h1>

         <button className="btn" onClick={this.toggleCarsHendler}>
            Toggle cars
         </button>

         { cars }

      </div>
      
   
    );
  }
}






export default App;
