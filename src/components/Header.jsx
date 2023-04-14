import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <h2>Home</h2>
      </Link>
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
