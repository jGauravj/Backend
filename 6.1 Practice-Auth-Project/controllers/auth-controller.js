const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// register user
const registerUser = async (req, res) => {
  try {
    // extract user info from body -->
    const { username, email, password, role } = req.body;

    // check user is already in db or not-->
    const checkExistingUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (checkExistingUser) {
      res.status(400).json({
        success: false,
        message:
          "User is already exist with same username or email. Please try with diffrent email and username.",
      });
    }

    // Hash Password -->
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create a new user and save in Database -->

    const newlyCreatedUser = new User({
      username,
      email,
      password: hashedPassword,
      role: role || "user",
    });
    await newlyCreatedUser.save();
    if (newlyCreatedUser) {
      res.status(200).json({
        success: true,
        message: "User registered successfully!",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Unable to registered user. Please try again!",
      });
    }
  } catch (e) {
    console.log("Error->", e);
    res.status(500).json({
      success: false,
      message: "Some error occured! Please try again",
    });
  }
};

// login user

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // find if the current user is existing in current db or not-->
    const user = await User.findOne({ username });
    if (!user) {
      res.status(400).json({
        success: false,
        message: `Invalid credentials!`,
      });
    }

    // if the password is correct or not -->
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials!",
      });
    }

    // create token -->
    const accessToken = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "15m",
      }
    );
    res.status(200).json({
      success: true,
      message: "Logged in Successful!",
      accessToken,
    });
  } catch (e) {
    console.log("Error->", e);
    res.status(500).json({
      success: false,
      message: "Some error occured! Please try again",
    });
  }
};

module.exports = { registerUser, loginUser };
