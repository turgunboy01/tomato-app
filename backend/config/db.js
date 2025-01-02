import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://turgunboy20011005:0Wld8CwUr4bpVfrD@cluster0.3wth4.mongodb.net/"
    )
    .then(() => console.log("connect DB"));
};
