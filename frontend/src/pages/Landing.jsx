import { Link } from "react-router-dom"
import {
  Play,
  FileText,
  Brain,
  Trophy,
  Download,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react"

import styles from "./Landing.module.css"

function Landing() {
  const steps = [
    {
      icon: Play,
      step: "Step 1",
      title: "Paste YouTube Link",
      description:
        "Simply paste any YouTube video URL and we'll extract the transcript automatically.",
    },
    {
      icon: FileText,
      step: "Step 2",
      title: "Get Transcript",
      description:
        "View the complete video transcript with timestamps for easy navigation.",
    },
    {
      icon: Brain,
      step: "Step 3",
      title: "AI-Generated Notes",
      description:
        "Our AI creates comprehensive notes and summaries from the video content.",
    },
    {
      icon: Trophy,
      step: "Step 4",
      title: "Take the Quiz",
      description:
        "Test your knowledge with a 10-question MCQ quiz with a timer.",
    },
    {
      icon: Download,
      step: "Step 5",
      title: "Download PDF",
      description:
        "Export your notes as a beautifully formatted PDF for offline study.",
    },
    {
      icon: Users,
      step: "Step 6",
      title: "Track Progress",
      description:
        "View your quiz history and track your learning progress over time.",
    },
  ]

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          Powered by AI
        </div>

        <h1>
          Learn from <span>YouTube</span>
          <br />
          Like Never Before
        </h1>

        <p className={styles.heroDescription}>
          Transform any YouTube video into interactive quizzes and comprehensive
          <br className={styles.desktopBreak} />
          notes. Boost your learning with AI-powered study tools.
        </p>

        <div className={styles.heroButtons}>
          <Link to="/upload" className={styles.primaryButton}>
            Start Learning Free
            <ArrowRight size={16} />
          </Link>

          <Link to="/login" className={styles.secondaryButton}>
            Sign In
          </Link>
        </div>

        {/* VIDEO INPUT CARD */}
        <div className={styles.videoCard}>
          <div className={styles.videoInner}>
            <div className={styles.playButton}>
              <Play size={29} fill="none" />
            </div>

            <p>Paste a YouTube link to get started</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.howSection}>
        <div className={styles.sectionHeader}>
          <h2>
            How It <span>Works</span>
          </h2>

          <p>
            Six simple steps to supercharge your learning from any YouTube video
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((item) => {
            const Icon = item.icon

            return (
              <div className={styles.stepCard} key={item.step}>
                <div className={styles.iconBox}>
                  <Icon size={20} />
                </div>

                <div className={styles.stepLabel}>{item.step}</div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h2>
            Ready to <span>Learn Smarter?</span>
          </h2>

          <p>
            Join thousands of learners who are transforming their YouTube
            watching
            <br className={styles.desktopBreak} />
            into active learning.
          </p>

          <Link to="/signup" className={styles.ctaButton}>
            Get Started for Free
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <div className={styles.footerLogoIcon}>
            <Sparkles size={13} />
          </div>

          <span>EasyQuiz</span>
        </div>

        <p>© 2024 EasyQuiz. Learn smarter, not harder.</p>
      </footer>
    </main>
  )
}

export default Landing