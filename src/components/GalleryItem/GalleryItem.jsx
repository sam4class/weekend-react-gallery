import { useState } from 'react';

function GalleryItem({src}){
    console.log('Inside GalleryItem()')

    const [showDescipt, setPhoto] = useState(true);

    const handleClick = () => {
        setPhoto(!showDescipt)

        
    }

return(<>
    {showDescipt ? 
        <img onClick={handleClick} src={src.path}/>
        :
        <p onClick={handleClick}> {src.description} </p>}
        </>  
    
)
}

export default GalleryItem;