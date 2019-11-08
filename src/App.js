import React, { Component } from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Getachew', age: 34 },
      { name: 'Alex', age: 22 },
      { name: 'John', age: 90 },
    ]
  };

  switchNameHandler = () => {
    console.log('clicked')
  };

  render() {
    return (
        <div className="App">
          <h1>Hi, Started</h1>
          <p>This is really working</p>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
    );
  }
}

export default App;
