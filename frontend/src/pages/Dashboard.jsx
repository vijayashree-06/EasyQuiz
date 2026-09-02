import {
  LayoutDashboard,
  Plus,
  FileText,
  BookOpen,
  Trophy,
  LogOut,
  Upload,
  Target,
  Clock3,
  TrendingUp,
} from "lucide-react"

import { Link, useNavigate } from "react-router-dom"

import styles from "./Dashboard.module.css"

function Dashboard() {
  const navigate = useNavigate()

  const recentQuizzes = [
    {
      title: "React Hooks Deep Dive",
      date: "2024-01-15",
      score: "8/10",
      percentage: "80%",
      grade: "A",
    },
    {
      title: "TypeScript Fundamentals",
      date: "2024-01-14",
      score: "9/10",
      percentage: "90%",
      grade: "A",
    },
    {
      title: "Next.js 14 Features",
      date: "2024-01-13",
      score: "7/10",
      percentage: "70%",
      grade: "B",
    },
  ]

  // Logout
  function handleLogout() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")

    navigate("/login")
  }

  return (
    <div className={styles.dashboard}>

      {/* =====================================
          SIDEBAR
         ===================================== */}

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

          <Link
            to="/dashboard"
            className={`${styles.navItem} ${styles.active}`}
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
            className={styles.navItem}
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

        {/* Logout */}

        <button
          className={styles.logout}
          onClick={handleLogout}
        >
          <LogOut size={19} />
          <span>Logout</span>
        </button>

      </aside>

      {/* =====================================
          MAIN CONTENT
         ===================================== */}

      <main className={styles.main}>

        {/* Header */}

        <header className={styles.header}>

          <div>
            <h1>Dashboard</h1>

            <p>
              Welcome back! Ready to learn something new?
            </p>
          </div>

          <Link
            to="/upload"
            className={styles.newQuizButton}
          >
            <Plus size={20} />
            <span>New Quiz</span>
          </Link>

        </header>

        {/* =====================================
            STATISTICS
           ===================================== */}

        <section className={styles.statsGrid}>

          {/* Quizzes */}

          <div className={styles.statCard}>

            <div className={`${styles.statIcon} ${styles.purple}`}>
              <Trophy size={24} />
            </div>

            <div className={styles.statNumber}>
              12
            </div>

            <div className={styles.statLabel}>
              Quizzes Taken
            </div>

          </div>

          {/* Average */}

          <div className={styles.statCard}>

            <div className={`${styles.statIcon} ${styles.green}`}>
              <Target size={24} />
            </div>

            <div className={styles.statNumber}>
              82%
            </div>

            <div className={styles.statLabel}>
              Average Score
            </div>

          </div>

          {/* Study Time */}

          <div className={styles.statCard}>

            <div className={`${styles.statIcon} ${styles.blue}`}>
              <Clock3 size={24} />
            </div>

            <div className={styles.statNumber}>
              5.2h
            </div>

            <div className={styles.statLabel}>
              Study Time
            </div>

          </div>

          {/* Notes */}

          <div className={`${styles.statCard} ${styles.notesCard}`}>

            <div className={`${styles.statIcon} ${styles.orange}`}>
              <BookOpen size={24} />
            </div>

            <div className={styles.statNumber}>
              8
            </div>

            <div className={styles.statLabel}>
              Notes Created
            </div>

          </div>

        </section>

        {/* =====================================
            RECENT QUIZZES
           ===================================== */}

        <section className={styles.recentSection}>

          <div className={styles.sectionHeader}>

            <div className={styles.sectionTitle}>

              <TrendingUp size={23} />

              <div>
                <h2>Recent Quizzes</h2>

                <p>
                  Your latest quiz attempts
                </p>
              </div>

            </div>

          </div>

          {/* Quiz List */}

          <div className={styles.quizList}>

            {recentQuizzes.map((quiz, index) => (

              <div
                className={styles.quizItem}
                key={index}
              >

                <div className={styles.quizInfo}>

                  <h3>
                    {quiz.title}
                  </h3>

                  <p>
                    {quiz.date}
                  </p>

                </div>

                <div className={styles.quizResult}>

                  <div className={styles.scoreInfo}>

                    <strong>
                      {quiz.score}
                    </strong>

                    <span>
                      {quiz.percentage}
                    </span>

                  </div>

                  <div
                    className={`${styles.grade} ${
                      quiz.grade === "A"
                        ? styles.gradeA
                        : styles.gradeB
                    }`}
                  >
                    {quiz.grade}
                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* =====================================
            BOTTOM CTA
           ===================================== */}

        <section className={styles.bottomCard}>

          <div>

            <h2>
              Ready to learn something new?
            </h2>

            <p>
              Paste a YouTube video and let EasyQuiz
              create your learning material.
            </p>

          </div>

          <Link
            to="/upload"
            className={styles.bottomButton}
          >
            <Upload size={18} />
            Create Quiz
          </Link>

        </section>

      </main>

    </div>
  )
}

export default Dashboard