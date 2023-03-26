import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';
import GalleryForm from '../GalleryForm/GalleryForm.jsx';



function App() {
  //making a State for the gallery and then a place to put it
  const [gallery, setGallery] = useState([]);
  const [newDiscription, setNewDiscription] = useState('');

  //POST
  const addNewPicture = (newPictureForm) => { //pass through what the new keys will be
    console.log('Inside addNewPicture client');

    axios.post('/gallery/', newPictureForm) //make this new const in GalleryForm
    .then(result => {
      getGallery();
    }).catch((err) => {
      alert('Error in POST client in App', err);
    })
  }
 
  //GET
  //this is the GET to get the gallery from the server side
  const getGallery = () => {
  //console.log('GETting Gallery');

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

  //this is the render on the DOM, giving a heading and two conponents:
  //1, that will give us the images 
  //2, that will give us a form to add an image
  //within GalleryList there are two children: 
  //1, pictures that grabs the pictures 
  //2, that gives us access to the getGallery() that we need to place in our PUT aka Update 
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Gallery</h1>
          <p>Click the Photo and Read a Description</p>
        </header>
        <p>Gallery goes here</p>

        <GalleryList picture={gallery} getGallery={getGallery}/>

        <GalleryForm newPic={addNewPicture}/> 
        
       
      </div>
    );
}

export default App;
