const express = require("express");
const router = express.Router();

const { lunchOrder, getOrder } = require("../controllers/lunch.contoller");
const { protect } = require("../middleware/authMiddleware");
router.get("/", getOrder);
router.post("/order", protect, lunchOrder);

module.exports = router;
