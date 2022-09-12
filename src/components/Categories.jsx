import React from 'react'
import { categories } from "../data";
import CategoryItem from "./CategoryItem"
import "./categories.css"
function Categories() {
  return (
    <div className="Container2">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Categories