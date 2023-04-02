import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div>
        <button className='backToTopButton' onClick={scrollToTop}>
          Back to top &#8593;
        </button>
      </div>
      <p class='copyright'>
        Copyright © 2023 Popz N' Figz, All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
