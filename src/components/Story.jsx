import React from "react";

const Story = () => {
  return (
    <div className="mt-20 w-full md:px-4 md:flex justify-between">
      <div className="w-3/4">
        <h2 className="uppercase font-[Poppins] tracking-wide">Our Story</h2>
      </div>
      <div className="md:w-2/5 mt-10 md:mt-0">
        <h3 className="font-textBold text-xl md:text-2xl tracking-wider">
          Our powerful payment APIs are built to scale with you from day one to
          millions of users. Let's start building.
        </h3>
        <p className="text-md font-light font-text mt-6 w-3/4 tracking-wider">
          We are a digital asset and blockchain leader helping institutions,
          startups. and qualified individuals shape a changing economy. We
          solutions custom-made for a digitally native ecosystem.
        </p>
        <p className="mt-6 cursor-pointer font-[Poppins] text-sm font-medium">
          &#91; VIEW MORE &#93;
        </p>
      </div>
    </div>
  );
};

export default Story;
