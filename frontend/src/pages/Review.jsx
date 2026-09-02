import {
  LayoutDashboard,
  Upload,
  FileText,
  BookOpen,
  Trophy,
  LogOut,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ArrowLeft,
} from "lucide-react"

import { Link, useLocation, useNavigate } from "react-router-dom"
import styles from "./Review.module.css"

function Review() {
  const location = useLocation()
  const navigate = useNavigate()

  const questions = location.state?.questions || []
  const answers = location.state?.answers || {}

  // If review data is missing
  if (!questions.length) {
    return (
      <div className={styles.page}>
        <main className={styles.empty}>
          <h1>No quiz review available</h1>

          <p>
            Please complete a quiz first to review your answers.
          </p>

          <button
            className={styles.backButton}
            onClick={() => navigate("/quiz")}
          >
            <ArrowLeft size={17} />
            Back to Quiz
          </button>
        </main>
      </div>
    )
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
        <div className={styles.header}>
          <div>
            <p className={styles.label}>QUIZ REVIEW</p>

            <h1>Review Your Answers</h1>

            <p className={styles.subtitle}>
              See your answers, the correct answers, and why they are correct.
            </p>
          </div>

          <button
            className={styles.backButton}
            onClick={() => navigate("/score")}
          >
            <ArrowLeft size={17} />
            Back to Score
          </button>
        </div>

        {/* QUESTIONS */}

        <div className={styles.questions}>
          {questions.map((question, questionIndex) => {
            const selectedAnswer = answers[questionIndex]

            const isCorrect =
              selectedAnswer === question.answer

            return (
              <section
                className={`${styles.questionCard} ${
                  isCorrect
                    ? styles.correctCard
                    : styles.wrongCard
                }`}
                key={questionIndex}
              >
                {/* QUESTION HEADER */}

                <div className={styles.questionHeader}>
                  <span className={styles.questionNumber}>
                    Question {questionIndex + 1}
                  </span>

                  {isCorrect ? (
                    <div className={styles.correctBadge}>
                      <CheckCircle2 size={16} />
                      Correct
                    </div>
                  ) : (
                    <div className={styles.wrongBadge}>
                      <XCircle size={16} />
                      Incorrect
                    </div>
                  )}
                </div>

                {/* QUESTION */}

                <h2>{question.question}</h2>

                {/* ANSWERS */}

                <div className={styles.answers}>
                  {question.options.map((option, optionIndex) => {
                    const isSelected =
                      selectedAnswer === optionIndex

                    const isAnswer =
                      question.answer === optionIndex

                    let answerClass = styles.answer

                    if (isAnswer) {
                      answerClass += ` ${styles.correctAnswer}`
                    }

                    if (
                      isSelected &&
                      !isAnswer
                    ) {
                      answerClass += ` ${styles.wrongAnswer}`
                    }

                    return (
                      <div
                        key={optionIndex}
                        className={answerClass}
                      >
                        <span className={styles.letter}>
                          {String.fromCharCode(
                            65 + optionIndex
                          )}
                        </span>

                        <span className={styles.answerText}>
                          {option}
                        </span>

                        <div className={styles.answerStatus}>
                          {isAnswer && (
                            <span className={styles.correctText}>
                              <CheckCircle2 size={16} />
                              Correct answer
                            </span>
                          )}

                          {isSelected && !isAnswer && (
                            <span className={styles.wrongText}>
                              <XCircle size={16} />
                              Your answer
                            </span>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* EXPLANATION */}

                <div className={styles.explanation}>
                  <div className={styles.explanationIcon}>
                    <Lightbulb size={18} />
                  </div>

                  <div>
                    <h3>Why is this correct?</h3>

                    <p>
                      {question.explanation}
                    </p>
                  </div>
                </div>

                {/* USER ANSWER SUMMARY */}

                <div className={styles.summary}>
                  <div>
                    <span>Your answer</span>

                    <strong
                      className={
                        isCorrect
                          ? styles.summaryCorrect
                          : styles.summaryWrong
                      }
                    >
                      {selectedAnswer !== undefined
                        ? `${String.fromCharCode(
                            65 + selectedAnswer
                          )}. ${
                            question.options[
                              selectedAnswer
                            ]
                          }`
                        : "Not answered"}
                    </strong>
                  </div>

                  <div>
                    <span>Correct answer</span>

                    <strong className={styles.summaryCorrect}>
                      {String.fromCharCode(
                        65 + question.answer
                      )}
                      .{" "}
                      {question.options[question.answer]}
                    </strong>
                  </div>
                </div>
              </section>
            )
          })}
        </div>

        <div className={styles.bottomAction}>
          <button
            className={styles.dashboardButton}
            onClick={() => navigate("/dashboard")}
          >
            Back to Dashboard
          </button>

          <button
            className={styles.retakeButton}
            onClick={() => navigate("/quiz")}
          >
            Retake Quiz
          </button>
        </div>
      </main>
    </div>
  )
}

export default Review