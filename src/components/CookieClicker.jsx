import { useState } from "react";
import cookie from "/cookie.png";
import   "../styles/CookieStyle.css";

export default function CookieClicker() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(prev => prev + 1);
  }
  function resetButton() {
    setCount(prev => prev = 0);
  }

  function decrement() {
    setCount(prev => prev - 1);
  }
  return (
    <div className="container">
      <p>{count}</p>
      <button className="btn" onClick={handleIncrement}>
        <img src={cookie} alt="a picture of a cookie" />
        Increment
      </button>

      <button className="btn" onClick={decrement}>
        Decrement
        <img
          className="reversedCookieImage"
          src={cookie}
          alt="a picture of a cookie"
        />
      </button>

      <button className="btn" onClick={resetButton}>
        Reset
      </button>
    </div>
  );
}