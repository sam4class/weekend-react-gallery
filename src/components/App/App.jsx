import React from 'react';
import './App.css';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryItem />
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
