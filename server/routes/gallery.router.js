const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool')

// DO NOT MODIFY THIS FILE FOR BASE MODE

//POST
router.post('/', (req, res) => {
    const newPicture = req.body;
    console.log('Inside POST serverSide', newPicture);

    const sqlText = `INSERT INTO "gallery" ("path", "description", "likes")
        VALUES ($1, $2, $3);`;
    
   pool.query(sqlText, [newPicture.path, newPicture.description, newPicture.likes])
   .then((result) => {
    res.sendStatus(201);
   }).catch ((err) => {
    console.log('Error in POST serverside', err);
    res.sendStatus(500);
   })

})

//DELETE
router.delete('/delete/:id', (req, res) => {
    let reqId = req.params.id;
    const sqlText = 'DELETE FROM "gallery" WHERE "id"= $1;';

    pool.query(sqlText, [reqId])
    .then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log('Error in server DELETE', err);
        res.sendStatus(500);
    })
})

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    res.send(galleryItems);
}); // END GET Route

module.exports = router;