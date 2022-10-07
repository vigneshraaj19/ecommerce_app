import React from 'react'
import "./cart.css"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import { userRequest } from "../requestMethods";
import { useEffect, useState } from "react";
import CheckoutProduct from './CheckoutProduct';


function Cart() {
  const KEY = process.env.REACT_APP_STRIPE;
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total*100,
        });

        console.log(res.data,cart)
       
        navigate("/success", {
          state:{
            stripeData: res.data,
            products: cart
          }
        });
      } 
      catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total,  navigate]);

  const handleClick = (e) => {
    navigate("/");
  };




  return (
    <div>
   <Announcement />
    <Navbar />
    <div className="Wrapper11">
      <h1 className="Title11">YOUR CART</h1>
      <div className="Top">
        <button className="TopButton"  onClick={handleClick}>CONTINUE SHOPPING</button>
        <div>
          <span className="TopText">Shopping Cart({cart.quantity})</span>
        </div>
        <StripeCheckout
        name="E-store"
        billingAddress
        shippingAddress
        description={`Your total in $${cart.total}`}
        amount={cart.total*100}
        token={onToken}
        stripeKey={KEY}
        >
        <button className="TopButton" type="filled">CHECKOUT NOW</button>
        </StripeCheckout>
      </div>
      <div className="Bottom">
        <div className="Info11">
        {cart.products.map((item) => (
           <CheckoutProduct 
           id={item._id}
           title={item.title}
           img={item.img}
           price={item.price}
           quantity={item.quantity}
           />
         
          ))}
          <hr classname="Hr" />
        </div>
        <div className="Summary">
          <h1 className="SummaryTitle">ORDER SUMMARY</h1>
          <div className="SummaryItem">
            <span>Subtotal</span>
            <span>$ {cart.total}</span>
          </div>
          <div className="SummaryItem">
            <span>Estimated Shipping</span>
            <span>$ 5.90</span>
          </div>
          <div className="SummaryItem">
            <span>Shipping Discount</span>
            <span>$ -5.90</span>
          </div>
          <div className="SummaryItem1" type="total">
            <span>Total</span>
            <span>$ {cart.total}</span>
          </div>
          <StripeCheckout
        name="E-store"
        billingAddress
        shippingAddress
        description={`Your total in $${cart.total}`}
        amount={cart.total*100}
        token={onToken}
        stripeKey={KEY}
        >
          <button className="Button11">CHECKOUT NOW</button>
          </StripeCheckout>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Cart