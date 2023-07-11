import React from "react";
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import AlbumList from './components/AlbumList';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Jumbotron />
      <AlbumList />
      <Footer />
    </div>
  );
}

export default App;
