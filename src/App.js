import React, {useState} from 'react';
import Person from './Person/Person';

import './App.css';

const App = () => {
    const [personState, setPersonState] = useState({
        persons: [
            {name: 'Getachew', age: 34},
            {name: 'Alex', age: 22},
            {name: 'John', age: 90},
        ]
    });

   const switchNameHandler = () => {
        // console.log('clicked')
        setPersonState({
            persons: [
                {name: 'Get', age: 34},
                {name: 'Max', age: 22},
                {name: 'John', age: 90},
            ]
        })
    };

    return (
        <div className="App">
            <h1>Hi, Started</h1>
            <p>This is really working</p>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
            <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobbies: Racing </Person>
            <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
        </div>
    );

};

export default App;
