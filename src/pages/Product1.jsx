import React from 'react'
import "./product.css"
import { Add, Remove } from "@material-ui/icons";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function Product1() {
  return (
    <div>
    <Announcement />
    <Navbar />
    <div className="Wrapper1">
      <div className="ImgContainer">
        <img className="img" src="https://i.ibb.co/S6qMxwr/jean.jpg" />
      </div>
      <div className="InfoContainer1">
        <h1 className="Title3">Denim Jumpsuit</h1>
        <p className="Desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
          iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
          tristique tortor pretium ut. Curabitur elit justo, consequat id
          condimentum ac, volutpat ornare.
        </p>
        <span className="Price">$ 20</span>
        <div className="AddContainer">
          <div className="AmountContainer">
            <Remove />
            <span className="Amount">1</span>
            <Add />
          </div>
          <button className="Button1">ADD TO CART</button>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Product1