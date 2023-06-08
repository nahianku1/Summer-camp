import React from "react";
import man from "../../assets/man.png";

function HomeBanner() {
  return (
    <div className="bg-[#F9F9FF] dark:bg-slate-800">
      <div className=" mx-[20px]  md:mx-[120px] py-[40px] flex gap-5 flex-wrap md:flex-nowrap">
        <div className="dark:text-white flex flex-col gap-[20px] justify-center  items-start">
          <h1 className="text-3xl md:text-5xl  font-bold md:leading-[50px] min-w-max">
            Delicious recipes <br /> for every <br />
            <span className="text-lime-400">occasion</span>
          </h1>
          <p>
            Welcome to our recipes website, your one-stop destination for
            delicious and inspiring meal ideas. Whether you're a seasoned home
            cook or a newbie in the kitchen, our website offers a vast
            collection of recipes to suit every taste, occasion, and skill
            level. From quick and easy weeknight dinners to elaborate weekend
            feasts, we've got you covered with recipes that are both tasty and
            approachable.
          </p>
          <button className=" min-w-max bg-lime-400 px-6 py-4 font-bold text-black border-none cursor-pointer rounded-md">
            Get Started
          </button>
        </div>

        <img
          className="object-cover object-center w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
          src={man}
          alt="man"
        />
      </div>
    </div>
  );
}

export default HomeBanner;
