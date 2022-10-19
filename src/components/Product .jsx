import React from 'react'
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
  import "./product.css"
  import styled from "styled-components";
  import { Link } from "react-router-dom";
  import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import { userRequest } from "../requestMethods";


function Product ({ item,journey }) {
  const KEY = process.env.REACT_APP_STRIPE;
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };
  const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content:space-between;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
  border-radius: 100px;
  height:60%;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

useEffect(() => {
  const makeRequest = async () => {
    try {
      const res = await userRequest.post("/checkout/payment", {
        tokenId: stripeToken.id,
        amount: totalValue*100,
      });

     
      navigate("/success", {
        state:{
          stripeData: res.data,
          product: item,
          value:totalValue
        }
      });
    } 
    catch {}
  };
  stripeToken && makeRequest();
}, [stripeToken, totalValue,  navigate]);




  var d = new Date(journey);
 const month = d.getMonth()+1; 
 console.log("value",month);

 
 var today=new Date();
  var mm=today.getMonth()+1;
  console.log("current",mm)

  var value=month-mm;
  console.log(value);


  switch(value) {

    case 1:

    var totalValue =item.price-Math.round(item.price * ( 10/ 100 ));
    var a=10
    console.log(totalValue)
      break;
    case 2:
      var totalValue =item.price-Math.round(item.price * ( 15/ 100 ));
      var a=15
      console.log(totalValue)
      
      break;
    case -9:
      var totalValue =item.price-Math.round(item.price * ( 20/ 100 ));
      var a=20
      console.log(totalValue)
    
      break;
      case -8:
        var totalValue =item.price-Math.round(item.price * ( 25/ 100 ));
        var a=25
        console.log(totalValue)
     
      break;
    case -7:
      var totalValue =item.price-Math.round(item.price * ( 30/ 100 ));
      var a=30
      console.log(totalValue)
     
      break;
    case -6:
      var totalValue =item.price-Math.round(item.price * ( 35/ 100 ));
      var a=35
      console.log(totalValue)
     
      break;
    default:
      var totalValue =item.price-Math.round(item.price * ( 5/ 100 ));
      var a=5
      console.log(totalValue)
      
  }



console.log("journey",journey);

  return (
    <Container>
    <Image src={item.img} />
    <div>[{item.despature}]
    <div>{item.source}</div></div>
    <div>--------</div>
    <div>[{item.arrival}]
    <div>{item.destination}</div></div>
   <div>discount:{a}%</div>
   
    <h4 >Current price:{item.price}
  
    <div>Discounted price:{totalValue}
      </div>
      </h4>
    
      
      <StripeCheckout
        name="Flight App"
        billingAddress
        shippingAddress
        description={`Your total in $${totalValue}`}
        amount={totalValue*100}
        token={onToken}
        stripeKey={KEY}
        >
        <button className="Button1" type="filled">BOOK NOW</button>
        </StripeCheckout>
       
      
     
     
    
    
  </Container>
   
  );
}

export default Product 