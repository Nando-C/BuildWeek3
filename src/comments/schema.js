import mongoose from 'mongoose'

const { Schema, model } = mongoose;


const CommentSchema = new Schema(
    {
        post_id: [],
        commentAuthor_id: {
            type: String,
            required: true
        },
       
        body: {
            type: String,
            required: true
        },
        likedBy: [],
        createdAt: {
            type: Date,
            required: true
        },
        updatedAt: {
            type: Date,
            required: true
        },

    }
)

export default model('Comment', CommentSchema)