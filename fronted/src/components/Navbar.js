import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="/">
          Mi Tienda de Música
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="nav-button" onClick={() => window.location.href='/albums'}>
              Álbumes
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-button" onClick={() => window.location.href='/albums/create'}>
              Crear Álbum
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-button" onClick={() => window.location.href='/songs/create'}>
              Crear Canción
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
