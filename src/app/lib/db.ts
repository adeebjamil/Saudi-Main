import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect("mongodb+srv://adeebjamil0707:SqTobyQu74UMPqzK@saudi.6y1bv.mongodb.net/Saudi");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("MongoDB connection failed");
  }
};

export default connectDB;
