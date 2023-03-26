import GalleryItem from '../GalleryItem/GalleryItem'
import axios from 'axios';

function GalleryList({picture, getGallery}){
    console.log('Inside GalleryList()', picture);

    //PUT
    const putLikesButton = (id) => {
    //console.log('PUTting likes', id);

      axios.put(`/gallery/like/${id}`, id)
      .then(response => {
        //console.log(response.data);
        getGallery()
      })
      .catch((err) => {
        alert('Error in PUT', err);
      })
    }
    
    return(<>
        <div>
        {picture.map(pic => (<>
            <GalleryItem key={pic.id} src={pic}/>
            <br></br>
            <button onClick={() => putLikesButton(pic.id)}>Click To Like</button>
            <br></br>
            <p>{pic.likes} people who liked this!</p>

            </>
        ))}
        </div>
        </>
    )
    
}
export default GalleryList;