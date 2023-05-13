import React from "react";

const ServiceData = (e) => {
  return (
    <>
      <div className="mt-2 border-b-2 w-full"></div>
      <div>
        <p className="font-textSemiBold inline-block"> {e.num} </p>
        <h1 className="lg:text-9xl md:text-6xl text-4xl md:font-textBold font-heading">
          {e.title}
        </h1>
      </div>
      <div>
        <p className="-mt-8 cursor-pointer font-[Poppins] float-right uppercase text-sm font-medium">
          &#91; View Services &#93;
        </p>
      </div>
    </>
  );
};

export default ServiceData;
