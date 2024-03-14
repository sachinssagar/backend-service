import express from "express";
import { Course } from "../models/course.js";

const router = express.Router();

// Get all courses
router.get("/", async (req, res) => {
  try {
    const course = await Course.find();

    return res.status(200).json(course);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// Create a new course

router.post("/", async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ message: "Required data missing" });
    }
    const newCourse = {
      name: req.body.name,
    };

    const course = await Course.create(newCourse);
    return res.status(201).json(course);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// get book by id

router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Cousrse not found" });
    }

    return res.status(200).json(course);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// Update the course
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ message: "Required data missing" });
    }

    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Couserse not found" });
    }

    course.name = req.body.name;

    await course.save();

    return res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

// Delete a course
router.delete("/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    return res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: error.message });
  }
});

export default router;
