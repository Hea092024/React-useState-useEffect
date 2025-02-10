import { useState } from "react";
import cookie from "/cookie.png";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  function resetButton() {
    setCount(0);
  }
  return (
    <div>
      <p>{count}</p>
      <button className="btn" onClick={handleIncrement}>
        {" "}
        <img src={cookie} alt="a picture of a cookie" />{" "}
      </button>

      <button className="btn" onClick={resetButton}>
        Reset
      </button>
    </div>
  );
}
