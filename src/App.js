import React, { Component } from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {

  render() {
    return (
        <div className="App">
          <h1>Hi, Started</h1>
          <p>This is really working</p>
          <Person name="Getachew" age="27"/>
          <Person name="Alemu" age="10">My hobbies: Racing </Person>
          <Person name="John" age="28"/>
        </div>
    );
  }
}

export default App;
