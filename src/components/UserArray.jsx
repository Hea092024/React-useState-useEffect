import { useState } from "react";

const UserArray = () => {
  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];

  const [user, setUser] = useState(mockData);

  const userChange = (e) => {
    setUser((u) =>
      u.map((item, index) =>
        index === 0 ? { ...item, author: e.target.value } : item
      )
    );
  };

  const emailChange = (e) => {
    setUser((u) =>
      u.map((item, index) =>
        index === 0 ? { ...item, email: e.target.value } : item
      )
    );
  };

  return (
    <>
      <div>
        {user.map((user, index) => (
          <div key={index}>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          id="author"
          value={user[0].author || ""}
          onChange={userChange}
        />
        <input
          type="text"
          id="tittle"
          value={user[0].tittle || ""}
          onChange={emailChange}
        />
        <input type="text" id="year" value={user[0].year || ""} />
      </div>
    </>
  );
};
export default UserArray;
