import React from "react";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.container}>
      {/* left side */}
      <div className={classes.h_sides}>
        <span className={classes.text1}>skin protection cream</span>

        <div className={classes.text2}>
          <span>Trendy Collection</span>
          <span>
            {" "}
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced.
          </span>
        </div>
      </div>
      {/* Middle side */}
      <div className={classes.wrapper}>
        <div className={classes.blueCircle}></div>
        <img src={HeroImg} alt="" width={600} />
        <div className={classes.cart2}>
          <RiShoppingBagFill />
          <div className={classes.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className={classes.h_sides}>
        <div className={classes.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={classes.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
