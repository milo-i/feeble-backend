const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
 username: {
  type: String,
  required: true
 },
 password: {
  type: String,
  required: true
 },
 location: {
  type: String,
  required: true
 },
 stance: {
  type: String,
  required: true
 },
 id: {
  type: Number,
  required: true
 }
});


const User = mongoose.model('User', userSchema);
module.exports = User;