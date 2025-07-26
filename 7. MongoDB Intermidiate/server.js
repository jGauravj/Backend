require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product-routes");
const bookRoutes = require("./routes/book-route");

const PORT = process.env.PORT;

const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((e) => console.log(e));

// use middelwares
app.use(express.json());

app.use("/products", productRoutes);
app.use("/reference", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is now listening on Port: ${PORT}`);
});
