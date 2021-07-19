import express from 'express';
import createError from 'http-errors';

import PostModel from './schema.js';

const postRouter = express.Router();

postRouter.post('/', async (req, res, next) => {
  try {
    const newPost = new PostModel(req.body);
    const { _id } = await newPost.save();

    res.status(201).send({ _id });
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(createError(400, error));
    } else {
      console.log(error);
      next(createError(500, 'Error occcured while creating new post'));
    }
  }
});
postRouter.get('/', async (req, res, next) => {
  try {
    const posts = await PostModel.find();
    res.send({ posts });
  } catch (error) {
    console.log(error);
    next('error');
  }
});
postRouter.get('/:postId', async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const post = await PostModel.findById(postId);

    if (posts) {
      res.send.apply(posts);
    } else {
      next(createError(404, `post with id ${postId} not found`));
    }
  } catch (error) {
    console.log(error);
    next('error');
  }
});
postRouter.put('/:postId', async (req, res, next) => {
  try {
    const postId = req.params.postId;

    const updatedPost = await PostModel.findByIdAndUpdate(postId, req.body, {
      new: true,
      runValidators: true,
    });

    if (updatedPost) {
      res.send(updatedPost);
    } else {
      next(
        createError(
          500,
          `An error occurred while updating post ${req.params.postId}`
        )
      );
    }
  } catch (error) {
    console.log(error);
    next('error');
  }
});
postRouter.delete('/:postId', async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const deletePost = await PostModel.findByIdAndDelete(postId);

    if (deletePost) {
      res.status(204).send();
    } else {
      next(
        createError(
          500,
          `An error occurred while deleting post ${req.params.postId}`
        )
      );
    }
  } catch (error) {
    console.log(error);
    next('error');
  }
});

export default postRouter;
