import { Link } from "react-router-dom";
import "./styles/UserCard.css";

function UserCard({ username, avatar_url, kudos, user, setUser }) {
  const handleLoginClick = () => {
    setUser(user.username);
    console.log(user.username);
  };

  return (
    <div className="UserCard">
      <li key={username}>
        <p>{username}</p>

        <img src={avatar_url} alt={username} />
        <p>{kudos}</p>
      </li>
      <Link to={`/`}>
        <button onClick={handleLoginClick}>Login</button>{" "}
      </Link>
    </div>
  );
}

export default UserCard;
