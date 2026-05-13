import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username must be unique"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email must be unique"],
        match: [
            /^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,63}$/,
            "Please enter a valid email address"
        ]

    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"]
    },
    role: {
        type: String,
        enum: ["user", "artist"],
        default: "user"
    }
}, { timestamps: true });

export const userModel = mongoose.model("User", userSchema);