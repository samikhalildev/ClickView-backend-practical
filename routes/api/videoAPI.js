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
    @desc       Create a video or update a video
    @access     Public
 */
router.post('/', (req, res) => {

    // 1: Get fields
    const newVideo = {};

    // Making sure to only get fields that are sent in the body request.
    if(req.body.name) newVideo.name = req.body.name;
    if(req.body.duration) newVideo.duration = Number(req.body.duration);
    if(req.body.description) newVideo.description = req.body.description;
    if(req.body.thumbnail) newVideo.thumbnail = req.body.thumbnail;
    if(req.body.folder) newVideo.folder = req.body.folder;
    if(req.body.tags) newVideo.tags = req.body.tags;

    // 2: Check if the video name already exists.
    //   - If video exists then update the fields in the body of the request
    //   - Otherwise create a new video.
    Video.findOne({ name: newVideo.name })
        .then(video => {

            if(video) {
                Video.findOneAndUpdate({ name: newVideo.name }, { $set: newVideo }, { new: true })
                    .then(videoUpdated => res.json(videoUpdated))
                    .catch(err => res.status(400).json(err));

            } else {
                new Video(newVideo)
                    .save()
                    .then(videoSaved => res.json(videoSaved))
                    .catch(err => res.status(400).json(err));
            }

        })
        .catch(err => console.log(err));

});



/*  @route      DELETE api/videos/:video_id
    @desc       Delete video by id
    @access     Public
 */
router.delete("/:video_id", (req, res) => {

    const videoID = req.params.video_id;

    Video.remove({ _id: videoID })
        .then(done => res.json({ success: 'Video has been removed' }))
        .catch(err => res.status(404).json({ error: 'Video not found' }));

});

module.exports = router;
