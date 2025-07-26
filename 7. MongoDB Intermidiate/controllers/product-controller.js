const Product = require("../models/Product");

const getProductStats = async (req, res) => {
  try {
    const result = await Product.aggregate([
      // stage - 1
      {
        $match: {
          inStock: true,
          price: {
            $gte: 100, // greater than or equal to;
          },
        },
      },
      // stage 2: group documents
      {
        $group: {
          _id: "$category",
          avgPrice: {
            $avg: "$price",
          },
          count: {
            $sum: 1, // if 5 products are there in "Electrical" categoery then it will return count: 5;
          },
        },
      },
    ]);

    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const getProductAnalysis = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $match: {
          category: "Electronics",
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$price",
          },
          averagePrice: {
            $avg: "$price",
          },
          maxProductPrice: {
            $max: "$price",
          },
          minProductPrice: {
            $min: "$price",
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalRevenue: 1,
          averagePrice: 1,
          maxProductPrice: 1,
          minProductPrice: 1,
          priceRange: {
            $subtract: ["$maxProductPrice", "$minProductPrice"],
          },
        },
      },
    ]);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const insertSampleProducts = async (req, res) => {
  try {
    const sampleProducts = [
      {
        name: "iPhone 14 Pro",
        category: "Electronics",
        price: 1299,
        inStock: true,
        tags: ["mobile", "tech"],
      },
      {
        name: "The Subtle Art of Not Giving a F*ck",
        category: "Books",
        price: 399,
        inStock: true,
        tags: ["self-help", "bestseller"],
      },
      {
        name: "Adidas Football",
        category: "Sports",
        price: 799,
        inStock: false,
        tags: ["football", "outdoor"],
      },
      {
        name: "Sony WH-1000XM5 Headphones",
        category: "Electronics",
        price: 24999,
        inStock: true,
        tags: ["audio", "tech"],
      },
      {
        name: "Sketchbook A4",
        category: "Books",
        price: 249,
        inStock: true,
        tags: ["drawing", "stationery"],
      },
    ];

    const result = await Product.insertMany(sampleProducts);
    res.status(201).json({
      success: true,
      data: `Insrted ${result.length} sample products`,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

module.exports = { insertSampleProducts, getProductStats, getProductAnalysis };
