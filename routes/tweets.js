var express = require('express');
var router = express.Router();
const Tweet = require('../models/tweets')

router.post('/new', (req, res)=> {
    const newTweet = new Tweet ({
        content: req.body.content,
        hashtag: req.body.hashtag,
        username: req.body.username,
    });

    newTweet.save().then( data => {
        res.json({result: true, tweet: data});
    });
});

router.get('/tweet', (req, res) => {
    Tweet.find()
    .then(data => {
        console.log(data)
        res.json({result: true, tweet: data});
    });
});
router.post('/remove', (req, res) => {
    console.log(req.body.id)
    Tweet.deleteOne({_id: req.body.id})
    .then(() => {
        Tweet.find()
        .then(data => {
            res.json({result: true, tweet: data});
        })
    })
})

module.exports = router;