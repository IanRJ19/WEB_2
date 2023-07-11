import React from "react";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand" href="/">
          Mi Tienda de Música
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/albums">
              Álbumes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/albums/create">
              Crear Álbum
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/songs/create">
              Crear Canción
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
