import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props){
    super(props)
    this.state = {
      total: 0,
      val1: 0,
      val2: 0
    };

    this.calculateTotal = this.calculateTotal.bind(this);
    this.updateValueOne = this.updateValueOne.bind(this);
    this.updateValueTwo = this.updateValueTwo.bind(this);

  }

  calculateTotal(event){
    event.preventDefault();
    let num1 = this.state.val1;
    let num2 = this.state.val2;
    this.setState({total: parseInt(num1) + parseInt(num2)});
    console.log('added');
  };

  updateValueOne(event){
    this.setState({val1: event.target.value});
  }

  updateValueTwo(event){
    this.setState({val2: event.target.value});
  }

  
  render() {
    return (
      // <div className="Calculator">
        <div className="container">
          <h1>Add with React!</h1>
            <form onSubmit={this.calculateTotal}>
              <div className="add">
                <input type="integer" value={this.state.val1} onChange={this.updateValueOne} />
                <span>+</span>
                <input type="integer" value={this.state.val2} onChange={this.updateValueTwo} />
                <span>=</span>
                <h3>{this.state.total}</h3>
                <input type="submit" value="submit" />
              </div>
            </form>
          </div>
        // </div>
      );
  }
}





export default Calculator;