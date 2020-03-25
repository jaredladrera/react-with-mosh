import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters'
import Navbar from './components/navbar'

class App extends Component {

  state = {  
    counters: [
        { id: 1, value: 0 },
        { id: 2, value: 2 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
    ]
}

handleDalete = id => {
    // console.log('handle delete ', id );
    const counter = this.state.counters.filter(c => c.id !== id)
    this.setState({
        counters: counter 
    })
}

handleReset = () => {
   let counter =  this.state.counters.map(c => {
        c.value = 0;
        return c;
    })

    this.setState({
        counters: counter   
    })
}

handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({counters});
}

  render() {
    return (
      <React.Fragment>
        <Navbar 
          totalCounter = {this.state.counters.filter(c => c.value > 0).length}
        />
        <Counters 
          value={this.state.counters}
          onReset={this.handleReset} 
          onDelete={this.handleDalete}
          onIncrement={this.handleIncrement} />
      </React.Fragment>
    );

  }
}

export default App;
