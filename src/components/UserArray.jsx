import { useState } from "react";

const UserArray = () => {
  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];

  const [users, setUsers] = useState(mockData);
  console.log(users); 

  const userChange = (e, index) => {
    const updatedUsers = [...users];
    updatedUsers[index] = { ...updatedUsers[index], username: e.target.value };
    setUsers(updatedUsers);
  };

  const emailChange = (e, index) => {
    const updatedUsers = [...users];
    updatedUsers[index] = { ...updatedUsers[index], email: e.target.value };
    setUsers(updatedUsers);
  };

  return (
    <>
      <div>
        {users.map((user, index) => (
          <div key={index}>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>

      <div>
        {users.map((user, index) => (
          <div key={index}>
            <input
              type="text"
              value={user.username}
              onChange={(e) => userChange(e, index)}
              placeholder="Edit Username"
            />
            <input
              type="text"
              value={user.email}
              onChange={(e) => emailChange(e, index)}
              placeholder="Edit Email"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default UserArray;
