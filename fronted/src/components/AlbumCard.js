import React from "react";
import "./App.css";

function AlbumCard({ imageUrl, title, description }) {
  return (
    <div className="col-md-4 album-card">
      <div className="card">
        <img src={imageUrl} className="card-img" alt="Imagen del álbum" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Ver detalles
          </a>
        </div>
      </div>
    </div>
  );
}

export default AlbumCard;
