import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { logOut } from "../redux/apiCalls";
import { mobile } from "../responsive";
import ScrollToTop from "../ScrollToTop";

function Navbarmobile() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src="https://i.postimg.cc/bwCJFWGx/Logo-S2.png" alt="logo" />
          </Link>
          <Link to="/cart">
            <Badge
              style={{ marginLeft: "100px", textDecoration: "none" }}
              badgeContent={quantity}
              color="primary"
            >
              <ShoppingCartOutlined />
            </Badge>
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbarmobile;
