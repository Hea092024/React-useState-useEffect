import { useState } from "react";
import "../styles/UserArray.css";
const UserArray = () => {
  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];

  const [users, setUsers] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddUser = () => {
    if (username && email) {
      const newUser = { username, email };
      setUsers([...users, newUser]);
      setUsername("");
      setEmail("");
    } else {
      alert("Please fill out both username and email.");
    }
  };

  return (
    <>
      <div className="user-list">
        <h2>List of Users:</h2>
        {users.length > 0 ? (
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.username} - {user.email}
              </li>
            ))}
          </ul>
        ) : (
          <p>No users added yet.</p>
        )}
      </div>

      <div className="add-user">
        <h3>Add a New User:</h3>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
    </>
  );
};

export default UserArray;
