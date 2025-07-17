require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const authRoutes = require("./routes/auth-routes");
const homeRoute = require("./routes/home-route");
const adminRoute = require("./routes/admin-route");

// MongoDB Connection
connectToDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoute);
app.use("/api/admin", adminRoute);

app.listen(PORT, () => {
  console.log(`Server is now listening on ${PORT}`);
});
