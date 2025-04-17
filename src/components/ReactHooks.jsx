import React, {useState,useEffect} from 'react';

function ReactHooks(){
    const [count,setCount]=useState(0);

    useEffect(() =>{
        console.log(`Count chnaged to :${count}`)
    },[count] );

    return <button onClick={() => setCount(count + 1)}>update count:{count}</button>
}

export default ReactHooks;