const mongoose = require('mongoose');

const tweetsSchema = mongoose.Schema({
 content: String,
 hashtag: Array,
 username: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
});

const Tweet = mongoose.model('tweets', tweetsSchema);

module.exports = Tweet;