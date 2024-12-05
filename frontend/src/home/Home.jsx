import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch("/api/users/getUser")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      {/* <NavBar /> */}
      {/* <h1>User List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>{user.user_name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Home;
