import React, {Component} from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {
    state = {
        persons: [
            { id: 1,name: 'Getachew', age: 34},
            { id: 2,name: 'Max', age: 22},
            { id: 3,name: 'John', age: 90},
        ],
        showPersons: false,
    };

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { id: 1,name: event.target.value, age: 34},
                { id: 2,name: 'Max', age: 22},
                { id: 3,name: 'John', age: 90},
            ]
        })
    };

    deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
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
                    {this.state.persons.map((person, index) => {
                        return <Person
                            key={person.id}
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age} />
                    })}
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
