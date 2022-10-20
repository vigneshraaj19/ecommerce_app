import React from 'react'
import Product from './Product ';
import "./products.css"
import axios from "axios";
import { useEffect, useState } from "react";

function Products({  filter, filters ,sort, journey}) {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
 

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("https://flight-api02.herokuapp.com/api/products");
        console.log(res.data);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  },[]);


  useEffect(() => {
    setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );

   

},[products,  filters]);

useEffect(() => {
  setFilteredProducts(
    products.filter((item) =>
      Object.entries(filter).every(([key, value]) =>
        item[key].includes(value)
      )
    )
  );

 

},[products, filter]);


 

  useEffect(() => {
    if (sort == "none") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort == "Price (asc)") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price
        )
        
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
    
  }, [sort]);
 
 
  return (
    <div className="Container5">
      {filteredProducts
           
            .map((item) =>
            
            <Product item={item}  key={item._id} journey={journey}/>)}
    </div>
  )
}

export default Products