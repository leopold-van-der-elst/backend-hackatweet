const { router } = require("../app");

router.post('/new', (req, res)=> {
    const newTweet = new Tweet ({
        content: req.body.content,
        hashtag: req.body.hashtag,
        user: req.body.token,
    });

    newTweet.save().then(newDoc => {
        res.json({result: true, tweet: newDoc});
    });
});

router.get('/', (req, res) => {
    Tweet.find()
    .then(response => response.json())
    .then(data => {
        res.json({result: true, data: data});
    });
});