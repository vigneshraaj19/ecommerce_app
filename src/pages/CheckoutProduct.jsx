import React from 'react'
import "./cart.css"
import { removeProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function CheckoutProduct({ id, img, title, price, quantity }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const remove=()=>{
    console.log("remove",id);
  

     dispatch(
      removeProduct({ ...cart, quantity,price })
    );
   
    
  }

  return (
    <div className="Product11">
    <div className="ProductDetail">
      <img className="Image11" src={img} />
      <div className="Details">
        <span>
          <b>Product:</b>{title}
          <div className="ProductId">
              <b>ID:</b> {id}
            </div>
            <button on onClick={remove}>Remove</button>
          
        </span>
        
      </div>
    </div>
    <div className="PriceDetail">
      <div className="ProductAmountContainer">
        
        <div className="ProductAmount">{quantity}</div>
        <div> QTY</div>
        
      </div>
      <div className="ProductPrice"> $ {price * quantity}</div>
    </div>
  </div>
  )
}

export default CheckoutProduct