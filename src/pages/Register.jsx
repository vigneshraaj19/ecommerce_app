import React from 'react'
import "./register.css"
import axios from "axios";
import { useState } from "react";
import {Link,useNavigate} from "react-router-dom";

function Register() {
  const [data, setData] = useState({
		username: "",
		email: "",
		password: "",
	});
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
  const  handleSubmit =(e) =>{
    e.preventDefault();

   
    
    const url1 = "http://localhost:5000";
const url=`${url1}/api/auth/register`
    axios.post(url,data)

    .then(res =>{
        navigate("/login");  
        alert("Registered successfully");  
       
    })
    .catch(err =>{
        console.log(err.response.data.message);
        alert("unsuccessfull");
       
    })
  
}
  return (
    <div className="Container9">
    <div className="Wrapper3">
      <h1 className="Title3">CREATE AN ACCOUNT</h1>
      <form className="Form" onSubmit={handleSubmit}>
     
        <input className="Input" 
        placeholder="username" 
        name="username"
        onChange={handleChange}
        value={data.username}
            required/>
        <input className="Input"
         placeholder="email"
         name="email"
         onChange={handleChange}
         value={data.email}
                     required />
        <input className="Input"
         placeholder="password"
         name="password"
         onChange={handleChange}
						value={data.password}
                        required />
       
        <span className="Agreement">
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </span>
        <button type="submit" className="Button3">CREATE</button>
      </form>
    </div>
  </div>
  )
}

export default Register