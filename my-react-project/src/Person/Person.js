import React from 'react';
import Radium from 'radium';
import './Person.css';


//stateless component
const Person = (props)=>{
    const style = {
        '@media (min-width: 500px)':{
            width: '450px'
        }
    };

    // dynamic JSX is wrapped in single curly braces
    return <div className="Person" style={style}>
            {/* <h1>I am from Person and {Math.random()*30} years old</h1> */}
            <h1 onClick={props.click}>I am {props.name} and my age is {props.age}</h1>
            {/* this is how we access any element between openeing and closing tag of our element */}
            <p onClick={props.click}>{props.children}</p>
            {/* 2 way binding */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
}
    
export default Radium(Person);
