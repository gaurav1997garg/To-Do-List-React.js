import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Todo } from './Components/todo.js';

class App extends Component {
  render() {
    return (
      <div> <Todo /> </div>
    );
  }
}

export default App;
