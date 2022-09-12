import React from 'react'
import "./productlist.css"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
function ProductList() {

  return (
    <div>
   <Announcement />
    <Navbar />
    <h2 className="Title1">Dresses</h2>
    <div className="FilterContainer1">
      <div className="Filter1">
        <span className="FilterText1">Filter Products:</span>
        <select>
          <option disabled selected>
            Color
          </option>
          <option>White</option>
          <option>Black</option>
          <option>Red</option>
          <option>Blue</option>
          <option>Yellow</option>
          <option>Green</option>
        </select>
      
      </div>
      <div className="Filter1">
        <span className="FilterText1">Sort Products:</span>
        <select>
          <option selected>Newest</option>
          <option>Price (asc)</option>
          <option>Price (desc)</option>
        </select>
      </div>
    </div>
    <Products />
    <Footer />
  </div>
  );
}

export default ProductList