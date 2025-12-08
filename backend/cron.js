import cron from "node-cron";
import Residency from "./models/Residency.js";
import mongoose from "mongoose";

// Connect to MongoDB
const mongoUrl = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/wildlife";
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Run every hour to clean up expired blogs
const cleanupExpiredBlogs = cron.schedule("0 * * * *", async () => {
  try {
    const result = await Residency.deleteMany({
      expiresAt: { $lte: new Date() },
    });
    console.log(
      `[${new Date().toISOString()}] Cleaned up ${
        result.deletedCount
      } expired blogs`
    );
  } catch (error) {
    console.error("Error cleaning up expired blogs:", error);
  }
});

// Start the cron job
cleanupExpiredBlogs.start();
console.log("Cron job started for cleaning up expired blogs");

export default cleanupExpiredBlogs;
