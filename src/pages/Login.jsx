import React from 'react'
import "./login.css"
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    
   
  };
  return (
    <div className="Container10">
    <div className="Wrapper10">
      <h1 className="Title3">SIGN IN</h1>
      <form className="Form1">
        <input className="Input1" placeholder="Username"  onChange={(e) => setUsername(e.target.value)} />
        <input className="Input1" placeholder="Password"  type="password" onChange={(e) => setPassword(e.target.value)} />
       
        <Button className="Button4" onClick={handleClick} disabled={isFetching} >LOG IN</Button>
        {error && <span className="Error">Something went wrong...</span>}
         
          <a className="Link"><Link to="/register">CREATE A NEW ACCOUNT</Link></a>
      </form>
    </div>
  </div>
  )
}

export default Login