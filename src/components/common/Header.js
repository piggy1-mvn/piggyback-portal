import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated, logout } from "../../helper/LoginHelper";

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {isAuthenticated() && (
          <li>
            <Link to="/" onClick={logout}>
              Log Out
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Header;
