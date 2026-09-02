const express = require("express")
const { getTranscript } = require("../controllers/youtubeController")
const protect = require("../middleware/authMiddleware")

const router = express.Router()

router.post("/transcript", protect, getTranscript)

module.exports = router