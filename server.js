const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');

const app = express();


// Connect to MongoDB
mongoose
    .connect('mongodb://localhost:27017/clickview', { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

readJSONData();


// Routes
app.get('/', (req, res) => {
   res.send("hello");
});

// set port and start up the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));


// Read videos.json
function readJSONData() {
    fs.readFile('videos.json', (err, data) => {
        if(err) throw err;
        console.log(JSON.parse(data));
    });
}
