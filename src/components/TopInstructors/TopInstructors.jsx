import React from "react";

function TopInstructors() {
  return (
    <div className="md:px-[110px] mt-[150px]">
      <p className=" dark:text-white font-pacifico text-[30px] text-center font-extrabold">
        Popular Instructors
      </p>
      <div className="flex flex-wrap items-center gap-7  justify-center">
        <div className="w-[270px] relative flex  justify-center h-[270px] my-[10px] rounded-[20px] ">
          <img
            src="/images/instructor1.jpg"
        
            className="absolute block w-full h-full object-cover object-center rounded-[20px]"
          />
          <p className="text-center absolute bottom-4 bg-red-400 text-white p-[10px] mt-[10px]">
            Students: 33
          </p>
        </div>
        <div className="w-[270px] relative flex  justify-center h-[270px] my-[40px] rounded-[20px] ">
          <img
            src="/images/instructor2.jpg"
            alt=""
            className="absolute block w-full h-full object-cover object-center rounded-[20px]"
          />
          <p className="text-center absolute bottom-4 bg-red-400 text-white p-[10px] mt-[10px]">
            Students: 45
          </p>
        </div>
        <div className="w-[270px] relative flex  justify-center h-[270px] my-[40px] rounded-[20px] ">
          <img
            src="/images/instructor3.jpg"
            alt=""
            className="absolute block w-full h-full object-cover object-center rounded-[20px]"
          />
          <p className="text-center absolute bottom-4 bg-red-400 text-white p-[10px] mt-[10px]">
            Students: 67
          </p>
        </div><div className="w-[270px] relative flex  justify-center h-[270px] my-[40px] rounded-[20px] ">
          <img
            src="/images/instructor4.jpg"
            alt=""
            className="absolute block w-full h-full object-cover object-center rounded-[20px]"
          />
          <p className="text-center absolute bottom-4 bg-red-400 text-white p-[10px] mt-[10px]">
            Students: 73
          </p>
        </div><div className="w-[270px] relative flex  justify-center h-[270px] my-[40px] rounded-[20px] ">
          <img
            src="/images/instructor5.jpg"
            alt=""
            className="absolute block w-full h-full object-cover object-center rounded-[20px]"
          />
          <p className="text-center absolute bottom-4 bg-red-400 text-white p-[10px] mt-[10px]">
            Students: 77
          </p>
        </div><div className="w-[270px] relative flex  justify-center h-[270px] my-[40px] rounded-[20px] ">
          <img
            src="/images/instructor6.jpg"
            alt=""
            className="absolute block w-full h-full object-cover object-center rounded-[20px]"
          />
          <p className="text-center absolute bottom-4 bg-red-400 text-white p-[10px] mt-[10px]">
            Students: 66
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopInstructors;
