import React, {useState} from 'react';
function Outer(){

    const [count, setCount]=useState(0)

    function Inner(){
     setCount(count+1);

    }
    return <button onClick={Inner}>Count:{count}</button>
}

export default Outer;