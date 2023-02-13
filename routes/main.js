const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main");

//Main Routes - simplified for now
router.put("/demographic-data/:latitude&:longitude", mainController.updateDemographics);
router.put("/demographic-data", mainController.updateAllDemographics);

module.exports = router;