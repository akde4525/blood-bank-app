const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,

  getDonorsController,
  getHospitalController,
  getOrganisationController,
  getOrganisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");
const router = express.Router();

// routes
// ADD INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventoryController);
// GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddleware, getInventoryController);
// GET RECENT BLOOD RECORDS
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);
// GET HOSPITAL BLOOD RECORDS
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);
// GET ALL DONORS RECORDS
router.get("/get-donors", authMiddleware, getDonorsController);
// GET ALL HOSPITALS RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalController);
// GET ALL ORGANISATION RECORDS
router.get("/get-organisation", authMiddleware, getOrganisationController);
// GET ALL HOSPITAL-ORGANISATION RECORDS
router.get(
  "/get-organisation-for-hospital",
  authMiddleware,
  getOrganisationForHospitalController
);

module.exports = router;
