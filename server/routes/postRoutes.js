import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongodb/models/post.js";

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Get all the Posts
router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});

    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

router.route("/").post(async (req, res) => {
  try {
    const { name, photo, prompt } = req.body;

    if (!name || !photo || !prompt) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    const postUrl = await cloudinary.uploader.upload(photo, {
      folder: "AI Images",
    });

    const newPost = await Post.create({
      name,
      prompt,
      photo: postUrl.url,
    });

    res.status(200).json({ success: true, data: newPost });
  } catch (error) {
    console.error('Error creating post:', error);  // Log the error
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
