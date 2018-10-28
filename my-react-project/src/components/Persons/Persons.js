import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{
    constructor(){
        super();
        console.log('[Persons.js] constructor, sideffects occur here');
    }
    componentWillMount(){
        console.log('[Persons.js] componentWillMount');
      }
    
    componentDidMount(){
        console.log('[Persons.js] componentDidMount  sideffects occur here');
    }
    
    componentWillReceiveProps(nextProps){
        console.log('[Updated Persons.js] Inside component will receive props', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Updated Persons.js] Inside should component update', nextProps, nextState);
    //      // pure components are those components which do shallow checks and  only runs the 
    //     // lifecycle methods or extra methods only if it needs to such that no extra irrelevant 
    //     // code is run and thus improving performance 
    //     //return nextProps.person != this.props.person;
    //     return true;
    // }

    componentWillUpdate(nextProps, nextState){
        console.log('[Updated Persons.js] Inside component will update', nextProps, nextState);
    }

    componentDidUpdate(){
        console.log('[Updated Persons.js] Inside component did update');
    }


    render(){
        console.log('[Persons.js] render method');
        return (
            
            this.props.person.map((person,index)=>{
                return <Person name={person.name} 
                age={person.age}
                click = {()=>this.props.clicked(index)}
                key={index}
                position={index}
                changed={(event)=>this.props.changed(event,index)}></Person>
                })
    
            )
    }
} 

export default Persons;
  