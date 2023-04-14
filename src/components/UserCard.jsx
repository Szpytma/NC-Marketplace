import "./UserCard.css";

function UserCard({ username, avatar_url, kudos }) {
  return (
    <div className="UserCard">
      <li key={username}>
        <p>{username}</p>
        <img src={avatar_url} alt={username} />
        <p>{kudos}</p>
      </li>
    </div>
  );
}

export default UserCard;
