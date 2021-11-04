const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  userName: {
   type: String,
   required: true
  },
  sessionId: {
   type: Number,
   required: true
  },
 city: {
  type: String,
  required: true
 },
 street: {
  type: String,
  required: true
 },
 date: {
  type: String,
  required: true
 },
  users: {
   type: Array,
   required: false
  }
});


const Session = mongoose.model('Session', sessionSchema);
module.exports = Session;