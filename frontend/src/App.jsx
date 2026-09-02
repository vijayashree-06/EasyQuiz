import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom"

import Navbar from "./components/Navbar"

import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Upload from "./pages/Upload"
import Transcript from "./pages/Transcript"
import Notes from "./pages/Notes"
import Quiz from "./pages/Quiz"
import Score from "./pages/Score"
import Review from "./pages/Review"

function App() {
  const location = useLocation()

  // Navbar is shown only on the landing page.
  // Dashboard and learning pages have their own sidebar.
  const showNavbar = location.pathname === "/"

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        {/* Landing */}
        <Route
          path="/"
          element={<Landing />}
        />

        {/* Authentication */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Learning Flow */}
        <Route
          path="/upload"
          element={<Upload />}
        />

        <Route
          path="/transcript"
          element={<Transcript />}
        />

        <Route
          path="/notes"
          element={<Notes />}
        />

        <Route
          path="/quiz"
          element={<Quiz />}
        />

        {/* Quiz Result */}
        <Route
          path="/score"
          element={<Score />}
        />

        {/* Answer Review */}
        <Route
          path="/review"
          element={<Review />}
        />

        {/* Fallback */}
        <Route
          path="*"
          element={<Landing />}
        />
      </Routes>
    </>
  )
}

export default App