import React, { useState, useEffect, useRef } from "react";
import l from "../components/assets/images/l.jpg";
import logo from "../components/assets/images/logo.jpg";
import q from "../components/assets/images/q.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "./Register";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        "Please enter a valid password. Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long."
      );
    } else {
      // handle form submission
    }
  };

  const logoRef = useRef(null);
  const qRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    const q = qRef.current;

    const toggleImages = () => {
      logo.classList.toggle("show");
      logo.classList.toggle("hide");
      q.classList.toggle("show");
      q.classList.toggle("hide");
    };

    const intervalId = setInterval(toggleImages, 3000);
    toggleImages(); // Toggle images initially

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
            <div className="featured-image mb-3">
              <img
                ref={logoRef}
                src={logo}
                className="img-fluid hide-on-mobile show"
                style={{ width: "250px", height: "auto",transition: "opacity 4s ease-in-out" }}
                alt="Your Logo"
              />
              <img
                ref={qRef}
                src={q}
                className="img-fluid hide-on-mobile hide"
                style={{ width: "250px", height: "auto" ,transition: "opacity 3s ease-in-out"}}
                alt="Your Logo"
              />
            </div>
            {/* <p className="text fs-2 hide-on-mobile" style={{ fontSize: '2rem', fontWeight: 600, color: '#800080', fontFamily: '"Courier New", Courier, monospace' }}>
              Login with confidence
            </p> */}
          </div>
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <img
                src={logo}
                className="img-fluid hide-on-pc"
                style={{ width: "250px", height: "auto" }}
                alt="Your Logo"
              />

              <div className="header-text mb-4">
                <h2 style={{ color: "rgb(128, 0, 128)" }}>Hello,Again</h2>
                <p style={{ color: "rgb(128, 0, 128)" }}>
                  We are happy to have you back.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailRegex.test(e.target.value)) {
                        setEmailError("");
                      }
                    }}
                    required
                  />
                </div>
                {emailError && <p className="text-danger">{emailError}</p>}

                <div className="input-group mb-1">
                  <input
                    type="password"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (passwordRegex.test(e.target.value)) {
                        setPasswordError("");
                      }
                    }}
                    required
                  />
                </div>
                {passwordError && (
                  <p className="text-danger">{passwordError}</p>
                )}

                <div className="input-group mb-5 d-flex justify-content-between">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="formCheck"
                    />
                    <label
                      htmlFor="formCheck"
                      className="form-check-label text-secondary"
                    >
                      <small>Remember Me</small>
                    </label>
                  </div>
                  <div className="forgot">
                    <small>
                      <a href="#">Forgot Password?</a>
                    </small>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <button className="btn btn-lg btn-primary w-100 fs-6">
                    Login
                  </button>
                </div>
              </form>

              <div className="input-group mb-3">
                {/* <button className="btn btn-lg btn-light w-100 fs-6">
                  <img
                    src="images/google.png"
                    style={{ width: 20 }}
                    className="me-2"
                  />
                  <small>Sign In with Google</small>
                </button> */}
              </div>

              <div className="row">

                <small>Don't have account? </small>
              </div>
            </div>
          </div>
          <div class="flex" style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <small
              className="text text-wrap text-center hide-on-mobile"
              style={{
                fontFamily: '"Courier New", Courier, monospace',
                fontWeight: 900,
                color: "rgb(128, 0, 128)",
                borderBottom: "2px solid purple",
                fontSize: "1rem",
                marginRight: "10px",
              }}
            >
              POWERED BY
            </small>{" "}
            <img
              src={l}
              style={{ width: "90px", height: "auto" }}
              alt="Your Log"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
