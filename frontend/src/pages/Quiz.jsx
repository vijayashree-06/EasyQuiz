import { useEffect, useState } from "react"
import {
  LayoutDashboard,
  Upload,
  FileText,
  BookOpen,
  Trophy,
  LogOut,
  Clock3,
  ArrowLeft,
  ArrowRight,
} from "lucide-react"

import { Link, useNavigate } from "react-router-dom"
import styles from "./Quiz.module.css"

function Quiz() {
  const navigate = useNavigate()

  const questions = [
    {
      question: "When were React Hooks introduced?",
      options: ["React 15.0", "React 16.8", "React 17.0", "React 18.0"],
      answer: 1,
      explanation:
        "React Hooks were introduced in React 16.8. They allow functional components to use state and other React features without class components.",
    },
    {
      question: "Which hook is used to add state to a functional component?",
      options: ["useEffect", "useContext", "useState", "useMemo"],
      answer: 2,
      explanation:
        "useState is used to add and manage state inside functional React components.",
    },
    {
      question: "What does useState return?",
      options: [
        "An object",
        "An array containing state and setter function",
        "Only the state value",
        "A function",
      ],
      answer: 1,
      explanation:
        "useState returns an array containing the current state value and a function used to update it.",
    },
    {
      question: "When does useEffect run by default?",
      options: [
        "Before rendering",
        "Only once",
        "After every render",
        "Only after a click",
      ],
      answer: 2,
      explanation:
        "Without a dependency array, useEffect runs after every render.",
    },
    {
      question: "What does an empty dependency array mean?",
      options: [
        "Runs after every render",
        "Never runs",
        "Runs once after mount",
        "Runs continuously",
      ],
      answer: 2,
      explanation:
        "An empty dependency array causes the effect to run once after the component mounts.",
    },
    {
      question: "What is a custom hook?",
      options: [
        "A React class",
        "A reusable function using hooks",
        "A CSS component",
        "A browser API",
      ],
      answer: 1,
      explanation:
        "A custom hook is a reusable function that uses React Hooks to share stateful logic.",
    },
    {
      question: "How should a custom hook name begin?",
      options: ["get", "hook", "use", "react"],
      answer: 2,
      explanation:
        "Custom Hooks should start with the word 'use'.",
    },
    {
      question: "Which hook is commonly used for side effects?",
      options: ["useEffect", "useState", "useMemo", "useRef"],
      answer: 0,
      explanation:
        "useEffect is used for side effects such as data fetching, subscriptions, and timers.",
    },
    {
      question: "Which is a valid custom hook name?",
      options: ["fetchData", "ReactFetch", "useFetch", "FetchHook"],
      answer: 2,
      explanation:
        "useFetch follows React's custom Hook naming convention.",
    },
    {
      question: "What is a major benefit of custom hooks?",
      options: [
        "They replace HTML",
        "They allow reusable logic",
        "They remove React",
        "They create CSS automatically",
      ],
      answer: 1,
      explanation:
        "Custom Hooks make it possible to reuse stateful logic across different React components.",
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [timeLeft, setTimeLeft] = useState(200)

  useEffect(() => {
    if (timeLeft <= 0) {
      finishQuiz()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  function selectAnswer(index) {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: index,
    }))
  }

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    }
  }

  function previousQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  function finishQuiz() {
    let score = 0

    questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        score++
      }
    })

    navigate("/score", {
      state: {
        score,
        total: questions.length,
        questions,
        answers,
      },
    })
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remaining = seconds % 60

    return `${minutes}:${String(remaining).padStart(2, "0")}`
  }

  const question = questions[currentQuestion]
  const selectedAnswer = answers[currentQuestion]

  const progress =
    ((currentQuestion + 1) / questions.length) * 100

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

          <Link
            to="/quiz"
            className={`${styles.navItem} ${styles.active}`}
          >
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
        <div className={styles.quizContainer}>

          {/* TOP */}

          <div className={styles.topBar}>
            <div className={styles.topLeft}>
              <div className={styles.timer}>
                <Clock3 size={20} />
                <span>{formatTime(timeLeft)}</span>
              </div>

              <span className={styles.questionNumber}>
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>

            <button
              className={styles.finishButton}
              onClick={finishQuiz}
            >
              Finish Quiz
            </button>
          </div>

          {/* PROGRESS */}

          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* QUESTION */}

          <section className={styles.questionCard}>
            <h1>{question.question}</h1>

            <p className={styles.instruction}>
              Select the best answer
            </p>

            <div className={styles.options}>
              {question.options.map((option, index) => {
                const selected = selectedAnswer === index

                return (
                  <button
                    key={index}
                    className={`${styles.option} ${
                      selected ? styles.selected : ""
                    }`}
                    onClick={() => selectAnswer(index)}
                  >
                    <span className={styles.optionLetter}>
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span className={styles.optionText}>
                      {option}
                    </span>
                  </button>
                )
              })}
            </div>
          </section>

          {/* BOTTOM NAVIGATION */}

          <div className={styles.bottomNavigation}>

            <button
              className={styles.previousButton}
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft size={17} />
              <span>Previous</span>
            </button>

            <div className={styles.dots}>
              {questions.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${
                    index === currentQuestion
                      ? styles.activeDot
                      : ""
                  } ${
                    answers[index] !== undefined
                      ? styles.answeredDot
                      : ""
                  }`}
                  onClick={() => setCurrentQuestion(index)}
                  aria-label={`Go to question ${index + 1}`}
                />
              ))}
            </div>

            {currentQuestion === questions.length - 1 ? (
              <button
                className={styles.nextButton}
                onClick={finishQuiz}
              >
                <span>Finish</span>
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                className={styles.nextButton}
                onClick={nextQuestion}
                disabled={selectedAnswer === undefined}
              >
                <span>Next</span>
                <ArrowRight size={18} />
              </button>
            )}
          </div>

        </div>
      </main>
    </div>
  )
}

export default Quiz