import React from 'react'
import "./register.css"
function Register() {
  return (
    <div className="Container9">
    <div className="Wrapper3">
      <h1 className="Title3">CREATE AN ACCOUNT</h1>
      <form className="Form">
        <input className="Input" placeholder="name" />
        <input className="Input" placeholder="last name" />
        <input className="Input" placeholder="username" />
        <input className="Input" placeholder="email" />
        <input className="Input" placeholder="password" />
        <input className="Input" placeholder="confirm password" />
        <span className="Agreement">
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </span>
        <button className="Button3">CREATE</button>
      </form>
    </div>
  </div>
  )
}

export default Register