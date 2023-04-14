import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/items">
        <h2>NC Marketplace</h2>
      </Link>
      <Link to="/users">
        <h2>Users</h2>
      </Link>
    </header>
  );
}

export default Header;
