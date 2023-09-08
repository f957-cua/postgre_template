import express from "express";
import dotenv from "dotenv";
import userRouter from "./routs/user.routes.js";
import postRouter from "./routs/post.routes.js";

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 8080;

const app = express();

app.use(express.json());

app.use("/api", userRouter);
app.use("/api", postRouter);

app.use(express.json());

app.listen(SERVER_PORT, () => {
  console.log(`Server running on PORT ${SERVER_PORT}`);
});
