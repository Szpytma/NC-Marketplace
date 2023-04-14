import { Link } from "react-router-dom";
import "./UserCard.css";

function UserCard({ username, avatar_url, kudos }) {
  return (
    <div className="UserCard">
      <li key={username}>
        <Link to={`/users/${username}`}>
          <p>{username}</p>
        </Link>
        <img src={avatar_url} alt={username} />
        <p>{kudos}</p>
      </li>
    </div>
  );
}

export default UserCard;
