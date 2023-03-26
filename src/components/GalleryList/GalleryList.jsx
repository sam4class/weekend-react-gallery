import GalleryItem from '../GalleryItem/GalleryItem'
import axios from 'axios';

function GalleryList({picture, getGallery}){
    console.log('Inside GalleryList()', picture);

    //PUT
    const putLikesButton = (id) => {
    //console.log('PUTting likes', id);

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

    //DELETE
    const deleteButton = (id) =>{
        console.log('Delete function', id);

        axios.delete(`/gallery/delete/${id}`, id)
        .then((response) => {
            console.log('in delete client', response)
            getGallery();
        }).catch((err) => {
            console.log('Error in DELETE', err);
        })
    }

        //first loop {picture} using map() 
        //looping through: it's grabing every picture's id, pic (grab the whole prop to be able to use all indexes), and the likes
        //it's also adding a 'likes' button, 'delete' button and the sentence of clicked likes
        //no state is used in this componet because nothing needs to be saved at state, it can just be shown on the DOM
    return (<>
        <div id="picList">
            {picture.map(pic => (<>
                <GalleryItem key={pic.id} src={pic} />
                <br></br>
                <button onClick={() => putLikesButton(pic.id)}>Click To Like</button>
                <br></br>
                <button onClick={() => deleteButton(pic.id)}>Delete</button>
                <p>{pic.likes} people who liked this!</p>
                <br></br>
               

            </>
            ))}
        </div>
    </>
    )

}
export default GalleryList;