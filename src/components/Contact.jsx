import React from "react";

const Contact = () => {
  return (
    <div className="mt-20 bg-black flex flex-col  items-center  p-8 rounded-lg">
      <h1 className="font-heading md:text-9xl text-7xl">We-are Boost</h1>
      <div className="md:flex justify-between md:gap-10 mt-10">
        <div className="flex justify-center items-center gap-3">
          <i className="fa-regular text-3xl fa-envelope"></i>
          <p className="font-textBold text-3xl cursor-pointer"> Get in touch</p>
        </div>
        <div className="flex mt-2 md:mt-0 items-center md:space-x-9  space-x-3">
          <p className=" cursor-pointer font-[Poppins] text-sm font-medium">
            &#91; Facebook &#93;
          </p>
          <p className="cursor-pointer font-[Poppins] text-sm font-medium">
            &#91; LinkedIn &#93;
          </p>
          <p className="cursor-pointer font-[Poppins] text-sm font-medium">
            &#91; Github &#93;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
