import React from 'react';

function ChildComponent(props){

    return (
        <div>
            <p>{props.name}</p>
            <p>{props.age}</p>
        </div>
    )
}

export default ChildComponent;