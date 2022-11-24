router.get('/:hashtag', (req, res) => {
    Tweet.findOne({ hashtag: req.params.hashtag }).then(data => {
      if (data) {
        res.json({ result: true, hashtag: data });
      } else {
        res.json({ result: false, error: `No tweets found with #${req.params.hashtag}` });
      }
    });
  });
  