import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom"

import Navbar from "./components/Navbar"
import ProtectedRoute from "./components/ProtectedRoute"

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

        {/* ==================== */}
        {/* Landing Page */}
        {/* ==================== */}

        <Route
          path="/"
          element={<Landing />}
        />

        {/* ==================== */}
        {/* Authentication */}
        {/* ==================== */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* ==================== */}
        {/* Protected Pages */}
        {/* ==================== */}

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Upload / Create Quiz */}
        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <Upload />
            </ProtectedRoute>
          }
        />

        {/* Transcript */}
        <Route
          path="/transcript"
          element={
            <ProtectedRoute>
              <Transcript />
            </ProtectedRoute>
          }
        />

        {/* Notes */}
        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <Notes />
            </ProtectedRoute>
          }
        />

        {/* Quiz */}
        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />

        {/* Score */}
        <Route
          path="/score"
          element={
            <ProtectedRoute>
              <Score />
            </ProtectedRoute>
          }
        />

        {/* Review Answers */}
        <Route
          path="/review"
          element={
            <ProtectedRoute>
              <Review />
            </ProtectedRoute>
          }
        />

        {/* ==================== */}
        {/* Fallback */}
        {/* ==================== */}

        <Route
          path="*"
          element={<Landing />}
        />

      </Routes>
    </>
  )
}

export default App