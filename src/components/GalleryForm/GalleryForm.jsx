import { useState } from 'react';

function GalleryForm({newPic}){
    console.log('Inside GalleryForm()');

    const [newPicture, setNewPicture] = useState('');
    const [newDescription, setNewDescription] = useState('');


    function handleSubmit(){
        event.preventDefault();
        console.log('Inside handleSubmit()');

        const newPictureForm = {
            path: newPicture,
            description: newDescription,
            likes: 0
        }
        console.log('pic info', newPictureForm)
        newPic(newPictureForm);

        setNewPicture('');
        setNewDescription('');
    }

    return(<>
    <h2>Add Your Own Picture</h2>
    <form onSubmit={handleSubmit}>
        <label>
            Picture:
        </label>
        <input type='text' value={newPicture} onChange={(event) => setNewPicture(event.target.value)}/>
        
        <label>
            Description:
        </label>
        <input type='text' value={newDescription} onChange={(event) => setNewDescription(event.target.value)}/>

        <button type="submit">Submit</button>
    </form>
</>)

}

export default GalleryForm;