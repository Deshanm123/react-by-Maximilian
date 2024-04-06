import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
     state = {
      persons :[
        {name:'John', age : 32},
        {name:'Felix', age :22}
      ],
      otherState:'Some other value'
    }
    //event-handler
  buttonOnClickHandler= ()=>{
      //this.state.persons[0].name = 'Deshan' cant change state ogf this app like this      
      this.setState({
         persons: [
           { name:'Deshan', age:26 },
           {name:'Tanushi', age :26}
         ]
      })
    }
      //return  React.createElement(
       // 'div',{className : 'App'}, React.createElement('h1',null,'testing the content')
      //);
    render()
    {
        return(
          <div className="App">
            <h1>Test</h1> 
            <button onClick={this.buttonOnClickHandler}>Switch Name</button>
            <Person Name={this.state.persons[0].name} Age={this.state.persons[0].age}/>
            <Person Name='Tanushi' Age='25'/>
            <Person Name={this.state.persons[1].name} Age={this.state.persons[1].age}> RandomFella </Person>
          </div>
        ) 
    }
    
}

export default App;  
