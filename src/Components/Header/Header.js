import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link id="logo" to="/" rel="home">
              hepsiburada<span>.com</span>
            </Link>
          </li>
          <li>
            <h2>
              <strong>Link</strong>
              <span>Vote</span> Challange
            </h2>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
