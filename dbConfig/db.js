import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // If already connected, use the existing connection
    if (mongoose.connection.readyState === 1) {
      console.log("✅ MongoDB already connected");
      return;
    }

    // Connect to MongoDB using environment variable
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "foodify", // change this to your DB name
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;
