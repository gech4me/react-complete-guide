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

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };
       person.name = event.target.value;
       const persons = [...this.state.persons];
       persons[personIndex] = person;

        this.setState({
            persons: persons
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
            backgroundColor: 'green',
            color: 'white',
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
                            age={person.age}
                            changed={(event) => this.nameChangeHandler(event, person.id)}/>
                    })}
                </div>
            );
            style.backgroundColor = 'red';
        }
        return (
            <div className="App">
                <h1>React Demo App</h1>
                <p>መልመጃ</p>
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
