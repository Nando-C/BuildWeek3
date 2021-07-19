import mongoose from "mongoose"

const { Schema, model } = mongoose

const ExperienceSchema = new Schema(
  {
    role: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate:{
      type: Date,
    },
    description:{
      type: String,
      required: true,
    },
    area:{
      type: String,
      required: true,
    },
    username:{
      type: String,
      required: true,
    },
    image:{
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // adding createdAt and modifiedAt automatically
  }
)

export default model("Experiences", ExperienceSchema) // bounded to "users" collection

// seperate crud for embeded values check purchase history in riccardos code

