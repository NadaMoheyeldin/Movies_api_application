import React from 'react';
import { Link } from 'react-router-dom'; // Use if you're using react-router-dom
import MovieSearchBar from '/home/nada/react/Routing/routing/src/components/Searchbar/searchbar.js'; // Adjust the import path as necessary

function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">Navbar</Link>
        <MovieSearchBar /> {/* Include the search bar here */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/list">Movies</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;