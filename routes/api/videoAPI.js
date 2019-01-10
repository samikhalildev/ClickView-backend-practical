const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Load Models
const Video = require('../../models/Video');

/*  @route      GET api/videos
    @desc       View all videos
    @access     Public
 */
router.get('/', (req, res) => {
    Video.find()
        .then(videos => res.json(videos))
        .catch(err => res.status(404).json({ error: 'No videos found' }));
});


/*  @route      POST api/videos
    @desc       Create a video
    @access     Public
 */
router.post('/', (req, res) => {

    var name = req.body.name;
    var duration = Number(req.body.duration);
    var description = req.body.description;
    var thumbnail = req.body.thumbnail;
    var folder = req.body.folder;
    var tags = req.body.tags;

    // Validation
    req.checkBody("name", "Name is required").notEmpty();
    req.checkBody("duration", "Duration is required").notEmpty();
    req.checkBody("description", "Description is required").notEmpty();
    req.checkBody("thumbnail", "thumbnail is required").notEmpty();
    req.checkBody("folder", "folder is required").notEmpty();
    req.checkBody("tags", "tags are required").notEmpty();

    var errors = req.validationErrors();

    if(errors){
        res.status(400).json(errors);

    } else {
        // Create a new video object
        const newVideo = new Video ({
            name,
            duration,
            description,
            thumbnail,
            folder,
            tags
        });

        newVideo.save()
            .then(post => res.json(post))
            .catch(err => res.status(400).json(err));
    }

});


module.exports = router;
