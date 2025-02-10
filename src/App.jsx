import { useState } from "react";
import cookieKjeks from "/cookie.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <img src="cookie.png" alt="Image of a Cookie" />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
