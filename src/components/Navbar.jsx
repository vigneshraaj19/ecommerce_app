import React from 'react'
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import "./navbar.css"
function Navbar() {
  return (
    <div className="Container">
      <div className="Wrapper">
         <div className="Left">
         <div className="Language">EN</div>
         <div className="SearchContainer">
            <input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="Center">
        <div className="Logo">E-Store</div>
        </div>
        <div className="Right">
        <div className="MenuItem">REGISTER</div>
        <div className="MenuItem">SIGN IN</div>
        <div className="MenuItem">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar