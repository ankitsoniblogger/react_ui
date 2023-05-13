import React from "react";
const Header = () => {
  return (
    <>
      <div className="flex pt-10 items-center h-12  justify-between px-4">
        <div className="font-heading text-2xl bg-lightGreen text-black px-4 rounded">
          LOGO.
        </div>
        <ul className="hidden text-center md:flex space-x-8 bg-black px-6 py-3 rounded-md font-[Poppins] text-xs uppercase">
          <li className="cursor-pointer">Our Story</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">News</li>
          <li className="cursor-pointer">Career</li>
          <li className="cursor-pointer">Contacts</li>
        </ul>
        <i className="fa-solid fa-bars md:hidden cursor-pointer float-right text-2xl"></i>
        <div className="bg-black px-6 py-3 rounded-md font-medium cursor-pointer tracking-wider font-[Poppins] text-xs uppercase">
          Join Us
        </div>
      </div>
    </>
  );
};

export default Header;
