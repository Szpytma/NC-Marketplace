import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/items">
        <h1>NC Marketplace</h1>
      </Link>
    </header>
  );
}

export default Header;
