import React, {Component} from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';
import People from '../components/People/People';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('App.js constructor');
    }

    state = {
        people: [
            {id: 'asfa1', name: 'Max', age: 28},
            {id: 'vasdf1', name: 'Manu', age: 29},
            {id: 'asdf11', name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPeople: false,
        removeCockpit: true
    };
    static getDerivedStateFromProps(props, state) {
        console.log('App.js getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('App.js componentDidMount');
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.people.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.people[personIndex]
        };

        person.name = event.target.value;

        const people = [...this.state.people];
        people[personIndex] = person;

        this.setState({people: people});
    };

    deletePersonHandler = (personIndex) => {
        const people = [...this.state.people];
        people.splice(personIndex, 1);
        this.setState({people: people});
    };

    togglePeopleHandler = () => {
        const doesShow = this.state.showPeople;
        this.setState({showPeople: !doesShow});
    };

    render() {
        console.log('App.js render');
        let people = null;

        if (this.state.showPeople) {
            people = <People
                people={this.state.people}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
            />;
        }

        return (
            <div className={classes.App}>
                <button onClick={() => this.setState({removeCockpit: false})}>
                    Remove cockpit
                </button>
                { this.state.removeCockpit && <Cockpit
                    people={this.state.people}
                    showPeople={this.state.showPeople}
                    clicked={this.togglePeopleHandler}
                />
                }
                {people}
            </div>
        );
    }
}

export default App;
