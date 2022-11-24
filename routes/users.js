var express = require('express');
var router = express.Router();
const uid2 = require('uid2');
const bcrypt = require('bcrypt');

require('../models/connection');
const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');
const token = uid2(32);

router.post('/signup', (req, res) => {
	if (!checkBody(req.body, ['username', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }


  // Check if the user has not already been registered
  User.findOne({ username: req.body.username }).then(data => {
    const hash = bcrypt.hashSync(req.body.password, 10);
    if (data === null) {
      const newUser = new User({
        username: req.body.username,
        password: hash,
        token: uid2(32),
      });

      newUser.save().then(() => {
        res.json({ result: true, token: newUser.token });
      });
    } else {
      // User already exists in database
      res.json({ result: false, error: 'User already exists' });
    }
  });
});

router.post('/signin', (req, res) => {
  if (!checkBody(req.body, ['username', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }

  User.findOne({ username: req.body.username })
  .then(data => {
    if (data && bcrypt.compareSync(req.body.password, data.password)) {
      res.json({ result: true });
    } else {
      res.json({ result: false, error: 'User not found or wrong password' });
    }
  });
});