import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // load .env

export const connectDB = async () => {
    try {
        // Test print (optional)
        console.log("Connecting to MongoDB:", process.env.MONGO_URI);

        // Connect using URI from .env
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1); // stop server if DB not connected
    }
};



// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.