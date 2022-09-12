import React from 'react'
import { popularProducts } from "../data";
import Product from './Product ';
import "./products.css"
function Products() {
  return (
    <div className="Container5">
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Products