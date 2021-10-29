const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
 userId: {
  type: Number,
  required: true
 },
 sessionId: {
  type: Number,
  required: true
 },
 location: {
  type: String,
  required: true
 },
 time: {
  type: Number,
  required: true
 },
 users: {
  type: Array,
  required: false
 }
});


const Session = mongoose.model('Session', sessionSchema);
module.exports = Session;