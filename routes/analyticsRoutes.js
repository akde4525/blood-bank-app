const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  bloodGroupDetailsController,
} = require("../controllers/analyticsController");

const router = express.Router();

// routes

// get blood groups data
router.get("/bloodGroups-data", authMiddleware, bloodGroupDetailsController);

module.exports = router;
