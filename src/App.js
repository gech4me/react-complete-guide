import React, {Component} from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {
    state = {
        persons: [
            {name: 'Getachew', age: 34},
            {name: 'Alex', age: 22},
            {name: 'John', age: 90},
        ],
        showPersons: false,
    };

    switchNameHandler = (newName) => {
        // console.log('clicked')
        this.setState({
            persons: [
                {name: newName, age: 34},
                {name: 'Max', age: 22},
                {name: 'John', age: 90},
            ]
        })
    };

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: event.target.value, age: 34},
                {name: 'Max', age: 22},
                {name: 'John', age: 90},
            ]
        })
    };
    togglePersonHandler = () => {
        this.setState({showPersons: !this.state.showPersons})
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;
        if(this.state.showPersons) {
            persons = (
                <div>
                    <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies:
                        Racing </Person>
                    <Person
                        change={this.nameChangeHandler}
                        click={this.switchNameHandler.bind(this, 'John Witch')}
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}/>
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                </div>
            );
        }
        return (
            <div className="App">
                <h1>Hi, Started</h1>
                <p>This is really working</p>
                <button
                    style={style}
                    onClick={this.togglePersonHandler}>Toggle Persons
                </button>
                {persons}

            </div>
        );
    }
}

export default App;
