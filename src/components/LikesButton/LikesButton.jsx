import { useState } from 'react';
import axios from 'axios';

function LikesButton({likes}){
    console.log('Inside LikesButton()');

    const [likesNum, setLikesNum] = useState(0);
    let count =0;

    const putLikesButton = () => {
        console.log('PUTting likes');
    
        axios.put('/gallery/like/:id')
        .then(result => {
          setLikesNum(result.data)
          getGallery();  //????
        }).catch((err) => {
          alert('Error in PUT', err);
        })
      }
    
    function handleClick(){
        event.preventDefault();
        console.log('Inside handleClick()');

        count ++;
        return count;
    }



    return(<>
        <div>
            <button onClick={handleClick}>Click To Like This Photo</button>
            <p id="count" onChange={(event) => setLikesNum(event.target.value)} value={likesNum}>{putLikesButton} people who love this!</p>
        </div>
    
    </>)
}

export default LikesButton;