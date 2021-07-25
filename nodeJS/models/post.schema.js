const {Schema, model} = require('mongoose')

const Post = new Schema({
    user: {
      email: {
        type: String,
        required: true,
        minlength:3
      },
      title: {
        type: String,
        required: true,
        minlength:3
      },
      text: {
        type: String,
        required: true,
        minlength:3
      }
    }
})
 

module.exports = model("Post", Post);