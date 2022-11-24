const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
 firstName: String,
 username: String,
 password: String,
});

const User = mongoose.model('users', usersSchema);

module.exports = User;