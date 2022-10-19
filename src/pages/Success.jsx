import React from 'react'
import { userRequest } from "../requestMethods";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";


function Success() {

  const location = useLocation();
  const navigate = useNavigate();
  console.log("location",location);
  const currentUser = useSelector((state) => state.user.currentUser);
   console.log(currentUser)

   const data = location.state.stripeData;
   const cart = location.state.product;
   const value = location.state.value;
   console.log(cart,data);

   useEffect(() => {
    const createOrder = async () => {
      try {

        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          username: currentUser.username,
          products: cart,
          amount: value,
          address: data.billing_details.address,
        });
        
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  
 

  const handleClick = () => {
    navigate("/")
   
  };
  return (
    
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      
    
       
        Your Flight tickets are booked successfull. <br></br>
        You will receive mail to the logined mail id.
        <button  onClick={handleClick} style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
      
    </div>
    
    
    
  )
}

export default Success