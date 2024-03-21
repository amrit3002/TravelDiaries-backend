import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes";
import postRouter from "./routing/post-routes";
import cors from "cors";

const app = express();
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);
 // connections
  // moongoose is a package which is used for the objext modelling approach of mongoDB
  // it is the official driver od mongoDB
  // ** in mongodb user password never use special characters
  // .connect gives us a promise so we need a callback function

  mongoose
  .connect(
    `mongodb+srv://amritanshusawarn:${process.env.MONGODB_PASSWORD}@cluster0.dzrlpok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() =>
    app.listen(5000, () =>
      console.log("Connection Succesfull  & Listening to localhost Port 5000")
    )
  )
  .catch((err) => console.log(err));

  // app.listen(5000,console.log("listening"))
  

