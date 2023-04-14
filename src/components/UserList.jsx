import { useEffect, useState } from "react";
import UserCard from "./UserCard.jsx";

import * as api from "../api.js";
import UserAdd from "./UserAdd.jsx";
import "./UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, [setUsers]);

  if (isLoading) {
    return <p>is loading...</p>;
  }
  return (
    <div>
      <div>
        <UserAdd setUsers={setUsers} />
        <ul>
          <div className="UserList">
            {users.map((user) => (
              <UserCard
                key={user.username}
                username={user.username}
                avatar_url={user.avatar_url}
                kudos={user.kudos}
              />
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
export default UserList;
