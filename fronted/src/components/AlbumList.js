import React from "react";
import AlbumCard from './AlbumCard';
import "./App.css";

function AlbumList() {
  return (
    <div className="container album-list">
      <div className="row">
        <AlbumCard
          imageUrl="https://alinababy.es/wp-content/uploads/2020/10/JIN-BTS-PHOTOCARD-1.png"
          title="Nombre del álbum"
          description="Descripción del álbum."
        />
        <AlbumCard
          imageUrl="https://alinababy.es/wp-content/uploads/2020/10/V-BTS-PHOTOCARD.png"
          title="Nombre del segundo álbum"
          description="Descripción del segundo álbum."
        />
        {/* Agrega más componentes AlbumCard aquí */}
      </div>
    </div>
  );
}

export default AlbumList;
