const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const youtubeRoutes = require("./routes/youtubeRoutes")

const authRoutes = require("./routes/authRoutes")

dotenv.config()

const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/youtube", youtubeRoutes)

app.use("/api/auth", authRoutes)

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "EasyQuiz Backend is running 🚀",
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`EasyQuiz server running on port ${PORT}`)
})