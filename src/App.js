import React, { Component } from 'react';
import NavBar from './components/Nav/NavBar'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
