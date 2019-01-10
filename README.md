# ClickView Videos API

A backend api that allows to view, add, update and delete videos. It is able to fetch videos by specifying a folder name or tags.
Uses nodejs and express as a backend service and mongo as the database.

## Setup

- Make sure you have Node.js and Mongodb installed on your machine
- git clone this repo
- `cd` into the directory and `npm install` so that you have all the dependencies needed to run the program.
- run `nodemon` or `npm start` to start the server and the database


## API

- GET - View all videos: /api/videos
- POST - Create or update a video: api/videos:
    - Data must be sent with the body of the request (use postman)
    - To update a specific video you must include the video name with updated fields in the body of the request
- DELETE - Delete a video: api/videos/video_id:
    - Include the video delete in the url parameter.

- POST - Fetch videos by folder: /api/videos/folder
    - Folder name must be included in the body of the request e.g. folder: "Senior"

- POST - Fetch videos by tags: /api/videos/tag
    - Tags name must be included in the body of the request e.g. tags: "ABC"


