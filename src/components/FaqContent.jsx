import React from "react";

const FaqContent = (e) => {
  return (
    <>
      <div className="flex mt-2 h-8 items-center  justify-between">
        <p className="font-textSemiBold">/ {e.num}</p>
        <p className="font-[Poppins] text-sm text-left ">{e.title}</p>
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </div>
      <hr className="mt-1 " />
    </>
  );
};

export default FaqContent;
