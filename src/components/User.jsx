import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as api from "../api.js";
import "./styles/Item.css";

function User() {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState({});

  useEffect(() => {
    api.fetchUserByUserName(username).then((user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, [username]);
  if (isLoading) {
    return <p>is loading...</p>;
  }

  return (
    <div className="Item">
      <h3>{user.user_name}</h3>
      <img src={user.avatar_url} alt={user.user_name} />
      <p>{user.kudos}</p>
      <Link to={`/users/${username}/basket`}>
        <h2>Basket</h2>
      </Link>
    </div>
  );
}

export default User;
