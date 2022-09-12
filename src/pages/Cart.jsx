import React from 'react'
import "./cart.css"
import { Add, Remove } from "@material-ui/icons";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";

function Cart() {

  return (
    <div>
   <Announcement />
    <Navbar />
    <div className="Wrapper11">
      <h1 className="Title11">YOUR CART</h1>
      <div className="Top">
        <button className="TopButton">CONTINUE SHOPPING</button>
        <div>
          <span className="TopText">Shopping Cart(2)</span>
          <span className="TopText">Your Wishlist (0)</span>
        </div>
        <button className="TopButton" type="filled">CHECKOUT NOW</button>
      </div>
      <div className="Bottom">
        <div className="Info11">
          <div className="Product11">
            <div className="ProductDetail">
              <img className="Image11" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
              <div className="Details">
                <span>
                  <b>Product:</b> JESSIE THUNDER SHOES
                </span>
              </div>
            </div>
            <div className="PriceDetail">
              <div className="ProductAmountContainer">
                <Add />
                <div className="ProductAmount">2</div>
                <Remove />
              </div>
              <div className="ProductPrice">$ 30</div>
            </div>
          </div>
          <hr classname="Hr" />
        </div>
        <div className="Summary">
          <h1 className="SummaryTitle">ORDER SUMMARY</h1>
          <div className="SummaryItem">
            <span>Subtotal</span>
            <span>$ 80</span>
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
            <span>$ 80</span>
          </div>
          <button className="Button11">CHECKOUT NOW</button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Cart