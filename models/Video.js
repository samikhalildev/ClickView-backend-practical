const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const VideoSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    duration: {
        type: Number,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    dateCreated: {
        type: Date.now
    },

    thumbnail: {
        type: String
    },

    folder: {
        type: String
    },

    tags: [String]

});

module.exports = Video = mongoose.model('videos', VideoSchema);
