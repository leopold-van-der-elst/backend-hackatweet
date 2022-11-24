const mongoose = require('mongoose');

const tweetsSchema = mongoose.Schema({
 content: String,
 hashtag: String,
 users: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
});

const Tweet = mongoose.model('tweets', tweetsSchema);

module.exports = Tweet;