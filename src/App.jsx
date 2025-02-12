import { useState } from "react";
import CookieClicker from "./components/CookieClicker.jsx"
import UserArray from "./components/UserArray.jsx"
import CatFacts from "./components/CatFacts.jsx";

function App() {


  return (
    <>
    <CatFacts />
      <CookieClicker />
      <UserArray />
    </>
  );
}

export default App;
