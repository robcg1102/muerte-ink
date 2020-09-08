import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <ul className="navBaR">
        <li>
          <Link to="/about" style={{ textDecoration: "none" }}>
            Acerca
          </Link>
        </li>
        <li>
          <Link to="/certificate" style={{ textDecoration: "none" }}>
            Diplomas
          </Link>
        </li>
        <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src="https://res.cloudinary.com/muerte-ink/image/upload/v1596839055/Project/logo2_aqmurj.png"
              alt="logonav"
              className="logo"
            />
          </Link>
        </li>
        <li>
          <Link to="/moretattoos" style={{ textDecoration: "none" }}>
            Tattoos
          </Link>
        </li>

        <li>
          <Link to="/flashes" style={{ textDecoration: "none" }}>
            Flashes
          </Link>
        </li>
      </ul>
    );
  }
}

export default Navbar;
