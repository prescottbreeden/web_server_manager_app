const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

var userSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    messages: [{type: mongoose.Schema.Types.ObjectId, ref: 'Message'}]
});

userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userSchema);