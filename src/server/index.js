import express from "express";  
import cookieParser from "cookie-parser";
import { connectDB } from "../database/connection.js";
import userRoute from "../routes/userRoute.js";


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/user", userRoute);

const port = 3000;

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});