import React from "react";
import { Link } from "react-router-dom";

import Favicon from "./icon.png";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img alt="Husky Corner" src={Favicon} />
          </Link>
        </div>
        <Link className="navbar-item" to="/">
          Husky Corner
        </Link>
        <Link className="navbar-item" to="/convert/">
          Convert to Excel
        </Link>
      </nav>
    );
  }
}

export default Navbar;
