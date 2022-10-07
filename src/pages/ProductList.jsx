import React from 'react'
import "./productlist.css"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useLocation } from "react-router";
import { useState } from "react";

function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  

  return (
    <div>
   <Announcement />
    <Navbar />
    <h2 className="Title1">{cat}</h2>
    <div className="FilterContainer1">
      <div className="Filter1">
        <span className="FilterText1">Filter Products:</span>
        <select name="color" onChange={handleFilters}>
          <option disabled selected>
            Color
          </option>
          <option>white</option>
          <option>black</option>
          <option>red</option>
          <option>blue</option>
          <option>yellow</option>
          <option>green</option>
        </select>
      
      </div>
      <div className="Filter1">
        <span className="FilterText1">Sort Products:</span>
        <select onChange={(e) => setSort(e.target.value)}>
          <option selected>Newest</option>
          <option>Price (asc)</option>
          <option>Price (desc)</option>
        </select>
      </div>
    </div>
    <Products cat={cat} filters={filters} sort={sort} />
    <Footer />
  </div>
  );
}

export default ProductList