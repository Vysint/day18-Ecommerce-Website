import React from "react";
import Logo from "../../assets/logo.png";
import { ImLocation2 } from "react-icons/im";
import {
  AiOutlinePhone,
  AiOutlineInbox,
  AiOutlineLogin,
  AiOutlineLink,
} from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.cFooterWrapper}>
      <hr />

      <div className={classes.cFooter}>
        <div className={classes.logo}>
          <img src={Logo} alt="" />
          <span>Amazon</span>
        </div>
        <div className={classes.block}>
          <div className={classes.detail}>
            <span>Contact Us</span>
            <span className={classes.pngLine}>
              <ImLocation2 className={classes.icon} />
              <span>111 north avenue Orlando, FL 32801</span>
            </span>
            <span className={classes.pngLine}>
              {" "}
              <AiOutlinePhone className={classes.icon} />
              <a href="tel: 352-306-4415">352-306-4415</a>
            </span>
            <span className={classes.pngLine}>
              <AiOutlineInbox className={classes.icon} />
              <a href="mailto:support@amazon.com">support@amazon.com</a>
            </span>
          </div>
        </div>
        <div className={classes.block}>
          <div className={classes.detail}>
            <span>Account</span>
            <span className={classes.pngLine}>
              <AiOutlineLogin className={classes.icon} />
              Sign in
            </span>
          </div>
        </div>
        <div className={classes.block}>
          <div className={classes.detail}>
            <span>Company</span>
            <span className={classes.pngLine}>
              <FiUsers className={classes.icon} />
              <a href="/about">
                <p>About Us</p>
              </a>
            </span>
          </div>
        </div>
        <div className={classes.block}>
          <div className={classes.detail}>
            <span>Resources</span>
            <span className={classes.pngLine}>
              <AiOutlineLink className={classes.icon} />
              <a href="/about">
                <p>Safety Privacy & Terms</p>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className={classes.copyRight}>
        <span>Copyright &copy 2022 by Amazon, Inc.</span>
        <span>All rightS reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
