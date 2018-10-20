import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import Radium, {StyleRoot} from 'radium';
//Simple
// state means data inside a component
// props means data outside the component
class App extends Component {

  constructor(){
    super();
    //this.switchName.bind(this);
  }

  // class property
  // this is react reserved object
  state = {
    person: [
      {name:'Amogh', age:'26'},
      {name:'Ram', age:'28'},
      {name:'Shyam', age:'27'},
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // if we use the arrow function then 'this' will work easily as it will refer to the this class
  // meaning the enclosing function
  switchName = (value)=>{
    console.log(value);
    // this is how we manipulate state
    this.setState({
      person:[
        {name:'Amogh1', age:'26'},
        {name:'Ram1', age:'28'},
        {name:'Shyam1', age:'27'},
      ]
    })
  }

 // but when we use normal functions we have to bind this at the time when constructor is created
  // because in normal functions this would get undefined
  // switchName = function(){
  //   // this is how we manipulate state
  //   console.log(this.state);
  // }

  nameChangedHandler = (event,index)=>{
    const person = {
      ...this.state.person[index]
    }
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[index] = person;
   
    this.setState({
      person:persons
    })
  }

  togglePersonsHandler = ()=>{
    
    this.setState({
      showPersons: !this.state.showPersons
    })
  }
  
  deletePersonHandler = (index)=>{
    const persons = this.state.person.slice();
    persons.splice(index,1);
    this.setState({
      person: persons
    })
  }

  render() {
    // giving inline styles
    const style = {
     backgroundColor: 'green',
     color: 'white',
     border: '1px solid blue',
     padding: '8px',
     cursor: 'pointer',
     ':hover':{
       backgroundColor: 'lightgreen',
       color: 'black'
     }
    }

    let persons = null;

    if(this.state.showPersons){
      style.backgroundColor = 'red';
      style[':hover']={
        backgroundColor: 'lightred',
        color: 'black'
      }
      persons = (
        <div>
          {this.state.person.map((person,index)=>{
            return <Person name={person.name} 
            age={person.age}
            click = {()=>this.deletePersonHandler(index)}
            key={index}
            changed={(event)=>this.nameChangedHandler(event,index)}></Person>
          })}
            {/* <Person name={this.state.person[0].name} 
          age={this.state.person[0].age} 
          changeName={this.switchName}>I am content inside person directive</Person>
          
          <Person name={this.state.person[1].name} 
          age={this.state.person[1].age} 
          //changeName={this.switchName('hello')}
          changeName={this.switchName.bind(this,'hello')}
          changed={this.nameChangedHandler}>Person1 para</Person>

          <button onClick={()=>this.switchName('hello')}>Switch Name Way2</button> */}
        </div>
      );

    }
    const classes = [];
    if(this.state.person.length <= 2){
      classes.push('red');
    }
    if(this.state.person.length <= 1){
      classes.push('bold');
    }
    return (
      <StyleRoot>
      <div className="App">
         <h1>I am a react app</h1>
         <p className={classes.join(' ')}>This is working</p>
          {/* <button onClick={this.switchName()}>Switch Name</button> */}
          {/* we can pass the function reference as prop to the child so that 
          we can execute the same function from child component */}
          <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
         {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default  Radium(App);
