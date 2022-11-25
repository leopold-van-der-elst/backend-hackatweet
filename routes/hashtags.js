var express = require('express');
var router = express.Router();
<<<<<<< HEAD
=======
const Tweet = require ("../models/tweets")
>>>>>>> ab093b4f635b7bd99fe01666d23b9e0de64004f3

router.get('/:hashtag', (req, res) => {
    Tweet.findOne({ hashtag: req.params.hashtag }).then(data => {
      if (data) {
        res.json({ result: true, hashtag: data });
      } else {
        res.json({ result: false, error: `No tweets found with #${req.params.hashtag}` });
      }
    });
  });
<<<<<<< HEAD

  module.exports = router;
  
=======
  
  module.exports = router;
>>>>>>> ab093b4f635b7bd99fe01666d23b9e0de64004f3
