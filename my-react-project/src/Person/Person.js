import React from 'react';
import './Person.css';


//stateless component
const Person = (props)=>{


    // dynamic JSX is wrapped in single curly braces
    return <div className="Person">
            {/* <h1>I am from Person and {Math.random()*30} years old</h1> */}
            <h1>I am {props.name} and my age is {props.age}</h1>
            {/* this is how we access any element between openeing and closing tag of our element */}
            <p onClick={props.changeName}>{props.children}</p>
            {/* 2 way binding */}
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
}
    
export default Person;
