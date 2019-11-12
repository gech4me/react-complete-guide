import React, { useEffect } from 'react';
import classes from "./Cockpit.css";


const cockpit = (props) => {
    useEffect(() => {
        console.log('Cockpit.js useEffect');

        setTimeout(() => {
            alert('Saved data to cloud!');
        },1000);

        return () => {
            console.log('Cockpit.js cleanup work in useEffect');
        }
    }, []);

    const assignedClasses = [];
    if (props.people.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.people.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    let btnClass = '';
    if(props.showPeople) {
        btnClass = classes.red;
    }
  return (
      <div className={classes.Cockpit}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button
              className={btnClass}
              onClick={props.clicked}>Toggle people
          </button>
      </div>
  );
};

export default cockpit;