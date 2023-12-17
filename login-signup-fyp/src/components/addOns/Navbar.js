import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand title" href="#">
        <img src="" alt="" />
        Kashf Sahte
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
         
          
          



          
          <Link className="nav-item nav-link" to="/aboutus">
  About Us
</Link>
<Link className="nav-item nav-link" to="/">
  Home
</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
