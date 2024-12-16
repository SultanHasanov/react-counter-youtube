import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [textError, setTextError] = useState(false);

  const handleDec = () => {
    if (count <= 0) {
      setTextError(true);
    } else {
      setCount((prevCount) => prevCount - 1);
      setTextError(false);
    }
  };

  const handleInc = () => {
    setCount((prevCount) => prevCount + 1);
    setTextError(false);
  };

  const handleMinus2 = () => {
    if (count <= 1) {
      setTextError(true);
    } else {
      setCount((prevCount) => prevCount - 2);
      setTextError(false);
    }
  };

  const handlePlus5 = () => {
    setCount((prevCount) => prevCount + 5);
    setTextError(false);
  };

  const handleReset = () => {
    setCount(0);
    setTextError(false);
  };

  return (
    <div className="counter">
      <div className="count">
        <div>{count}</div>
        <button className="btn_dec" onClick={handleDec}>
          -
        </button>
        <button className="btn_inc" onClick={handleInc}>
          +
        </button>
        <button className="btn_minus_2" onClick={handleMinus2}>
          2-
        </button>
        <button className="btn_plus_5" onClick={handlePlus5}>
          5+
        </button>
        <button className="btn_reset" onClick={handleReset}>
          reset
        </button>
      </div>
      {textError && (
        <span className="error">
          Ошибка: значение не может быть меньше нуля!
        </span>
      )}
    </div>
  );
};

export default App;
