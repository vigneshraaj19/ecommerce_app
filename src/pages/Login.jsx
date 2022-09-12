import React from 'react'
import "./login.css"
function Login() {
  return (
    <div className="Container10">
    <div className="Wrapper10">
      <h1 className="Title3">SIGN IN</h1>
      <form className="Form1">
        <input className="Input1" placeholder="Username" />
        <input className="Input1" placeholder="Password" />
        <button className="Button4">LOG IN</button>
          <a className="Link">CREATE A NEW ACCOUNT</a>
      </form>
    </div>
  </div>
  )
}

export default Login