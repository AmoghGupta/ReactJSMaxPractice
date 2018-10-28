import React, { Component } from 'react';
import Radium from 'radium';
import classes  from './Person.css';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../containers/App';


//stateless component
class Person extends Component {
    constructor(){
        super();
        this.inputElement = React.createRef();
        console.log('[Person.js] constructor , sideffects occur here');
    }
      componentWillMount(){
        console.log('[Person.js] componentWillMount');
      }
    
      componentDidMount(){
        console.log('[Person.js] componentDidMount,  sideffects occur here');
        this.focusInput();
       
      }

      focusInput(){
        if(this.props.position== 0){
            this.inputElement.current.focus();
        }
      }

    render(){
        console.log('[Person.js] render method');
        const style = {
            '@media (max-width: 500px)':{
                width: '450px'
            }
        };
        return(
            <WithClass className={classes.Person} style={style}>
            <AuthContext.Consumer>
                {auth => auth?<p>I am authenticated</p>:null}
            </AuthContext.Consumer>
            {/* <h1>I am from Person and {Math.random()*30} years old</h1> */}
            <h1 onClick={this.props.click}>I am {this.props.name} and my age is {this.props.age}</h1>
            {/* this is how we access any element between openeing and closing tag of our element */}
            <p onClick={this.props.click}>{this.props.children}</p>
            {/* 2 way binding */}
            <input ref={this.inputElement} type="text" onChange={this.props.changed} value={this.props.name}/>
            </WithClass>
        )
    }
}

Person.propTypes = {
    click : PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.string,
    changed: PropTypes.func
}

export default Radium(Person);
