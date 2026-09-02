import {
  LayoutDashboard,
  Upload,
  FileText,
  BookOpen,
  Trophy,
  LogOut,
  Download,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react"

import { Link, useNavigate } from "react-router-dom"
import styles from "./Notes.module.css"

function Notes() {
  const navigate = useNavigate()

  const takeaways = [
    "React Hooks were introduced in React 16.8",
    "Hooks allow using state and React features without classes",
    "useState is the most commonly used hook for adding state",
    "useState returns an array: [currentValue, setterFunction]",
    "useEffect handles side effects like data fetching",
    "useEffect combines componentDidMount, componentDidUpdate, and componentWillUnmount",
    "Custom hooks extract reusable component logic",
    "Custom hook names must start with 'use' prefix",
  ]

  const handleDownload = () => {
    alert("PDF download will be connected to the backend later.")
  }

  const handleQuiz = () => {
    navigate("/quiz")
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
            <Sparkles size={22} />
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

          <Link to="/transcript" className={styles.navItem}>
            <FileText size={19} />
            <span>Transcript</span>
          </Link>

          <Link
            to="/notes"
            className={`${styles.navItem} ${styles.active}`}
          >
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
        {/* HEADER */}
        <header className={styles.header}>
          <div className={styles.titleArea}>
            <h1>
              <Sparkles size={29} />
              AI-Generated Notes
            </h1>

            <p>React Hooks Deep Dive</p>
          </div>

          <div className={styles.headerActions}>
            <button
              className={styles.downloadButton}
              onClick={handleDownload}
            >
              <Download size={17} />
              <span>Download PDF</span>
            </button>

            <button
              className={styles.quizButton}
              onClick={handleQuiz}
            >
              <span>Take Quiz</span>
              <ArrowRight size={17} />
            </button>
          </div>
        </header>

        {/* SUMMARY */}
        <section className={styles.summaryCard}>
          <h2>
            <BookOpen size={20} />
            Summary
          </h2>

          <p>
            This tutorial provides a comprehensive introduction to React
            Hooks, covering the fundamental hooks (useState and useEffect)
            and demonstrating how to create custom hooks for reusable logic.
          </p>
        </section>

        {/* KEY TAKEAWAYS */}
        <section className={styles.takeawaysCard}>
          <div className={styles.sectionHeading}>
            <h2>Key Takeaways</h2>
            <p>The most important points from this video</p>
          </div>

          <div className={styles.takeawaysGrid}>
            {takeaways.map((item, index) => (
              <div className={styles.takeaway} key={index}>
                <CheckCircle2 size={19} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* NOTE SECTIONS */}
        <section className={styles.noteCard}>
          <h2>Understanding useState</h2>

          <p>
            The useState hook is the foundation of state management in
            functional components. When called, it returns an array
            containing the current state value and a function to update it.
            The initial state is passed as an argument to useState.
          </p>
        </section>

        <section className={styles.noteCard}>
          <h2>Working with useEffect</h2>

          <p>
            The useEffect hook enables side effects in functional components.
            It runs after every render by default, but you can control when
            it runs using the dependency array. An empty array means it only
            runs once on mount.
          </p>
        </section>

        <section className={styles.noteCard}>
          <h2>Creating Custom Hooks</h2>

          <p>
            Custom hooks are functions that use other hooks to encapsulate
            reusable logic. They must follow the naming convention of starting
            with 'use'. Examples include useLocalStorage, useFetch, and
            useDebounce.
          </p>
        </section>

        {/* BOTTOM ACTIONS */}
        <div className={styles.bottomActions}>
          <button
            className={styles.bottomDownload}
            onClick={handleDownload}
          >
            <Download size={17} />
            <span>Download PDF</span>
          </button>

          <button
            className={styles.bottomQuiz}
            onClick={handleQuiz}
          >
            <span>Ready for the Quiz?</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </main>
    </div>
  )
}

export default Notes