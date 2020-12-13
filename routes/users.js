const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var postSchema = mongoose.Schema({
  post:String,
  time:{
    type: String,
    default:new Date()

  }
})

module.exports = mongoose.model('post', postSchema);
