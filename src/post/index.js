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
  } catch (error) {
    console.log(error);
    next('error');
  }
});
postRouter.get('/:id', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next('error');
  }
});
postRouter.put('/:id', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next('error');
  }
});
postRouter.delete('/:id', async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next('error');
  }
});

export default postRouter;
