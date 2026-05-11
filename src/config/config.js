import dotenv from 'dotenv';

dotenv.config();

if (!process.env.MONGO_DB_URI) {
    throw new Error("MONGO_DB_URI is not defined in the environmental variables");
}
if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in the environmental variables");
}
const config = {
    MONGO_DB_URI: process.env.MONGO_DB_URI,
    JWT_SECRET: process.env.JWT_SECRET
}
export default config;