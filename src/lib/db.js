import mongoose from 'mongoose';

let isConnected = false;

export default async function Mongo_Connect() {
  try {
    if (isConnected) {
      return;
    }

    const db = await mongoose.connect(process.env.MONGO_URL);

    isConnected = db.connection.readyState === 1;

    if (isConnected) {
      console.log(" MongoDB connected");
    }
  } catch (error) {
    console.error(" MongoDB connection error:", error);
    throw error;
  }
}
