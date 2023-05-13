import React from "react";
import FaqContent from "./FaqContent";

const Faq = () => {
  return (
    <div className="mt-20 md:h-[450px] h-96">
      <div>
        <h1 className="font-textBold text-center lg:text-[200px] md:text-9xl text-7xl">
          &#123;&#47;faq &#47;&#93;
        </h1>
      </div>
      <div className="w-full h-auto mt-20">
        <div className="md:w-9/12 md:float-right">
          <FaqContent
            num="01"
            title="What should I do to start working with you?"
          />
          <FaqContent
            num="02"
            title="What is the minimum investment required to get started?"
          />
          <FaqContent
            num="03"
            title="What do you think about properties of blockchains?"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
