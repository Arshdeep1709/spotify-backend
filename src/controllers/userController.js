import { userModel } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const signup = async (req, res) => {
    try {
        const { username, email, password, role = "user" } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        const existingUser = await userModel.findOne({
            $or: [
                { username: username },
                { email: email }
            ]
        });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Username or email already exists"
            });
        }
        const newUser = await userModel.create({
            username,
            email,
            password,
            role
        });

        const token = jwt.sign({ userId: newUser._id, role: newUser.role }, config.JWT_SECRET);

        res.cookie("token", token);
        await newUser.save();
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                role: newUser.role
            },
            token
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}