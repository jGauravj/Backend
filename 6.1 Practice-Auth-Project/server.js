require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const homeRoute = require("./router/home-route");
const adminRoute = require("./router/admin-route");
const authRoutes = require("./router/auth-route");

//MongoDB Connection
connectToDB();

const app = express();
const PORT = process.env.PORT || 3002;

//Middlewares
app.use(express.json());

app.use("/api/home", homeRoute);
app.use("/api/admin", adminRoute);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is now listening on PORT: ${PORT}`);
});
