import { useEffect, useState } from "react"

import {
  LayoutDashboard,
  Upload,
  FileText,
  BookOpen,
  Trophy,
  LogOut,
  Copy,
  ArrowRight,
  Clock3,
} from "lucide-react"

import { Link, useNavigate } from "react-router-dom"
import styles from "./Transcript.module.css"

function Transcript() {
  const navigate = useNavigate()

  const [transcript, setTranscript] = useState("")
  const [youtubeUrl, setYoutubeUrl] = useState("")
  const [youtubeTitle, setYoutubeTitle] = useState("YouTube Video Transcript")
  const [segments, setSegments] = useState(0)

  useEffect(() => {
    const savedTranscript = localStorage.getItem("transcript")
    const savedUrl = localStorage.getItem("youtubeUrl")
    const savedTitle = localStorage.getItem("youtubeTitle")
    const savedSegments = localStorage.getItem("transcriptSegments")

    if (savedTranscript) {
      setTranscript(savedTranscript)
    }

    if (savedUrl) {
      setYoutubeUrl(savedUrl)
    }

    if (savedTitle) {
      setYoutubeTitle(savedTitle)
    }

    if (savedSegments) {
      setSegments(Number(savedSegments))
    }
  }, [])

  const handleGenerateNotes = () => {
    navigate("/notes")
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(transcript)
      alert("Transcript copied!")
    } catch {
      alert("Unable to copy transcript.")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")

    navigate("/login")
  }

  /*
    Split the transcript into readable sections.

    This does NOT change the transcript content.
    It only prevents one huge paragraph from
    breaking the UI.
  */
  const transcriptParts = transcript
    ? transcript.match(/.{1,500}(?:\s|$)/g) || [transcript]
    : []

  return (
    <div className={styles.page}>

      {/* ================= SIDEBAR ================= */}

      <aside className={styles.sidebar}>

        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <FileText size={22} />
          </div>

          <span>EasyQuiz</span>
        </Link>

        <nav className={styles.navigation}>

          <Link
            to="/dashboard"
            className={styles.navItem}
          >
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/upload"
            className={styles.navItem}
          >
            <Upload size={19} />
            <span>New Quiz</span>
          </Link>

          <Link
            to="/transcript"
            className={`${styles.navItem} ${styles.active}`}
          >
            <FileText size={19} />
            <span>Transcript</span>
          </Link>

          <Link
            to="/notes"
            className={styles.navItem}
          >
            <BookOpen size={19} />
            <span>Notes</span>
          </Link>

          <Link
            to="/quiz"
            className={styles.navItem}
          >
            <Trophy size={19} />
            <span>Quiz</span>
          </Link>

        </nav>

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

        {/* HEADER */}

        <header className={styles.header}>

          <div>

            <h1>
              Video Transcript
            </h1>

            <p>
              {youtubeUrl
                ? "Transcript extracted from your YouTube video"
                : "Your extracted video transcript"}
            </p>

          </div>


          <div className={styles.headerActions}>

            <button
              className={styles.copyButton}
              onClick={handleCopy}
              disabled={!transcript}
            >
              <Copy size={18} />
              <span>Copy</span>
            </button>


            <button
              className={styles.generateButton}
              onClick={handleGenerateNotes}
              disabled={!transcript}
            >
              <span>
                Generate Notes
              </span>

              <ArrowRight size={18} />
            </button>

          </div>

        </header>


        {/* ================= VIDEO INFO ================= */}

        <section className={styles.videoCard}>

          <div className={styles.videoIcon}>
            <FileText size={35} />
          </div>


          <div className={styles.videoInfo}>

            {/* ACTUAL YOUTUBE TITLE */}

            <h2>
              {youtubeTitle}
            </h2>


            <div className={styles.videoMeta}>

              <span>
                <Clock3 size={17} />
                Transcript extracted
              </span>

              <span>
                {segments > 0
                  ? `${segments} segments`
                  : `${transcriptParts.length} segments`}
              </span>

            </div>

          </div>

        </section>


        {/* ================= TRANSCRIPT ================= */}

        <section className={styles.transcriptCard}>

          <div className={styles.transcriptHeader}>

            <h2>
              Full Transcript
            </h2>

            <p>
              Transcript extracted from the YouTube video
            </p>

          </div>


          <div className={styles.transcriptList}>

            {transcript ? (

              transcriptParts.map((text, index) => (

                <div
                  className={styles.transcriptItem}
                  key={index}
                >

                  <button
                    className={styles.timestamp}
                    type="button"
                  >
                    {index + 1}
                  </button>


                  <p>
                    {text.trim()}
                  </p>

                </div>

              ))

            ) : (

              <div className={styles.transcriptItem}>

                <p>
                  No transcript found. Please go back to
                  New Quiz and extract a YouTube transcript.
                </p>

              </div>

            )}

          </div>

        </section>

      </main>

    </div>
  )
}

export default Transcript