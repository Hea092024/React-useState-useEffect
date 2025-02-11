import { useState } from "react";
import CookieClicker from "./components/CookieClicker.jsx"
import ArrayState from "./components/ArrayState.jsx"
import ObjectState from "./components/ObjectState.jsx";
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
