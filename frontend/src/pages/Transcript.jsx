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

  const transcript = [
    {
      time: "0:00",
      text: "Welcome to this comprehensive tutorial on React Hooks. Today we'll cover everything you need to know about useState, useEffect, and custom hooks.",
    },
    {
      time: "0:15",
      text: "React Hooks were introduced in React 16.8, and they allow you to use state and other React features without writing a class.",
    },
    {
      time: "0:32",
      text: "The useState hook is the most commonly used hook. It allows you to add state to functional components.",
    },
    {
      time: "0:48",
      text: "Let me show you a simple example. When you call useState, you pass the initial state value.",
    },
    {
      time: "1:05",
      text: "The hook returns an array with two elements: the current state value and a function to update it.",
    },
    {
      time: "1:24",
      text: "Next, let's look at useEffect. This hook lets you perform side effects in your functional components.",
    },
    {
      time: "1:42",
      text: "useEffect runs after the component renders. You can control when it runs using the dependency array.",
    },
    {
      time: "2:00",
      text: "You can also create your own custom hooks by combining existing hooks to share reusable logic between components.",
    },
    {
      time: "2:18",
      text: "Custom hooks are simply JavaScript functions whose names start with the word use.",
    },
    {
      time: "2:30",
      text: "That brings us to the end of this React Hooks tutorial. Let's now generate some useful notes from this transcript.",
    },
  ]

  const handleGenerateNotes = () => {
    navigate("/notes")
  }

  const handleCopy = async () => {
    const text = transcript
      .map((item) => `${item.time}  ${item.text}`)
      .join("\n\n")

    try {
      await navigator.clipboard.writeText(text)
      alert("Transcript copied!")
    } catch {
      alert("Unable to copy transcript.")
    }
  }

  const handleLogout = () => {
    navigate("/login")
  }

  return (
    <div className={styles.page}>
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <FileText size={22} />
          </div>
          <span>EasyQuiz</span>
        </Link>

        <nav className={styles.navigation}>
          <Link to="/dashboard" className={styles.navItem}>
            <LayoutDashboard size={19} />
            <span>Dashboard</span>
          </Link>

          <Link to="/upload" className={styles.navItem}>
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

          <Link to="/notes" className={styles.navItem}>
            <BookOpen size={19} />
            <span>Notes</span>
          </Link>

          <Link to="/quiz" className={styles.navItem}>
            <Trophy size={19} />
            <span>Quiz</span>
          </Link>
        </nav>

        <button className={styles.logout} onClick={handleLogout}>
          <LogOut size={19} />
          <span>Logout</span>
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className={styles.main}>
        <header className={styles.header}>
          <div>
            <h1>Video Transcript</h1>
            <p>React Hooks Deep Dive Tutorial</p>
          </div>

          <div className={styles.headerActions}>
            <button className={styles.copyButton} onClick={handleCopy}>
              <Copy size={18} />
              <span>Copy</span>
            </button>

            <button
              className={styles.generateButton}
              onClick={handleGenerateNotes}
            >
              <span>Generate Notes</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </header>

        {/* VIDEO INFO */}
        <section className={styles.videoCard}>
          <div className={styles.videoIcon}>
            <FileText size={35} />
          </div>

          <div className={styles.videoInfo}>
            <h2>React Hooks Deep Dive</h2>

            <div className={styles.videoMeta}>
              <span>
                <Clock3 size={17} />
                2:30 duration
              </span>

              <span>10 segments</span>
            </div>
          </div>
        </section>

        {/* TRANSCRIPT */}
        <section className={styles.transcriptCard}>
          <div className={styles.transcriptHeader}>
            <h2>Full Transcript</h2>
            <p>Click on any timestamp to jump to that section</p>
          </div>

          <div className={styles.transcriptList}>
            {transcript.map((item, index) => (
              <div className={styles.transcriptItem} key={index}>
                <button className={styles.timestamp}>
                  {item.time}
                </button>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Transcript