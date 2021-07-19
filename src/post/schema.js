import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const PostSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },

    user: [{ type: Schema.Types.ObjectId, require: true, ref: 'Profile' }],
    //reference to image same way
  },
  {
    timestamps: true, // adding createdAt and modifiedAt automatically
  }
);

export default model('Post', PostSchema); // bounded to "Posts" collection
