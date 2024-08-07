// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Summoner DB</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/champions">Champions</Link>
            </li>
            <li>
            <Link className="nav-link active" aria-current="page" to="/champions">Esports</Link>
            </li>
            <li>
            <Link className="nav-link active" aria-current="page" to="/champions">Stats</Link>
            </li>
          </ul>
          {user ? (
            <a href="/auth/sign-out" className="btn btn-dark">Sign Out</a>
          ) : (
            <>
              <Link to="/auth/sign-in" className="btn btn-dark">Sign In</Link>
              <Link to="/auth/sign-up" className="btn btn-dark">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
