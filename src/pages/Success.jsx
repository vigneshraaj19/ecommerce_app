import React from 'react'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";


function Success() {
  const location = useLocation();
   console.log("location",location);

  const data = location.state.stripeData;
  const cart = location.state.products;

  const navigate = useNavigate();
 

  const currentUser = useSelector((state) => state.user.currentUser);
   console.log(currentUser)
   console.log("cart",cart)
    console.log("data",data)

  useEffect(() => {
    const createOrder = async () => {
      try {

        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item.quantity,

          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
       
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  const handleClick = (e) => {
    navigate("/");
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
      
    
       
        Successfull. Your order is being prepared...
        <button  onClick={handleClick} style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
      
    </div>
    
    
    
  )
}

export default Success