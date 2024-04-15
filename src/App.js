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
  buttonToggleHandler= ()=>{
      let showcasePersonBool = this.state.showcasePerson
      this.setState({
        showcasePerson :  !(showcasePersonBool)
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
      //return  React.createElement(
       // 'div',{className : 'App'}, React.createElement('h1',null,'testing the content')
      //);
    render()
    {
        const style= {
          backgroundColor: 'white',
          border : '1px solid green',
          padding:'8px'
        };



        return(
          <div className="App">
            <h1>Test</h1> 
            <button onClick={this.buttonToggleHandler} style={style}>
             Toggle Name
              </button>
              {
                this.state.showcasePerson ?
                  <div>
                    <Person 
                      Name={this.state.persons[0].name}
                      Age={this.state.persons[0].age}
                    />

                      <Person 
                        Name={this.state.persons[1].name} 
                        Age={this.state.persons[1].age}
                        inputNameHandler = {this.inputNameChangeHandler}/> 
                  </div>
                  : null

              }

          </div>
        ) 
    }
    
}

export default App;  
