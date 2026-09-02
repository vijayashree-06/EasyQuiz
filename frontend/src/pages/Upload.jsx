import {
  LayoutDashboard,
  Upload as UploadIcon,
  FileText,
  BookOpen,
  Trophy,
  LogOut,
  Play,
  Link as LinkIcon,
  ArrowRight,
} from "lucide-react"

import { Link, useNavigate } from "react-router-dom"
import styles from "./Upload.module.css"

function Upload() {
  const navigate = useNavigate()

  // Handle YouTube link submission
  const handleSubmit = (e) => {
    e.preventDefault()

    // For now, go to transcript page.
    // Later we will send the YouTube URL to the backend.
    navigate("/transcript")
  }

  // Handle logout
  const handleLogout = () => {
    navigate("/login")
  }

  return (
    <div className={styles.page}>

      {/* ================= SIDEBAR ================= */}
      <aside className={styles.sidebar}>

        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <BookOpen size={23} />
          </div>

          <span>EasyQuiz</span>
        </Link>


        {/* Navigation */}
        <nav className={styles.navigation}>

          {/* Dashboard */}
          <Link
            to="/dashboard"
            className={styles.navItem}
          >
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </Link>


          {/* New Quiz */}
          <Link
            to="/upload"
            className={`${styles.navItem} ${styles.active}`}
          >
            <UploadIcon size={19} />
            <span>New Quiz</span>
          </Link>


          {/* Transcript */}
          <Link
            to="/transcript"
            className={styles.navItem}
          >
            <FileText size={19} />
            <span>Transcript</span>
          </Link>


          {/* Notes */}
          <Link
            to="/notes"
            className={styles.navItem}
          >
            <BookOpen size={19} />
            <span>Notes</span>
          </Link>


          {/* Quiz */}
          <Link
            to="/quiz"
            className={styles.navItem}
          >
            <Trophy size={19} />
            <span>Quiz</span>
          </Link>

        </nav>


        {/* Logout */}
        <button
          className={styles.logout}
          onClick={handleLogout}
        >
          <LogOut size={19} />
          <span>Logout</span>
        </button>

      </aside>


      {/* ================= MAIN CONTENT ================= */}
      <main className={styles.main}>

        {/* Upload Card */}
        <section className={styles.uploadCard}>

          {/* YouTube / Video Icon */}
          <div className={styles.youtubeIcon}>
            <Play size={34} />
          </div>


          {/* Heading */}
          <h1>Paste YouTube Link</h1>


          {/* Description */}
          <p className={styles.subtitle}>
            Enter any YouTube video URL to extract transcript
            and generate study materials
          </p>


          {/* ================= FORM ================= */}
          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >

            {/* URL Input */}
            <div className={styles.inputWrapper}>

              <LinkIcon size={21} />

              <input
                type="url"
                placeholder="https://youtube.com/watch?v=..."
                required
              />

            </div>


            {/* Submit Button */}
            <button
              type="submit"
              className={styles.extractButton}
            >
              <span>Extract Transcript</span>

              <ArrowRight size={21} />
            </button>

          </form>


          {/* ================= SUPPORTED VIDEOS ================= */}
          <div className={styles.supported}>

            <h2>Supported videos</h2>

            <ul>
              <li>
                Public YouTube videos with captions enabled
              </li>

              <li>
                Any language supported by YouTube
              </li>

              <li>
                Videos up to 3 hours in length
              </li>
            </ul>

          </div>

        </section>

      </main>

    </div>
  )
}

export default Upload