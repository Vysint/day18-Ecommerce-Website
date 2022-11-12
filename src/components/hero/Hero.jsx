import React from "react";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import classes from "./Hero.module.css";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
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
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          className={classes.blueCircle}
          transition={transition}
        ></motion.div>
        <motion.img
          transition={transition}
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          src={HeroImg}
          alt=""
          width={600}
        />
        <motion.div
          transition={transition}
          initial={{ right: "2%" }}
          whileInView={{ right: "0%" }}
          className={classes.cart2}
        >
          <RiShoppingBagFill />
          <div className={classes.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
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
