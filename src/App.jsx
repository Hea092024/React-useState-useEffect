import { useState } from "react";
import CookieClicker from "./components/CookieClicker.jsx"
import UserArray from "./components/UserArray.jsx"

function App() {


  return (
    <>
      <DarkMode />
      <CookieClicker />
      <UserArray />
    </>
  );
}

export default App;
