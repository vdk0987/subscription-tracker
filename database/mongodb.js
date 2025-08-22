import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error("MONGODB_URI environment variable is not set in .local file");
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Connected to database in ${NODE_ENV} mode`);
  } catch (err) {
    console.log(err);
    process.exitCode(1);
  }
};

export default connectToDatabase;
