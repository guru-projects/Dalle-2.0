import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route("/").get((req, res) => {
  res.send("Welcome from DALL-E");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const { size } = req.body;
    const { model } = req.body;
    

    const aiResponse = await openai.images.generate({
      model: model,
      prompt,
      n: 1,
      size: size,
      response_format: "b64_json",
    });

    const image = aiResponse.data[0].b64_json;
    res.status(200).json({ photo: image });
    
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).send(
      error?.response?.data?.error?.message || "Something went wrong"
  );
  }
});

export default router;
