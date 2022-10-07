import React from 'react'
import "./product.css"
import { Add, Remove } from "@material-ui/icons";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {useLocation} from "react-router-dom"; 
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

function Product1() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };


  const handleClick = () => {
  
    dispatch(
      addProduct({ ...product, quantity })
    );
    
  };
 

  return (
    <div>
    <Announcement />
    <Navbar />
    <div className="Wrapper1">
      <div className="ImgContainer">
        <img className="img" src={product.img} />
      </div>
      <div className="InfoContainer1">
        <h1 className="Title3">{product.title}</h1>
        <p className="Desc">
         {product.desc}
        </p>
        <span className="Price">$ {product.price}</span>
        <div className="AddContainer">
          <div className="AmountContainer">
          <Remove onClick={() => handleQuantity("dec")} />
            <span className="Amount">{quantity}</span>
            <Add onClick={() => handleQuantity("inc")} />
          </div>
          <button onClick={handleClick}  className="Button1">ADD TO CART</button>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Product1