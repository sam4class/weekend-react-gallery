import { useState } from 'react';

function GalleryItem({src}){
    //console.log('Inside GalleryItem()')

    const [showDescipt, setPhoto] = useState(true);

    const handleClick = () => {
        setPhoto(!showDescipt)

        
    }

return(<>
    {showDescipt ? 
        <img width="100" height="100" onClick={handleClick} src={src.path} likes={src.likes}/>
        :
        <p onClick={handleClick}> {src.description}</p>}
        </>  
    
)
}

export default GalleryItem;