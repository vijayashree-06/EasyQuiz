import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import {
  Brain,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react"

import styles from "./Login.module.css"

function Login() {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    setError("")
    setLoading(true)

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      )

      console.log(response.data)

      // Save JWT token
      localStorage.setItem("token", response.data.token)

      // Save user information
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      )

      navigate("/dashboard")
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Invalid email or password"
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.glow}></div>

      <div className={styles.container}>

        {/* LOGO */}
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <Brain size={25} />
          </div>

          <span>EasyQuiz</span>
        </Link>

        {/* LOGIN CARD */}
        <div className={styles.card}>

          <div className={styles.heading}>
            <h1>Welcome back</h1>

            <p>Sign in to continue learning</p>
          </div>

          {/* ERROR */}
          {error && (
            <div className={styles.error}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* EMAIL */}
            <div className={styles.field}>
              <label htmlFor="email">Email</label>

              <div className={styles.inputWrapper}>
                <Mail
                  size={21}
                  className={styles.inputIcon}
                />

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className={styles.field}>
              <label htmlFor="password">Password</label>

              <div className={styles.inputWrapper}>
                <Lock
                  size={21}
                  className={styles.inputIcon}
                />

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />

                <button
                  type="button"
                  className={styles.eyeButton}
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={21} />
                  ) : (
                    <Eye size={21} />
                  )}
                </button>
              </div>
            </div>

            {/* SIGN IN */}
            <button
              type="submit"
              className={styles.signInButton}
              disabled={loading}
            >
              <span>
                {loading ? "Signing In..." : "Sign In"}
              </span>

              {!loading && <ArrowRight size={20} />}
            </button>

          </form>

          {/* SIGN UP */}
          <p className={styles.signupText}>
            Don't have an account?{" "}
            <Link to="/signup">Sign up</Link>
          </p>
        </div>

        {/* TERMS */}
        <p className={styles.terms}>
          By continuing, you agree to our{" "}
          <span>Terms of Service</span> and{" "}
          <span>Privacy Policy</span>.
        </p>

      </div>
    </main>
  )
}

export default Login