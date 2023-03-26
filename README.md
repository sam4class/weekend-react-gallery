# React - My Gallery

In this project, we were tasked to:
<ul>
    <li>Create a photo gallery</li>
    <li>Every picture should have a button to 'like' the image and a counter to count the number of 'likes'</li>
    <li>If you click on a picture, the picture should disappear and a description of the picture should take it's place</li>
</ul>

## Tasks List for This Project
<ul>
    <li>Use axios to retrieve (GET) data from to /gallery and store it in App.jsx</li>
    <li>Create a new component for the GalleryList and pass it the gallery data stored in App via props.</li>
    <li>Create a new component called GalleryItem.jsx and pass it the individual gallery item via props</li>
    <li>Swap the image with the description on click. Use conditional rendering.</li>
    <li>When the like button is clicked, use Axios to update (PUT) the like count /gallery/like/:id</li>
</ul>


## Screen Shot

![screen shot](https://user-images.githubusercontent.com/78459694/227791653-1c35faf5-42fc-4a0e-acab-a973db6f71cd.png)

## Prerequisites
<ul>
    <li>SQL</li>
    <li>Express</li>
    <li>React</li>
    <li>Node</li>
</ul>

## Installation
<ol>
    <li>Create a database named "react_gallery"</li>
    <li>The queries in the 'database.sql' file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries</li>
    <li>Open up your editor of choice and run an npm install</li>
    <li>Run npm run server in your terminal</li>
    <li>Run npm run client in your terminal</li>
    <li>The npm run client command will open up a new browser tab for you!</li>
</ol>
