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

PostSchema.static('findPostUser', async function (id) {
  const post = await this.findById(id).populate('Profile');
  return post;
});

PostSchema.static('findPostUser', async function (query) {
  const total = await this.countDocuments(query.criteria);
  const posts = await this.find(query.criteria, query.options.fields)
    .skip(query.options.skip)
    .limit(query.options.limit)
    .sort(query.options.sort)
    .populate('Profile');
  return { total, posts };
});

export default model('Post', PostSchema); // bounded to "Posts" collection
