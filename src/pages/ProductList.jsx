import React from 'react'
import "./productlist.css"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import { useState } from "react";

function ProductList() {

  const [filters, setFilters] = useState({});
  const [filter, setFilter] = useState({});
  const[journey,setjourney]=useState({});
  const [sort, setSort] = useState("none");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };

  const disableddate =() =>{
    var today,dd,mm,yyyy;
    today=new Date();
    dd=today.getDate()+1;
    mm=today.getMonth()+1;
    yyyy=today.getFullYear();
    return yyyy+"-"+mm+"-"+dd;

  }
  const onchanger=(event) =>
  {
   setjourney(event.target.value)

  }
  console.log(filter,filters,sort,journey)

  return (
    <div>
   <Announcement />
    <Navbar />
    <div className="FilterContainer1">
      <div className="Filter1">
        <span className="FilterText1">Source City:</span>
        <select name="source" onChange={handleFilter}>
          <option disabled selected>
          Source
          </option>
          <option>Mumbai</option>
          <option>Chennai</option>
          <option>Delhi</option>
          <option>Hydrabad</option>
          <option>Kolkata</option>
          <option>Bangalore</option>
        </select>
      
      </div>
      <div className="Filter1">
        <span className="FilterText1">Destination City:</span>
        <select name="destination" onChange={handleFilters}>
        <option disabled selected>
          Destination
          </option>
          <option>Mumbai</option>
          <option>Chennai</option>
          <option>Delhi</option>
          <option>Hydrabad</option>
          <option>Kolkata</option>
          <option>Bangalore</option>
        </select>
      
      </div>
      <div className="Filter1">
        <span className="FilterText1">Journey Date :</span>
        <input min={disableddate()} value={journey} onChange={onchanger} type="date"></input>
       
      </div>

      <div className="Filter1">
        <span className="FilterText1">Sort Price:</span>
        <select onChange={(e) => setSort(e.target.value)}>
          <option selected>none</option>
          <option>Price (asc)</option>
          <option>Price (desc)</option>
        </select>
      </div>
     
    </div>
   
    <Products filter={filter} filters={filters} sort={sort} journey={journey} />
   
  </div>
  );
}

export default ProductList