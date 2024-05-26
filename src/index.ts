import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import MyUserRoute from "./routes/MyUserRoutes";
import { v2 as cloudinary } from "cloudinary";
import myRestaurantRoute from "./routes/MyRestaurantRoutes";
import restaurantRoute from "./routes/RestaurantRoutes";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connect to database"));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

//  api/my/user
app.use("/api/my/user", MyUserRoute);

// api/my/restaurant
app.use("/api/my/restaurant", myRestaurantRoute);

// api/restaurant
app.use("/api/restaurant", restaurantRoute);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
