import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {
    const [counter, setCounter] = useState({
        counter1:10,
        counter2:20
    });
    console.log(counter);
  return (
    <>
        {/* <h1>Counter {counter}</h1> */}
        <hr/>
        <button  className='btn btn-primary' onClick={()=>{setCounter(counter+1)}}>+1</button>
    </>
  )
}
