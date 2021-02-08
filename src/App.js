import { Component } from 'react';
import './App.css';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import Input from './components/Input';
class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
       input : "",
       previousNumber: "",
       currentNumber: "",
       operator: "",
    }
  }
  addToInput = val => {
    this.setState({
      input:this.state.input + val
    })
  };
  addTDecimal = val => {
    //only print decimal if there is no current decimal in the input area
    if(this.state.input.indexOf(".") === -1) {
      this.setState({
        input : this.state.input + val
      })
    }
  }
  addZeroToInput = val => {
    //if no digit is in the input area, it shouldn't print ZERO.
    if (this.state.input !== "") {
      this.setState({
        input : this.state.input + val
      })     
    }
  };
  clearInput=()=>{
    this.setState({
      input:""
    });
  }
  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({
      input:""
    });
    this.state.operator="plus";
  }
  evaluate = () => {
    this.state.currentNumber = this.state.input;
    if(this.state.operator == "plus"){ 
      this.setState({ input : parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber) });
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addTDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    )
  };
};

export default App;
