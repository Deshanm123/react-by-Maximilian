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
            {name:'John After One year', age : 33},
            {name:'Felix  After One year', age :23}
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
            <Person 
              Name={this.state.persons[0].name}
              Age={this.state.persons[0].age}
              ClickHandler={this.buttonOnClickHandler}
            />
            <Person 
              Name={this.state.persons[1].name} 
              Age={this.state.persons[1].age}
              ClickHandler={this.buttonOnClickHandler}> 
              RandomFella
               </Person>
          </div>
        ) 
    }
    
}

export default App;  
