import React from "react";

const CallToAction = () => {
    return (
        <div className="bg-lightGreen md:flex md:mt-5 items-center justify-around md:p-0 p-10 md:h-52 rounded-xl">
            <h1 className="font-heading text-5xl text-black">
                Let's Get started with us. <br /> One click away.
            </h1>
            <div className=" bg-black rounded-full mt-4 md:mt-0 p-1 flex justify-center items-center cursor-pointer">
                <p className="md:px-5 font-[Poppins] text-md">Join us</p>
                <i className="md:bg-lightGreen md:text-black p-4 float-right rounded-full fa-solid fa-arrow-up-right-from-square"></i>
            </div>
        </div>
    );
};

export default CallToAction;
