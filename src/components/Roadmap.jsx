import React from "react";

const Roadmap = () => {
  return (
    <div className="mt-20 p-8 bg-black rounded-lg overflow-hidden">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-textBold leading-10 ">
            Project
            <br /> roadmap
          </h1>
          <p className="md:w-[60%] mt-4 leading-4 font-[Poppins] text-xs md:text-sm">
            We continue to work on to give you the best user experience with
            blockchain. Presentation you our calendar Of events.
          </p>
        </div>
        <div className="flex items-center">
          <i className="fa-solid fa-download text-xs"></i>
          <p className="cursor-pointer hidden md:block mx-2 font-[Poppins] uppercase text-xs font-medium">
            &#91; download &#93;
          </p>
        </div>
      </div>
      <div className="md:w-full mt-10 md:flex gap-10 ">
        <div className="md:w-2/6  ">
          <p className="mt-4 mb-4 leading-6 font-[Poppins] text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            sunt quis molestias minus deleniti quo odio dolorum illo commodi
            nulla.
          </p>
          <div className="border-b-2"></div>
          <p className="font-[Poppins] mt-1 text-sm">Jan 10</p>
        </div>
        <div className="md:w-2/6 ">
          <p className="mt-4 mb-4 leading-6 font-[Poppins] text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            sunt quis molestias minus deleniti quo odio dolorum illo commodi
            nulla.
          </p>
          <div className="border-b-2"></div>
          <p className="font-[Poppins] mt-1 text-sm">Feb 10</p>
        </div>
        <div className="md:w-2/6 ">
          <p className="mt-4 mb-4 leading-6 font-[Poppins] text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            sunt quis molestias minus deleniti quo odio dolorum illo commodi
            nulla.
          </p>
          <div className="border-b-2"></div>
          <p className="font-[Poppins] mt-1 text-sm">Mar 10</p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
