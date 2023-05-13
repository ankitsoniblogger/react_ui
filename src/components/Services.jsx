import React from "react";
import ServiceData from "./ServiceData";

const Services = () => {
  return (
    <div className="mt-20 w-full md:px-4 md:flex justify-between">
      <div className="md:w-1/4">
        <h2 className="uppercase font-[Poppins] tracking-wide">
          Services & Solutions
        </h2>
      </div>
      <div className="w-3/4">
        <ServiceData num="01" title="Crypto Wallet Intrastructure" />
        <ServiceData num="02" title="Blockchain Connectivity" />
        <ServiceData num="03" title="Strategic Opportunities" />
        <div className="mt-2 border-b-2 w-full"></div>
      </div>
    </div>
  );
};

export default Services;
