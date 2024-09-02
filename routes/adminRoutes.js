const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDonorListController,
  getHospitalListController,
  getOrganisationListController,
  deleteDonorController,
  deleteHospitalController,
  deleteOrgController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

// router-object
const router = express.Router();

// Routes

// GET || DONOR LIST
router.get(
  "/donor-list",
  authMiddleware,
  adminMiddleware,
  getDonorListController
);

// GET || HOSPITAL LIST
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalListController
);

// GET || ORGANISATION  LIST
router.get(
  "/org-list",
  authMiddleware,
  adminMiddleware,
  getOrganisationListController
);

// GET || DELETE DONAR
router.delete(
  "/delete-donor/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonorController
);

// GET || DELETE HOSPITAL
router.delete(
  "/delete-hospital/:id",
  authMiddleware,
  adminMiddleware,
  deleteHospitalController
);
// GET || DELETE ORGANISATION
router.delete(
  "/delete-organisation/:id",
  authMiddleware,
  adminMiddleware,
  deleteOrgController
);

// export
module.exports = router;
