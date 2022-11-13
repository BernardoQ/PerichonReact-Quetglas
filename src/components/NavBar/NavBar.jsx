import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-menu">
      <ul className="nav-list">
        <li>
          <Link to="/">
            <img src="/imgs/brandLogo/Logo Perichon no slogan.jpg" alt="brand Logo" className="brandLogoHeader"/>
          </Link>
        </li>
        <li>
          <Link to="/">Todos</Link>
        </li>
        <li>
          <Link to="/category/trapos">Trapos</Link>
        </li>
        <li>
          <Link to="/category/rejilla">Rejillas</Link>
        </li>
        <li>
          <Link to="/category/paño">Paños</Link>
        </li>
        <li>
          <Link to="/category/franela">Franela</Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
