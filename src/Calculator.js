import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props){
    super(props)
    this.state = {
      total: 0,
      val1: 0,
      val2: 0
    }

    this.calculateTotal = this.calculateTotal.bind(this);
    this.updateValues = this.updateValues.bind(this);

  }

  calculateTotal(event){
    this.setState({total: this.state.val1 + this.state.val2});
  }

  updateValues(event){
    this.setState({val1: event.target.val1, val2: event.target.val2});
  }


  render() {
    return (
      <div className="Calculator">
        <div className="container">
          <h1>Add with React!</h1>
            <form onSubmit={this.calculateTotal}>
              <input type="text" value={this.state.val1} onChange={this.updateValues}/>
              <span>+</span>
              <input type="text" value={this.state.val2} onChange={this.updateValues} />
              <span>=</span>
              <h3>{this.state.total}</h3>
            </form>
            <input type="submit" value="calculate" />
          </div>
        </div>
      );
  }
}





export default Calculator;