# EasyQuiz 🎯

EasyQuiz is an AI-powered learning platform that converts YouTube videos into
structured notes and interactive quizzes.

---

## 🚀 Features

- Paste a YouTube link
- Extract video transcript
- Generate AI-powered notes & summary
- Create MCQ quizzes with timer
- View quiz scores
- Download notes as PDF
- User authentication (login/signup)
- Dashboard with quiz history

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- OpenAI / Gemini API
- YouTube Transcript API

---

## 📁 Project Structure

- `frontend/` → React client
- `backend/` → Express API
- `models/` → MongoDB schemas
- `controllers/` → Business logic
- `routes/` → API endpoints

---

## 🔐 Environment Variables

Create a `.env` file inside `backend/`

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_key
