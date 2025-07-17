const Book = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: "List of All books fetched successfully",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No books found in DB",
      });
    }
  } catch (e) {
    console.log("Error:", e);
    res.status(500).json({
      success: false,
      message: "Somthing went wrong. Please try again!",
    });
  }
};

const getSingleBookById = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const bookDetailsById = await Book.findById(getCurrentBookId);

    if (!bookDetailsById) {
      return res.status(404).json({
        success: false,
        message:
          "Book with the current ID is not found! Please try with diffrent ID",
      });
    } else {
      res.status(200).json({
        success: true,
        data: bookDetailsById,
      });
    }
  } catch (e) {
    console.log("Error:", e);
    res.status(500).json({
      success: false,
      message: "Somthing went wrong. Please try again!",
    });
  }
};

const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if (newBookFormData) {
      res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (e) {
    console.log("Error:", e);
    res.status(500).json({
      success: false,
      message: "Somthing went wrong. Please try again!",
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBookFormData = req.body;
    const getCurrentBookID = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(
      getCurrentBookID,
      updatedBookFormData,
      { new: true }
    );
    if (!updatedBook) {
      res.status(404).json({
        success: false,
        message: "Book is not found with this ID! Please try again",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book Update successfully!",
      data: updatedBook,
    });
  } catch (e) {
    console.log("Error:", e);
    res.status(500).json({
      success: false,
      message: "Somthing went wrong. Please try again!",
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(getCurrentBookID);
    if (!deletedBook) {
      res.status(404).json({
        success: false,
        message: "Book is not found with this ID! Please try again",
      });
    } else {
      res.status(200).json({
        success: true,
        data: deletedBook,
      });
    }
  } catch (e) {
    console.log("Error:", e);
    res.status(500).json({
      success: false,
      message: "Somthing went wrong. Please try again!",
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
