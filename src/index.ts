import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import MyUserRoute from "./routes/MyUserRoutes";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connect to database"));

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

//  a/pi/my/user
app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});
app.use("/api/my/user", MyUserRoute);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
