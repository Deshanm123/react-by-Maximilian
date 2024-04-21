import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
     //inline css
  state = {
      persons :[
        {name:'John', age : 32},
        {name:'Felix', age :22}
      ],
      otherState:'Some other value',
      showcasePerson: false
    }
    //event-handler
    buttonToggleHandler = ()=>{
      let showcasePersonBool = this.state.showcasePerson
      this.setState({
        showcasePerson : !(showcasePersonBool)
      })
    }
 
    inputNameChangeHandler = (event) => {
      this.setState({
        persons:[
          {name:'John', age : 32},
          {name:event.target.value, age :22}
        ]
      })
    }

    deletePersonComponentHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({ persons:persons});
    } 
      //return  React.createElement(
       // 'div',{className : 'App'}, React.createElement('h1',null,'testing the content')
      //);
    render()
    {
        const style = {
          backgroundColor: 'white',
          border : '1px solid green',
          padding:'8px'
        };
        
        let personShowCase = null;
        if(this.state.showcasePerson){
          personShowCase =  <div>
           {
              this.state.persons.map((person,index) => {
                return <Person Name = {person.name} Age ={person.age}  DeletePersonClick = { () => this.deletePersonComponentHandler(index) } key={index} />;
              })
           }
          </div>
        }

        return(
          <div className="App">
            <h1>Test</h1> 
            <button onClick={this.buttonToggleHandler} style={style}>
             Toggle Name
              </button>
              {personShowCase}
          </div>
        )
    }
    
}

export default App;  
