import React from 'react';

function SongCreate({ form, handleSubmit }) {
  return (
    <div className="container">
      <h1 className="mt-4">Nueva Canción</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Título:</label>
              {form.title}
            </div>
            <div className="form-group">
              <label htmlFor="artist">Artista:</label>
              {form.artist}
            </div>
            <div className="form-group">
              <label htmlFor="duration">Duración:</label>
              {form.duration}
            </div>
            <div className="form-group">
              <label htmlFor="file">Archivo de Audio:</label>
              {form.file}
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SongCreate;
