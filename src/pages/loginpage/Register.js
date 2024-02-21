import React, { useState } from 'react'
import logo from '../components/assets/images/logo.jpg'



function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.')
    } else if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.')
      setConfirmPasswordError('Passwords do not match.')
    } else if (!passwordRegex.test(password)) {
      setPasswordError('Weak password. Needs uppercase, lowercase, number, 8+ characters')
      setConfirmPasswordError(' Weak password. Needs uppercase, lowercase, number, 8+ characters')
    } else {
      // handle form submission
    }
  }

  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        {/*--------------------- Register Container ------------------------*/}
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
        <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <img src={logo} className="img-fluid hide-on-pc" style={{ width: '250px', height: 'auto' }} alt="Your Logo" />

              <div className="header-text mb-4">
                <h2 style={{ color: 'rgb(128, 0, 128)'}}>Welcome,</h2>
                <p style={{ color: 'rgb(128, 0, 128)'}}>Create your account now.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (emailRegex.test(e.target.value)) {
                        setEmailError('')
                      }
                    }}
                  />

                </div>
                {emailError && <p className="text-danger">{emailError}</p>}

                <div className="input-group mb-1">
                  <input
                    type="password"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      if (passwordRegex.test(e.target.value)) {
                        setPasswordError('')
                      }
                    }}
                  />
                </div>
                {passwordError && <p className="text-danger">{passwordError}</p>}

              <div className="input-group mb-3" style={{paddingTop: '3%'}}>

                  <input
                    type="password"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value)
                      if (password === e.target.value) {
                        setConfirmPasswordError('')
                      }
                    }}
                  />
                </div>
                {confirmPasswordError && <p className="text-danger">{confirmPasswordError}</p>}

                <div className="input-group mb-5 d-flex justify-content-between">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="formCheck" />
                    <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Remember Me</small></label>
                  </div>
                  <div className="forgot">
                    <small><a href="#">Forgot Password?</a></small>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <button className="btn btn-lg btn-primary w-100 fs-6">Register</button>
                </div>
              </form>

              <div className="input-group mb-3">
                <button className="btn btn-lg btn-light w-100 fs-6"><img src="images/google.png" style={{width: 20}} className="me-2" /><small>Sign Up with Google</small></button>
              </div>
             
                
            

            
              <div className="row">
                <small>Already have account?  </small>
              </div>
            </div>
          </div>
          {/*------------------------- Left Box ---------------------------*/}
          <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" >
            <div className="featured-image mb-3">
              <img src={logo} className="img-fluid hide-on-mobile" style={{ width: '250px', height: 'auto' }} alt="Your Logo" />
            </div>
            <p className="text fs-2 hide-on-mobile" style={{ fontSize: '2rem', fontWeight: 600, color: '#800080', fontFamily: '"Courier New", Courier, monospace' }}>
              Register Now
            </p>
            <small className="text text-wrap text-center hide-on-mobile" style={{width: '23rem', fontFamily: '"Courier New", Courier, monospace', fontWeight: 900, color: 'rgb(128, 0, 128)', fontSize: '1rem'}}>for every challenge is an opportunity in disguise</small>
          </div>
          {/*------------------ ------ Right Box --------------------------*/}
         
        </div>
      </div>
    </div>
  )
}

export default Register