import React from "react";
import imgName from "./images/LOGO-FOR-WEBSITE.png";

const Header = () => {
  return (
    <div className='header'>
      <img src={imgName} alt='Logo' className='logo' />
    </div>
  );
};

export default Header;
