import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbarside.css";
import SettingsIcon from "@mui/icons-material/Settings";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NewSidebar from "./Newsidebar";

function Navbarside() {
  const [click, setClick] = useState(false);
  const [moveSidebar, setMoveSidebar] = useState(false);

  const handleSidebarClick = () => {
    setClick(!click);
  };

  const handleIconClick = () => {
    setMoveSidebar(!moveSidebar);
    // Your other logic here
  };

  return (
    <>
      {click && <NewSidebar />}
      <nav id="sidebar" className={`sidebar ${moveSidebar ? "move-left" : ""}`}>
        <div className="sidebar__inner">
          <Link to="#" className="sidebar-icon" onClick={handleSidebarClick}>
            <SettingsIcon onClick={handleIconClick} />
            <div className="content">Choose Theme Styling</div>
          </Link>

          <Link to="#" className="sidebar-icon">
            <FavoriteIcon />
            <div className="content">Showcase</div>
          </Link>

          <Link to="#" className="sidebar-icon">
            <MenuBookIcon />
            <div className="content">Theme Documentation</div>
          </Link>

          <Link to="#" className="sidebar-icon">
            <ShoppingCartIcon />
            <div className="content">Purchase Theme</div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbarside;
