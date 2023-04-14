import { useState } from "react";
import * as api from "../api.js";

function UserAdd({ setUsers }) {
  const [userName, setUserName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username: userName,
      avatar_url: avatarUrl,
    };

    api.postUser(newUser).then((addedUser) => {
      console.log(addedUser);
      setUsers((currentUsers) => {
        console.log(currentUsers);
        return [addedUser, ...currentUsers];
      });
      setUserName("");
      setAvatarUrl("");
      return addedUser;
    });
  };
  return (
    <form onSubmit={handleSubmit} className="ItemAdder ">
      <div>
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          placeholder="UserName"
          value={userName}
          onChange={({ target }) => {
            setUserName(target.value);
          }}
          required
        />
      </div>
      <div>
        <label htmlFor="avatar_url"></label>
        <input
          type="text"
          id="avatar_url"
          placeholder="Avatar Url"
          value={avatarUrl}
          onChange={({ target }) => {
            setAvatarUrl(target.value);
          }}
          required
        />
      </div>
      <button type="submit">Add new User</button>
    </form>
  );
}

export default UserAdd;
