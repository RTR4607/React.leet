import React from "react";

const FunctionComponent = () =>{

    const name='React Developer';
    return (
        //In JSX we can't return multiple siblings directly, Must have one root element or we can use react fragments( <>...</>)
        <>
        <h3>Role:{name}</h3>
        <h2 className='Functional'>Functional Component</h2>
        <input type='text' />
        </>
    )


    /* Conditional rendering syntax

        {condition?(true):(false)}

    */

    /*Incorrect JSX -Multiple root elements
    return (
        <h1>Hello</h1>
        <h2>Hello</h2>
    )*/
}
export default FunctionComponent;