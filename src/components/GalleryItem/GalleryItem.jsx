import { useState } from 'react';
//need to import useState, cause we are going to Use State- ha

function GalleryItem({src}){
    //console.log('Inside GalleryItem()')

    //make your state, made after making the return and seeing I needed the first value to be able to toggle
    const [showDescipt, setPhoto] = useState(true);

    //this function make the magic happen for the toggle, sets it, don't forget the 'bang'
    const handleClick = () => {
        setPhoto(!showDescipt)   
    }

    //taking the first state value and making an odd looking if statement
    //this it shows the image, if clicked the it shows the description
return(<>
    {showDescipt ? 
        <img width="100" height="100" onClick={handleClick} src={src.path} likes={src.likes}/>
        :
        <p onClick={handleClick}> {src.description}</p>}
        </>  
    
)
}

export default GalleryItem;