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

    //toggle the show case on btn click
    buttonToggleHandler = ()=>{
      let showcasePersonBool = this.state.showcasePerson
      this.setState({
        showcasePerson : !(showcasePersonBool)
      })
    }
  
    //change the name from input
    personNameChangeHandler = (event,index) => {

     // const selectedPerson = this.state.persons[index];

      const persons = [... this.state.persons]
      persons[index].name = event.target.value

      this.setState({persons:persons})

    }

    deletePersonComponentHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({ persons:persons});
    } 
   
    render()
    {
        const style = {
          backgroundColor: 'white',
          border : '1px solid green',
          padding:'8px'
        };

        //populating the list
        let personShowCase = null;
        if(this.state.showcasePerson){
          personShowCase =  <div>
           {
              this.state.persons.map((person,index) => {
                return <Person 
                        Name = {person.name} 
                        Age = {person.age}  
                        DeletePersonClick = { () => this.deletePersonComponentHandler(index) } 
                        ChangePersonName = {(event)=>this.personNameChangeHandler(event,index)}
                        key = {index} />;
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
