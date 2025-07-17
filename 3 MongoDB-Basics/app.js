const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://gouraw1:gouraw12@cluster0.kbktjzs.mongodb.net/")
  .then(() => console.log("Database connected successfully"))
  .catch((e) => console.log(e));

// user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now }, // if we dont pass created at then it'll take default value;
});

// create user model
const User = mongoose.model("User", userSchema);

async function runQuerryExamples() {
  try {
    // create a new document
    const newUser = await User.create({
      name: "Update",
      email: "update@gmail.com",
      age: "77",
      isActive: true,
      tags: ["develoepr"],
    });
    console.log("Create new user:", newUser);
    // const allUsers = await User.find({});
    // console.log(allUsers);
    // finding active users -->
    // const getUserActiveFalse = await User.find({ isActive: false });
    // console.log(getUserActiveFalse);

    // Findone() -> is finding first one that match the critaria -->
    // const getRohitUser = await User.findOne({ name: "Rohit" });
    // console.log(getRohitUser); // we have two rohit but it find first one always.

    //Now we will find last created user with findById() --->
    // const getLastCreatedUser = await User.findById(newUser._id);
    // console.log(getLastCreatedUser);

    // if we want selected fields like name and email and we dont want id --->
    // const selectedField = await User.find().select("name email -_id");
    // console.log(selectedField);

    // Limited user like (pagination) and we want to skip 1st one ->
    // const limitedUser = await User.find().limit(5).skip(1);
    // console.log(limitedUser);

    // Sorting user we use sort() inside this just pass for what you want to sort ex: {age: -1} means descending || {age: 1} means ascending order
    // const sortedUser = await User.find().sort({ age: -1 });
    // console.log(sortedUser);

    // Count Documents like we want inactive users ->
    // const countDocuments = await User.countDocuments({ isActive: false });
    // console.log(countDocuments);

    // Deleting user by there id ->
    // const deletedUser = await User.findByIdAndDelete(newUser._id);
    // console.log(deletedUser);

    // updating user -->
    const updatedUser = await User.findByIdAndUpdate(
      newUser._id,
      {
        $set: { age: 100 },
        $push: { tags: "updated" },
      },
      { new: true }
    );
    console.log(updatedUser);
  } catch (e) {
    console.log("Error ->", e);
  } finally {
    await mongoose.connection.close();
  }
}

runQuerryExamples();
