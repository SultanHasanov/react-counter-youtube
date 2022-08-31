import "./App.css";

import React from 'react';
import { useState } from "react";

const App = () => {
   
  const [count, setCount] = useState(0)

  const handleDec = () => {
    setCount(count - 1)
  }

  const handleInc = () => {
    setCount(count + 1);
  };

  const handleMinus2 = () => {
    setCount(count - 2);
  };

  const handlePlus5 = () => {
    setCount(count + 5);
  };

  const handleReset = () => {
    setCount(0);
  };



  return (
    <div className="counter">
      <div className="count">
        <div>{count}</div>
        <button className="btn_dec" onClick={handleDec}>-</button>
        <button className="btn_inc" onClick={handleInc}>+</button>
        <button className="btn_minus_2" onClick={handleMinus2}>2-</button>
        <button className="btn_plus_5" onClick={handlePlus5}>5+</button>
        <button className="btn_reset" onClick={handleReset}>reset</button>
      </div>
    </div>
  );
};

export default App;