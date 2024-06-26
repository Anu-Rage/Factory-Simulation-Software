const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
 factoryName : { type :String, required : true},
 emailId : { type :String, required : true},
 password : { type :String, required : true},
 Date : { type: Date, default: Date.now }

});
const User = mongoose.model('user', UserSchema);
User.createIndexes();
 module.exports = User;