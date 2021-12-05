import React from 'react';
import "./NavBar.css"
import { Link } from 'react-router-dom';

const NavBar = () => {
  
  return (
    <div className="nav" >
      <Link to="/" className="nav_Link">
        <h3 className="nav_RightText " >.HOME()</h3>
      </Link>
      <div className="nav_Right">
        <Link to="/about" className="nav_Link"  >
            <h4 className="nav_RightText " >.intro()</h4>
        </Link>
        <Link to="/projects" className="nav_Link">
            <h4 className="nav_RightText" >.projects()</h4>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
