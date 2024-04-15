import React from 'react';
import './Person.css'



const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.ClickHandler}>Hello Im {props.Name} & I'm  {props.Age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.inputNameHandler} value={props.Name} />
        </div>
    );
}


export default person; 