import React from 'react'
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import "./navbar.css"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Navbar() {
  const quantity = useSelector(state=>state.cart.quantity)
  const handleLogout = () => {
		
		localStorage.removeItem("persist:root");
	    window.location.reload();
	};
  return (
    <div className="Container">
      <div className="Wrapper">
         <div className="Left">
         <div className="Language"></div>
        
        </div>
        <div className="Center">
        <div className="Logo">E-Store</div>
        </div>
        <div className="Right">
        
       

        <div className="MenuItem">  <Link to="/register">REGISTER</Link></div>
        <Link className="MenuItem" onClick={handleLogout}>  SIGN OUT</Link>
        <div className="MenuItem">
          <Link to="/cart">
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar