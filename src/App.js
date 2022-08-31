import './App.css';


import React from 'react';
import { useState } from 'react';

const App = () => {

  const [count, setCount] = useState(0)


  const handleDec = () => {
    setCount(count - 1)
  }

  const handleInc = () => {
    setCount(count + 1)
  }

  return (
    <div className='counter'>
        <div className='count'>{count}</div>
        <button className='btn_dec' onClick={handleDec}>-</button>
        <button className='btn_inc' onClick={handleInc}>+</button>
    </div>
  );
};

export default App;