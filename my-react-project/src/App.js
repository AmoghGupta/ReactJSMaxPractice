import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
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
    otherState: 'some other value'
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
 
  nameChangedHandler = (event)=>{
    this.setState({
      person:[
        {name:'Amogh1', age:'26'},
        {name: event.target.value, age:'28'},
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

  render() {
    // giving inline styles
    const style = {
      color: 'red'
    }
    return (
      <div className="App">
         <h1 style={style}>I am a react app</h1>

          {/* <button onClick={this.switchName()}>Switch Name</button> */}
          {/* we can pass the function reference as prop to the child so that 
          we can execute the same function from child component */}
          <button onClick={this.switchName}>Switch Name Way1</button>

         <Person name={this.state.person[0].name} 
          age={this.state.person[0].age} 
          changeName={this.switchName}>I am content inside person directive</Person>
          
          <Person name={this.state.person[1].name} 
          age={this.state.person[1].age} 
          changeName={this.switchName.bind(this,'hello')}
          changed={this.nameChangedHandler}>Person1 para</Person>

          <button onClick={()=>this.switchName('hello')}>Switch Name Way2</button>

       
      </div>
    );
  }
}

export default App;
