
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("MONGODB_URL:", process.env.MONGODB_URL); // Debugging: Log the value of MONGO_URI

    if (!process.env.MONGODB_URL) {
      throw new Error("MONGO_URL is not defined. Check your .env file.");
    }

    const conn = await mongoose.connect(process.env.MONGODB_URL);


    console.log(`MongoDB Connected: ${conn.connection.host}`.bgGreen.white);
  } catch (error) {
    console.error(`Error: ${error.message}`.bgRed.white);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
