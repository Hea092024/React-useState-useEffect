import { useState } from "react";

const mockData = [
    { username: 'Ola Normann', email: 'ola.normann@norge.no'},
    { username: 'Torleif', email: 'torleif@kodehode.no' },
    { username: 'Jan Egil', email: 'jan.egil@kodehode.no' },
    { username: 'Sander', email: 'sander@kodehode.no' },
]

  const handleField = () => {
    const newString = document.getElementById("text-field").value;
    document.getElementById("text-field").value = "";
    setArray([...array, , newString]);
  

  return (
    <>
      <input type="text" id="text-field" placeholder="insert text here" />
      <button onClick={() => handleField()}>submit</button>
      {array.map((inst, index) => (
        <p key={index}>{inst}</p>
      ))}
    </>
  );
};
export default UserArray;
