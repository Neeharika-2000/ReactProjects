import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component {
 constructor(props){
  super(props);                         
 this.numberOne = this.props.numbers.first;
 this.numberTwo = this.props.numbers.first;
 }

  render() {
    return (
      <>
      <h3> Addition of {this.numberOne} and {this.numberTwo} = {this.numberOne+this.numberTwo} </h3>

      <h3> Subtraction of {this.numberOne} and {this.numberTwo} = {this.numberOne-this.numberTwo} </h3>

      <h3> Multiplication of {this.numberOne} and {this.numberTwo} = {this.numberOne*this.numberTwo} </h3>

      <h3> Division of {this.numberOne} and {this.numberTwo} = {this.numberOne/this.numberTwo} </h3>

      </>
    );
  }
 }

 export default App;