const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require("express-validator");

// Load api routes
const videoAPI = require('./routes/api/videoAPI');
const Video = require('./models/Video');

// initiate express app
const app = express();


// Connect to MongoDB
mongoose
    .connect('mongodb://localhost:27017/clickview', { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


// This will make sure to read the json file only if there is no data in the videos collections.
Video.estimatedDocumentCount({}, function(err, count){
    console.log( "Number of videos data:", count);
    if(count == 0)
        readJSONData();
});

// Body parser middleware
app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json());


// Express Validator middleware
app.use(
    expressValidator({
        errorFormatter: function(param, msg, value) {
            var namespace = param.split("."),
                root = namespace.shift(),
                formParam = root;

            while (namespace.length) {
                formParam += "[" + namespace.shift() + "]";
            }
            return {
                param: formParam,
                msg: msg,
                value: value
            };
        }
    })
);


// Routes
app.use('/api/videos', videoAPI);


// set port and start up the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));





// Read videos.json
function readJSONData() {
    fs.readFile('videos.json', (err, data) => {
        if(err) throw err;

        console.log("Reading json data from file...");
        var data = JSON.parse(data);
        addDataToDB(data);
    });

}

function addDataToDB(data) {
    data.map((video) => {

        // create a video object
        const newVideo = new Video ({
            name: video.name,
            duration: video.duration,
            description: video.description,
            dateCreated: video.dateCreated,
            thumbnail: video.thumbnail,
            folder: video.folder,
            tags: video.tags
        });

        newVideo.save().then().catch(err => console.log(err));
    });

    console.log("JSON data saved to database.");
}
