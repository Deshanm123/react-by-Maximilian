import React from 'react';
import './Person.css'



const person = (props) => {
    return (
        <div className='Person' >
            <p>Hello Im {props.Name} & I'm  {props.Age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.inputNameHandler} value={props.Name} />
            <button onClick={props.DeletePersonClick}>Delete</button>
        </div>
    );
}

export default person; 