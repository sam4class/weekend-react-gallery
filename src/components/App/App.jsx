import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import GalleryList from '../GalleryList/GalleryList.jsx';
import LikesButton from '../LikesButton/LikesButton';


function App() {

  const [gallery, setGallery] = useState([]);
  const [likesNum, setLikesNum] = useState(0);

  const getGallery = () => {
    console.log('GETting Gallery');

    axios.get('/gallery')
    .then(result => {
      setGallery(result.data)
    }).catch((err) => {
      alert('Error in GET');
    })
  }

  useEffect(() => {
    getGallery()
  }, []);

  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Gallery</h1>
        </header>
        <p>Gallery goes here</p>

        <GalleryList picture={gallery} getGallery={getGallery}/>
        
       
      </div>
    );
}

export default App;
