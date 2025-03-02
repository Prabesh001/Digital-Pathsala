import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E2C] w-full h-60 flex flex-col items-center">
      <div className="footer-container py-8 px-4 md:px-10 md:flex md:justify-between items-center"></div>

      <hr className="border-gray-500 md:w-3/4 w-full my-14" />

      <center>
        <div className="copyright-container flex justify-end w-full pt-4 md:pt-6">
          <span className="text-sm md:text-base  text-center md:text-right text-white">
            © 2024 Digital Pathshala Nepal. All rights reserved.
          </span>
        </div>
      </center>
    </footer>
  );
};

export default Footer;
