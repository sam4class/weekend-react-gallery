import GalleryItem from '../GalleryItem/GalleryItem'
import { useState } from 'react';
import axios from 'axios';
//import LikesButton from '../LikesButton/LikesButton';

function GalleryList({picture}){
    console.log('Inside GalleryList()', picture);

    const [likesNum, setLikesNum] = useState(0);
    let count =0;

    function handleClick(){
        event.preventDefault();
        console.log('Inside handleClick()');

        count ++;
        count = likesNum;
        return likesNum;
    }

    const putLikesButton = (id, likesNum) => {
        console.log('PUTting likes');
    
        axios({
            method: 'POST',
            url: '/gallery/like/${id}',
            data:{
                id: id,
                likes: {likesNum}
            }
        }).then(result => {
          props.setLikesNum(result.data);
        }).catch((err) => {
          alert('Error in PUT', err);
        })
      }
    
    
    return(<>
        <div>
        {picture.map(pic => (<>
            <GalleryItem key={pic.id} src={pic}/>
        <br></br>
            <button onClick={handleClick}>Click To Like This Photo</button>
            <br></br>
            <p onChange={(event) => setLikesNum(event.target.value)} value={likesNum}>{pic.likes} people who love this!</p>
            </>
        ))}
        </div>
        </>
    )
    
}
export default GalleryList;