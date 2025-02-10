import { useState } from "react";
import cookieKjeks from "/cookie.png";
import "./App.css";

export default function App(){
  const [count, setCount] = useState(0);
  function handleIncrement(){
    setCount(count + 1)

  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}
