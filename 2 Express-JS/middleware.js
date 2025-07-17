const express = require("express");
const app = express();

// defining middleware function
const myFirstMiddleware = (req, res, next) => {
  console.log("This First Middleware run on every request");

  next(); // called next middleware
};

app.use(myFirstMiddleware);

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Application working on ${port}`);
});
