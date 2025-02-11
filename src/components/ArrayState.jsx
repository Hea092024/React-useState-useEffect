import { useState } from "react";

const ArrayState = () => {
  const [array, setArray] = useState(["en", "to", "tre"]);

  return (
    <>
      {array.map((item, index) => {
        return <h1 key={index}>{item}</h1>;
      })}
    </>
  );
};

export default ArrayState;
