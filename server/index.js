import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// app.use(cors({origin:"https://dalle-2-0-frontend.vercel.app"}));
// Configure CORS

app.use(
  cors({
    // Access-Control-Allow-Origin: 'https://dalle-2-0-frontend.vercel.app',
    origin: "*",
    // Replace with your actual frontend URL

    methods: ["GET", "POST"],
    // Allowed HTTP methods

    allowedHeaders: ["Content-Type"],
    // Allowed headers
  })
);
app.options("*", cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => res.send("Hello from DALL-E"));

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("Server is running on  http://localhost:8080")
    );
  } catch (error) {
    console.log("mongodb connection error", error);
  }
};

startServer();
