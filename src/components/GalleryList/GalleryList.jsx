import GalleryItem from '../GalleryItem/GalleryItem'
import axios from 'axios';

//place in 'picture' and 'getGallery' as the keys from App to handshake with this component
function GalleryList({ picture, getGallery }) {
    // console.log('Inside GalleryList()', picture);
    const putLikesButton = (id) => {
        console.log('PUTting likes', id);

        //passing the url and also what you want to grab
        axios.put(`/gallery/like/${id}`, id)
            .then(response => {
                // console.log(response.data);
                getGallery() //you need this to render the DOM and you get it in App with the {picture} key you made
            })
            .catch((err) => {
                alert('Error in PUT', err);
            })
    }
        //first loop {picture} using map() 
        //looping through: it's grabing every picture's id, pic (grab the whole prop to be able to use all indexes), and the likes
        //it's also adding a button and the sentence of clicked likes
        //no state is used in this componet because nothing needs to be saved at state, it can just be shown on the DOM
    return (<>
        <div>
            {picture.map(pic => (<>
                <GalleryItem key={pic.id} src={pic} />
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