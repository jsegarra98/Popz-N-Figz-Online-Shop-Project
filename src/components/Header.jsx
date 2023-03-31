import React from "react";
import imgName from "./images/LOGO-FOR-WEBSITE.png";

const Header = () => {
  return (
    <div className='header'>
      <h1>
        <img src={imgName} alt='Logo' className='logo' />
      </h1>
    </div>
  );
};

export default Header;
