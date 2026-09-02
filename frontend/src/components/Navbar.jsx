import { Link } from "react-router-dom"
import { Moon, LogIn, UserPlus, Sparkles } from "lucide-react"
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <Link to="/" className={styles.logo}>
        <span className={styles.logoIcon}>
          <Sparkles size={16} />
        </span>

        <span className={styles.logoText}>
          easy<span>Quiz</span>
        </span>
      </Link>

      {/* Navigation Links */}
      <div className={styles.navLinks}>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>

        <Link to="/dashboard" className={styles.navLink}>
          Dashboard
        </Link>

        <Link to="/upload" className={styles.navLink}>
          Create Quiz
        </Link>
      </div>

      {/* Right Actions */}
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.themeButton}
          aria-label="Toggle theme"
        >
          <Moon size={19} />
        </button>

        <Link to="/login" className={styles.loginButton}>
          <LogIn size={17} />
          <span>Sign In</span>
        </Link>

        <Link to="/signup" className={styles.signupButton}>
          <UserPlus size={17} />
          <span>Get Started</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar