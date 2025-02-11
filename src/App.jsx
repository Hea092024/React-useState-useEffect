import { useState } from "react";
import CookieClicker from "./components/CookieClicker.jsx"
import ArrayState from "./components/ArrayState.jsx"
function App() {
  return (
    <>
      <CookieClicker />
      <ArrayState />
      <ObjectState />
    </>
  );
}

export default App;
