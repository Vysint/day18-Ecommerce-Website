import React from "react";
import Logo from "../../assets/logo.png";
import classes from "./Header.module.css";
import {CgShoppingBag} from 'react-icons/cg';

const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src={Logo} alt="" />
        <span>Amazon</span>
      </div>
      <div className={classes.right}>
        <div className={classes.menu}>
          <ul className={classes.menu}>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>Eng</li>
          </ul>
        </div>
        <input type="text" className={classes.search}  placeholder="Search"/>
        <CgShoppingBag className={classes.cart} />
      </div>
    </div>
  );
};

export default Header;
