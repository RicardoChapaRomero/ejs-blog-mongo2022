const mongoose = require('mongoose');
const schema = mongoose.Schema;

const post_schema = schema({
  title: String,
  author: String,
  post_date: {
    type: Date,
    default: Date.now
  },
  post_data: String
});

module.exports = mongoose.model('posts', post_schema);
