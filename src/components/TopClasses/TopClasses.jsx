import React from "react";

function TopClasses() {
  return (
    <div className="md:px-[110px] my-[60px]">
      <p className=" dark:text-white font-pacifico text-[30px] text-center font-extrabold">
        Popular Classes
      </p>
      <div className="flex flex-wrap items-center gap-7  justify-center">
        <div className="w-[270px] h-[270px] my-[40px] rounded-full border-[5px] border-solid border-red-400">
          <img
            src="/images/class1.jpg"
            alt=""
            className="block w-full h-full object-cover object-center rounded-full"
          />
          <p className="text-center bg-black text-white p-[10px] mt-[10px]">
            Students: 45
          </p>
        </div>
        <div className="w-[270px] h-[270px] my-[20px] rounded-full border-[5px] border-solid border-red-400">
          <img
            src="/images/class2.jpg"
            alt=""
            className="block w-full h-full object-cover object-center rounded-full"
          />
          <p className="text-center bg-black text-white p-[10px] mt-[10px]">
            Students: 77
          </p>
        </div>
        <div className="w-[270px] h-[270px] my-[20px] rounded-full border-[5px] border-solid border-red-400">
          <img
            src="/images/class3.jpg"
            alt=""
            className="block w-full h-full object-cover object-center rounded-full"
          />
          <p className="text-center bg-black text-white p-[10px] mt-[10px]">
            Students: 89
          </p>
        </div><div className="w-[270px] h-[270px] my-[20px] rounded-full border-[5px] border-solid border-red-400">
          <img
            src="/images/class4.jpg"
            alt=""
            className="block w-full h-full object-cover object-center rounded-full"
          />
          <p className="text-center bg-black text-white p-[10px] mt-[10px]">
            Students: 56
          </p>
        </div><div className="w-[270px] h-[270px] my-[20px] rounded-full border-[5px] border-solid border-red-400">
          <img
            src="/images/class5.jpg"
            alt=""
            className="block w-full h-full object-cover object-center rounded-full"
          />
          <p className="text-center bg-black text-white p-[10px] mt-[10px]">
            Students: 69
          </p>
        </div><div className="w-[270px] h-[270px] my-[20px] rounded-full border-[5px] border-solid border-red-400">
          <img
            src="/images/class6.jpg"
            alt=""
            className="block w-full h-full object-cover object-center rounded-full"
          />
          <p className="text-center bg-black text-white p-[10px] mt-[10px]">
            Students: 48
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopClasses;
