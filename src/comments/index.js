import express, { Router } from 'express'
import createError from 'http-errors'
import q2m from 'query-to-mongo'
import { uploadOnCloudinary } from '../../settings/cloudinary.js'
import CommentModel from './schema.js'
import PostModel from '../post/schema.js'

const commentRouter = express.Router()

commentRouter.post('/:postId/comments', async (req, res, next) => {
    try {

        const postId = req.params.postId;
        console.log(postId)
        const post = await PostModel.findById(postId);
        if (post) {
            console.log(Post)
            const newComment = new CommentModel(req.body)
            const { _id } = await newComment.save()
            post.comments.push(newComment_id)
            res.status(201)
        } else {
            next(createError(404, `post with id ${postId} not found`))
        }
    } catch (error) {
        if (error.name === "validationError") {
            next(createError(400, error))
        } else {
            console.log(error)
            next(createError(500, "An Error ocurred while creating your comment"))
        }
    }
})

commentRouter.put('/', async (req, res, next) => {
    try {

    }
    catch {

    }
})

commentRouter.delete('/', async (req, res, next) => {
    try {
        const postId = req.params.postId;
        const post = await PostModel.findById(postId);
        if (post) {
            //spread post 
            //filter through push each one excluding the one we want back to array and save
            //send back comment
            res.status(201).send()
        } else {
            next(createError(404, `post with id ${postId} not found`))
        }
    } catch (error) {
        if (error.name === "validationError") {
            next(createError(400, error))
        } else {
            console.log(error)
            next(createError(500, "An Error ocurred while creating your comment"))
        }
    }
})

commentRouter.get('/ ', async (req, res, next) => { //get all comments
    try {
        const postId = req.params.postId;
        const post = await PostModel.findById(postId);
        if (post) {
            //spread post send back comment array
            res.status(201).send()
        } else {
            next(createError(404, `post with id ${postId} not found`))
        }
    } catch (error) {
        if (error.name === "validationError") {
            next(createError(400, error))
        } else {
            console.log(error)
            next(createError(500, "An Error ocurred while creating your comment"))
        }
    }
})

commentRouter.get('/ ', async (req, res, next) => { //get singular comment
    try {
        const postId = req.params.postId;
        const post = await PostModel.findById(postId);
        if (post) {
            //spread post 
            //filter for specific comment id 
            //send back comment
            res.status(201).send()
        } else {
            next(createError(404, `post with id ${postId} not found`))
        }
    } catch (error) {
        if (error.name === "validationError") {
            next(createError(400, error))
        } else {
            console.log(error)
            next(createError(500, "An Error ocurred while creating your comment"))
        }
    }
})
export default commentRouter