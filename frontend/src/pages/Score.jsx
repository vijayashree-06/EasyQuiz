import {
  LayoutDashboard,
  Upload,
  FileText,
  BookOpen,
  Trophy,
  LogOut,
  CheckCircle2,
  XCircle,
  Target,
  RotateCcw,
  ArrowRight,
} from "lucide-react"

import { Link, useLocation, useNavigate } from "react-router-dom"
import styles from "./Score.module.css"

function Score() {
  const navigate = useNavigate()
  const location = useLocation()

  const score = location.state?.score ?? 0
  const total = location.state?.total ?? 10

  const questions = location.state?.questions ?? []
  const answers = location.state?.answers ?? {}

  const percentage =
    total > 0 ? Math.round((score / total) * 100) : 0

  const incorrect = total - score

  let grade = "D"
  let message = "Don't give up. Review your answers and try again!"

  if (percentage >= 90) {
    grade = "A+"
    message = "Excellent! You've mastered this topic."
  } else if (percentage >= 80) {
    grade = "A"
    message = "Great job! You have a strong understanding."
  } else if (percentage >= 70) {
    grade = "B"
    message = "Good work! A little more practice will help."
  } else if (percentage >= 50) {
    grade = "C"
    message = "You're getting there. Keep practicing!"
  }

  function reviewAnswers() {
    navigate("/review", {
      state: {
        questions,
        answers,
        score,
        total,
      },
    })
  }

  function retakeQuiz() {
    navigate("/quiz")
  }

  return (
    <div className={styles.page}>
      {/* SIDEBAR */}

      <aside className={styles.sidebar}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <Trophy size={21} />
          </div>

          <span>EasyQuiz</span>
        </Link>

        <nav className={styles.navigation}>
          <Link to="/dashboard" className={styles.navItem}>
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </Link>

          <Link to="/upload" className={styles.navItem}>
            <Upload size={18} />
            <span>New Quiz</span>
          </Link>

          <Link to="/transcript" className={styles.navItem}>
            <FileText size={18} />
            <span>Transcript</span>
          </Link>

          <Link to="/notes" className={styles.navItem}>
            <BookOpen size={18} />
            <span>Notes</span>
          </Link>

          <Link to="/quiz" className={styles.navItem}>
            <Trophy size={18} />
            <span>Quiz</span>
          </Link>
        </nav>

        <button
          className={styles.logout}
          onClick={() => navigate("/login")}
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </aside>

      {/* MAIN */}

      <main className={styles.main}>
        <section className={styles.resultCard}>
          <div className={styles.successIcon}>
            <CheckCircle2 size={32} />
          </div>

          <p className={styles.completed}>
            QUIZ COMPLETED
          </p>

          <h1>Great job!</h1>

          <p className={styles.subtitle}>
            Here's how you performed on your quiz
          </p>

          {/* SCORE CIRCLE */}

          <div
            className={styles.scoreCircle}
            style={{
              "--score": percentage,
            }}
          >
            <div className={styles.scoreInner}>
              <strong>{percentage}%</strong>
              <span>Score</span>
            </div>
          </div>

          <div className={styles.scoreText}>
            <strong>
              {score} <span>/ {total}</span>
            </strong>

            <div className={styles.grade}>
              {grade}
            </div>
          </div>

          <p className={styles.message}>
            {message}
          </p>

          {/* STATS */}

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div
                className={`${styles.statIcon} ${styles.correctIcon}`}
              >
                <CheckCircle2 size={20} />
              </div>

              <strong>{score}</strong>

              <span>Correct</span>
            </div>

            <div className={styles.stat}>
              <div
                className={`${styles.statIcon} ${styles.incorrectIcon}`}
              >
                <XCircle size={20} />
              </div>

              <strong>{incorrect}</strong>

              <span>Incorrect</span>
            </div>

            <div className={styles.stat}>
              <div
                className={`${styles.statIcon} ${styles.accuracyIcon}`}
              >
                <Target size={20} />
              </div>

              <strong>{percentage}%</strong>

              <span>Accuracy</span>
            </div>
          </div>

          {/* ACTIONS */}

          <div className={styles.actions}>
            <button
              className={styles.reviewButton}
              onClick={reviewAnswers}
            >
              Review Answers
              <ArrowRight size={17} />
            </button>

            <button
              className={styles.retakeButton}
              onClick={retakeQuiz}
            >
              <RotateCcw size={17} />
              Retake Quiz
            </button>
          </div>

          <button
            className={styles.dashboardButton}
            onClick={() => navigate("/dashboard")}
          >
            Back to Dashboard
          </button>
        </section>
      </main>
    </div>
  )
}

export default Score