import mongoose from "mongoose";
import "dotenv/config";
import dns from "node:dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

export async function connectDB() {
    try {
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI) {
            throw new Error("MONGO_URI is not defined in the environment variables.");
        }
        const connection = await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB", connection.connection.host);
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit the process with failure
    }
}