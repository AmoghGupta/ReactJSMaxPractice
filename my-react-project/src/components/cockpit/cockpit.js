import React, { Component } from 'react';
import classes from './cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props)=>  {
    const assignedClasses = [];
    if(props.person.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.person.length <= 1){
      assignedClasses.push(classes.bold);
    }
    // return (
    //     <div className={classes.Cockpit}>
    //         <h1>I am a react app</h1>
    //         <p>{props.appTitle}</p>
    //         <p className={assignedClasses.join(' ')}>This is working</p>
    //         <button style={props.style} onClick={props.togglePersonsHandler}>Toggle Persons</button>
    //     </div>
    // )

    return (

        <Aux>
            <h1>I am a react app</h1>
            <p>{props.appTitle}</p>
            <p className={assignedClasses.join(' ')}>This is working</p>
            <button style={props.style} onClick={props.togglePersonsHandler}>Toggle Persons</button>
            <button onClick={props.login}>Log in</button>
        </Aux>
    )
    
    // // this is how you can  create a component html without having to wrap in a parent div
    // return [
    //     <h1>I am a react app</h1>,
    //         <p>{props.appTitle}</p>,
    //         <p className={assignedClasses.join(' ')}>This is working</p>,
    //         <button style={props.style} onClick={props.togglePersonsHandler}>Toggle Persons</button>
    // ]
}
   

export default cockpit;
  