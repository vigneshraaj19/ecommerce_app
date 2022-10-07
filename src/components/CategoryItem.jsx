import React from 'react'
import "./categoryitem.css"
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function CategoryItem({ item }) {

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

  return (
    <div className="Container4">
      <Link to={`/products/${item.cat}`} >
      <img src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button >SHOP NOW</Button>
      </Info>
      </Link>
    </div>
  )
}

export default CategoryItem