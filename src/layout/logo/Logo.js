import React from "react";
import LogoLight2x from "../../images/logo2x.png";
import LogoDark from "../../images/logo.png";
import { Link } from "react-router-dom";

const Logo = ({to}) => {
  return (
    <Link to={to ? to : `${process.env.PUBLIC_URL}/`} className="logo-link">
      {/* <img className="logo-light logo-img" src={LogoLight2x} alt="logo" /> */}
      <img className="logo-dark logo-img " src={LogoDark} alt="logo" />
    </Link>
  );
};

export default Logo;
