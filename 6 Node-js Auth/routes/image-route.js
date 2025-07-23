const express = require("express");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const uploadMiddleware = require("../middlewares/upload-middleware");
const {
  uploadImageController,
  fetchImagesController,
  deleteImageController,
} = require("../controllers/image-controller");

const router = express.Router();

// upload the image
router.post(
  "/upload",
  authMiddleware,
  adminMiddleware,
  uploadMiddleware.single("image"),
  uploadImageController
);

// get all the images
router.get("/get", authMiddleware, fetchImagesController);

// delete image route
//687fbb3e1491e302742d0249
router.delete("/:id", authMiddleware, adminMiddleware, deleteImageController);

module.exports = router;
