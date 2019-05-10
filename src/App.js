import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import Grid from 'react-bootstrap/Grid';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styled from 'styled-components';

class App extends Component {
  render(){
    return (
      <div className="center">
          <FuncName name="Optimus" streetname="Chicko" link="https://brodude.ru/wp-content/uploads/2019/03/29/brodude.ru_29.03.2019_YwSQH2TcFzqD8-985x1024.jpg"/>
          <FuncName name="Ronimus" streetname="Min'ko" link="https://brodude.ru/wp-content/uploads/2019/03/29/brodude.ru_29.03.2019_4oKoajiSvKwLQ-1024x1024.jpg"/>
          <FuncName name="Galvatron" streetname="Mucki" link="#"/>
      </div>
    );
  }
}


 let FuncName = (props) => {
    return (
        <div>
            <h1>My name is {props.name}, but my streetname is {props.streetname} </h1>
            <a href = {props.link}>link</a>
        </div>
    )
}



export default App;
