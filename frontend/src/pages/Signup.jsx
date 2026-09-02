import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  Brain,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react"

import styles from "./Signup.module.css"

function Signup() {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    // Temporary frontend signup
    // Backend authentication will be connected later.

    if (name && email && password) {
      navigate("/dashboard")
    }
  }

  return (
    <main className={styles.page}>

      {/* Background glow */}
      <div className={styles.glow}></div>

      <div className={styles.container}>

        {/* EasyQuiz Logo */}
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <Brain size={25} />
          </div>

          <span>EasyQuiz</span>
        </Link>


        {/* Signup Card */}
        <div className={styles.card}>

          <div className={styles.heading}>
            <h1>Create your account</h1>

            <p>
              Start your learning journey today
            </p>
          </div>


          <form onSubmit={handleSubmit}>

            {/* NAME */}
            <div className={styles.field}>

              <label htmlFor="name">
                Name
              </label>

              <div className={styles.inputWrapper}>

                <User
                  size={21}
                  className={styles.inputIcon}
                />

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  required
                />

              </div>

            </div>


            {/* EMAIL */}
            <div className={styles.field}>

              <label htmlFor="email">
                Email
              </label>

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

              <label htmlFor="password">
                Password
              </label>

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


            {/* CREATE ACCOUNT */}
            <button
              type="submit"
              className={styles.createButton}
            >
              <span>
                Create Account
              </span>

              <ArrowRight size={20} />
            </button>

          </form>


          {/* SIGN IN */}
          <p className={styles.loginText}>
            Already have an account?{" "}
            <Link to="/login">
              Sign in
            </Link>
          </p>

        </div>


        {/* TERMS */}
        <p className={styles.terms}>
          By continuing, you agree to our{" "}
          <span>Terms of Service</span>{" "}
          and{" "}
          <span>Privacy Policy</span>.
        </p>

      </div>

    </main>
  )
}

export default Signup