import { useState } from 'react';
//need to import useState, cause we are going to Use state- ha

function GalleryItem({src}){
    //console.log('Inside GalleryItem()')

    //make you state, made after making the return and seeing I needed the first value to be able to toggle
    const [showDescipt, setPhoto] = useState(true);

    //this function make the magic happen for the toggle, sets it by using the 'set' state in your const above, don't forget the 'bang'
    const handleClick = () => {
        setPhoto(!showDescipt)
    }

    //taking the first state value and making a ternary operator
    //this shows the image, if clicked: shows the description
    //this is where you can add any image requirements needed
    return (<>
        {showDescipt ?
            <img width="100" height="100" onClick={handleClick} src={src.path} likes={src.likes} />
            :
            <p onClick={handleClick}> {src.description}</p>}
    </>

    )
}

export default GalleryItem;