import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.ClickHandler}>Hello Im {props.Name} & I'm  {props.Age} years old</p>
            <p>{props.children}</p>
        </div>
    );
}


export default person; 