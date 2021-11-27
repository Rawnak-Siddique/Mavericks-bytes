import React from 'react';
import "./NavBar.css"
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav" >
      <Link to="/" className="nav_Link">
        <h1>Mavericks bytes</h1>
      </Link>
      <div className="nav_Right">
        <Link to="/about" className="nav_Link"  >
            <h3 className="nav_RightText" >About us</h3>
        </Link>
        <Link to="/projects" className="nav_Link">
            <h3 className="nav_RightText" >Our projects</h3>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
