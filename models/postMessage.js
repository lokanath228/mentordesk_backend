import mongoose from 'mongoose'
// import { string } from 'prop-types'

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  fruits: String,
  vegetable: String,
  meat: String,
  tags: [String],

  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage
