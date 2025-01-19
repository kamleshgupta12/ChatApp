import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`DB Connected Successfully.`);
  } catch (error) {
    console.log("DB Not Connect.");
  }
};
