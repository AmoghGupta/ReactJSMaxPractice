import React, { PureComponent } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/cockpit';
import classes from './App.css';
import Radium, {StyleRoot} from 'radium';
import Aux from '../hoc/Aux';
import WithClass1 from '../hoc/WithClass1';


export const AuthContext = React.createContext(false);

//pure components do shallow checks and thus improves performance
class App extends PureComponent {
  constructor(){
    super();
    console.log('[App.js] constructor , sideffects occur here');
    //this.switchName.bind(this);
  }
  componentWillMount(){
    console.log('[App.js] componentWillMount');
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount,  sideffects occur here');
  }


  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Updated App.js] Inside should component update', nextProps, nextState);
  //   return true;
  // }

  componentWillUpdate(nextProps, nextState){
      console.log('[Updated App.js] Inside component will update', nextProps, nextState);
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log('[Updated App.js] Inside getDerivedStateFromProps', nextProps, prevState);
    return prevState;
  }


  getSnapshotBeforeUpdate(){
    console.log('[Updated App.js] Inside getSnapshotBeforeUpdate');
  }

  componentDidUpdate(){
      console.log('[Updated App.js] Inside component did update');
  }


  componentWillUnmount() {
    // Component is about to get removed => Perform any cleanup work here!
    console.log('[App.js] component Will unmount');
  }

  state = {
    person: [
      {name:'Amogh', age:'26'},
      {name:'Ram', age:'28'},
      {name:'Shyam', age:'27'},
    ],
    otherState: 'some other value',
    showPersons: false,
    toggleClickedCounter: 0,
    authenticated: false  }

  switchName = (value)=>{
    console.log(value);
    this.setState({
      person:[
        {name:'Amogh1', age:'26'},
        {name:'Ram1', age:'28'},
        {name:'Shyam1', age:'27'},
      ]
    })
  }
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
    // setState method is handled asynchronously by react so if any other place updates the state
    // at the same time then values will not be correct hence,
    // when updating state either create a copy of the object first from state and then update
    // the state using the copy
    // other way is when the state is dependent on the previous value like below as this is a safe way
    this.setState((prevState, props)=>{
      return{
        showPersons: !prevState.showPersons,
        toggleClickedCounter: prevState.toggleClickedCounter+1
      }
    });
  }
  
  deletePersonHandler = (index)=>{
    const persons = this.state.person.slice();
    persons.splice(index,1);
    this.setState({
      person: persons
    })
  }

  loginHandler = ()=>{
    this.setState({
      authenticated: true
    })
  }
  

  render() {

    console.log('[App.js] render method');
    
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
      persons = (  
      <div>
        <Persons person={this.state.person}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}
        ></Persons>
      </div>
      );
      style.backgroundColor = 'red';
      style[':hover']={
        backgroundColor: 'lightred',
        color: 'black'
      }
    }

    
    return (
      
      <StyleRoot>
      <Aux>
        <button onClick={()=>{this.setState({showPersons:true})}}>Show Persons</button>
          <Cockpit
          appTitle = {this.props.title}
          person = {this.state.person}
          style = {style}
          login= {this.loginHandler}
          togglePersonsHandler = {this.togglePersonsHandler}
          ></Cockpit>
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
           
     </Aux>
      </StyleRoot>
     
    );
  }
}

export default  Radium(WithClass1(App, classes.App));
