const express = require("express")

const {
  signup,
  login,
} = require("../controllers/authController")

const protect = require("../middleware/authMiddleware")

const router = express.Router()

router.post("/signup", signup)
router.post("/login", login)

router.get("/profile", protect, (req, res) => {
  res.json({
    success: true,
    message: "You accessed a protected route 🔐",
    user: req.user,
  })
})

module.exports = router