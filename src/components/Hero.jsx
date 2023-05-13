import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="mt-20 md:px-4">
      <div className="md:flex w-full">
        <p className="text-lightGreen font-text text-base tracking-widest">
          Possibility to create, collect, and share <br />
          the quality experiences on the blockchain.
        </p>
        <p className="text-lightGreen pt-6 md:pt-0 font-text text-base tracking-widest md:ml-96">
          Your Captivating Expedition <br />
          to the frontiers of finance!
        </p>
      </div>
      <div className="font-heading text-4xl md:text-7xl lg:text-[150px] leading-tight mt-10 line">
        {/* <h1>Build The Future with {"{Blockchain}"} </h1> */}
        <Typewriter
          options={{
            strings: ["Build The Future with { Blockchain }"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
