import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';



function App() {

  const [gallery, setGallery] = useState([]);
 
  const getGallery = () => {
    //console.log('GETting Gallery');
    //this is the GET to get the gallery from the server side
    axios.get('/gallery')
    .then(result => {
      setGallery(result.data)
    }).catch((err) => {
      alert('Error in GET');
    })
  }

  //this is updating state based on previous state from an Effect
  useEffect(() => {
    getGallery()
  }, []);

  //this is the render on the DOM, giving a heading and the another conponent that will give us the images 
  //within GalleryList there are two children: 
  //1, pictures that grabs the pictures 
  //2, that gives us access to the getGallery() that we need to place in our PUT aka Update 
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
