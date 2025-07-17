const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://gouraw1:gouraw12@bookstore.x8vngjv.mongodb.net/"
    );
    console.log("mongodb is connected successfully!!");
  } catch (error) {
    console.log("Mongoose connection failed", error);
    process.exit(1);
  }
};

module.exports = connectToDB;
