import express from "express"
import createError from "http-errors"

import ExperienceModel from "./schema.js"

const experienceRouter = express.Router()


// POST EXPERIENCES

experienceRouter.post("/", async (req, res, next) => {
    try {
  
      const newExperience = new ExperienceModel(req.body)
      const { _id } = await newExperience.save()
  
      res.status(201).send({ _id })
  
    } catch (error) {
  
      if (error.name === "ValidationError") {
  
        next(createError(400, error))
  
      } else {
  
        console.log(error)
  
        next(createError(500, "An error occurred while creating new Experience"))
      }
    }
  })
  
  experienceRouter.get("/", async (req, res, next) => {
    try {
  
      const experiences = await experienceModel.find()
  
      res.send(experiences)
  
    } catch (error) {
  
      next(createError(500, "An error occurred while getting experiences"))
  
    }
  })
  
  experienceRouter.get("/:expId", async (req, res, next) => {
    try {
  
      const expId = req.params.expId
  
      const experience = await experienceModel.findById(expId)
  
      if (experience) {
        res.send(experience)
      } else {
        next(createError(404, `Experience with _id ${expId} not found!`))
      }
    } catch (error) {
      next(createError(500, "An error occurred while getting experiences"))
    }
  })
  
  experienceRouter.delete("/:expId", async (req, res, next) => {
    try {
      const expId = req.params.expId
  
      const deletedExperience = await AuthorModel.findByIdAndDelete(expId)
  
      if (deletedExperience) {
        res.status(204).send()
      } else {
        next(createError(404, `Experience with _id ${expId} not found!`))
      }
    } catch (error) {
      next(createError(500, `An error occurred while deleting experience ${req.params.expId}`))
    }
  })
  
  experienceRouter.put("/:expId", async (req, res, next) => {
    try {
      const expId = req.params.expId
  
      const updatedExperience = await AuthorModel.findByIdAndUpdate(expId, req.body, {
        new: true, // to use existing record n
        runValidators: true,
      })
  
      if (updatedExperience) {
        res.send(updatedExperience)
      } else {
        next(createError(404, `Author with _id ${expId} not found!`))
      }
    } catch (error) {
      next(createError(500, `An error occurred while updating experience ${req.params.expId}`))
    }
  })
  

export default experienceRouter