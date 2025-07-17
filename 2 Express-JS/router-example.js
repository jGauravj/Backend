const express = require("express");

const app = express();
const port = 3000;

//root route
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

// get all produts
app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      label: "product 1",
    },
    {
      id: 2,
      label: "product 2",
    },
    {
      id: 3,
      label: "product 3",
    },
  ];
  res.json(products);
});

// get a single product (dynamic routing)
app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const products = [
    {
      id: 1,
      label: "product 1",
    },
    {
      id: 2,
      label: "product 2",
    },
    {
      id: 3,
      label: "product 3",
    },
  ];

  const getSingleProduct = products.find((product) => product.id === productId);

  if (getSingleProduct) {
    res.json(getSingleProduct);
  } else {
    res.status(404).send("Product is not found! please try with diff ID");
  }
});

app.listen(port, () => {
  console.log(`App is working on ${port}`);
});
