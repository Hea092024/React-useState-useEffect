import { useState } from "react";
import CookieClicker from "./components/CookieClicker.jsx"
import UserArray from "./components/UserArray.jsx"
import ObjectState from "./components/ObjectState.jsx";
function App() {
  return (
    <>
      <CookieClicker />
      <UserArray />
      <ObjectState />
    </>
  );
}

export default App;
