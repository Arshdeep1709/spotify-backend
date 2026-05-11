import mongoose from "mongoose";
import config from "../config/config.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGO_DB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}