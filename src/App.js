//functional based approach //without using class
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

//hooks
 //below is a function
const app = (props) =>{
  //setting up initila state of the hook
    //array destructuring
    const [personsState,setPersonsState]= useState({
        persons :[
          {name:'John', age : 32},
          {name:'Felix', age :22}
        ],
        otherState:'Some other value'
      }); 
    //personsState is get saved to object with in useState and setPersonsState remains empty

    //follow handler is function//yes we have declared function inside function

    const buttonOnClickHandler = ()=>{
      setPersonsState({
        persons :[
          {name:'John After One year', age : 33},
          {name:'Felix  After One year', age :23}
        ],
        otherState:'Some other value'
      })
    }
 





  return (
    <div className="App">
      <h1>Test hooks approach</h1> 
            <button onClick={buttonOnClickHandler}>Switch Name</button>
            <Person Name={personsState.persons[0].name} Age={personsState.persons[0].age}/>
            <Person Name={personsState.persons[1].name} Age={personsState.persons[1].age}/>
    </div>
  );
}


 



export default app;  
