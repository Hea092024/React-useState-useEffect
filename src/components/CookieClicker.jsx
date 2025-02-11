import { useState } from "react";
import cookie from "/cookie.png";
import CookieStyle from "../components/CookieStyle.css";

export default function App() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  function resetButton() {
    setCount(0);
  }

  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
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