import React, { useEffect, useState } from "react";
import { FaAccusoft, FaCcVisa, FaLeanpub, FaReadme } from "react-icons/fa";
import { IoHomeSharp, IoNewspaper, IoPeopleSharp, IoReader, IoSchoolSharp } from "react-icons/io5";
import { Vortex } from "react-loader-spinner";
import { NavLink } from "react-router-dom";

function DashboardSidebar() {
  let [role, setRole] = useState("");
  useEffect(() => {
    setRole(JSON.parse(localStorage.getItem("token"))?.userinfo?.role);
  }, []);

  if (!role) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-45px)]">
        <Vortex
          visible={true}
          height="200"
          width="200"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    );
  }

  return (
    <div className="w-[18%] min-h-screen top-0 left-0 fixed bg-red-400">
      <div className="flex flex-col gap-3 mt-[20px] items-center justify-center">
        <img src="/images/logo.png" className="block w-[80px]" alt="" />
        <h1 className="font-pacifico">Lingua Master</h1>
        <div className="h-[2px] w-[80%] bg-slate-400"></div>
      </div>
      <div className="mt-[30px] px-[20px]">
        <ul>
          <li className="  text-white py-[10px] px-[8px] flex gap-2 items-center ">
            <NavLink to="/" className="flex items-center gap-2">
              <IoHomeSharp /> <span>Home</span>
            </NavLink>
          </li>
          {role === "instructor" && (
            <div>
              <li className="  text-white py-[10px] px-[8px] flex gap-2 items-center ">
                <NavLink to="addclass" className="flex items-center gap-2">
                  <IoReader /> <span>Add Class</span>
                </NavLink>
              </li>
              <li className="  text-white py-[10px] px-[8px] flex gap-2 items-center ">
                <NavLink to="myclasses" className="flex items-center gap-2">
                  <IoNewspaper /> <span>My Classes</span>
                </NavLink>
              </li>
            </div>
          )}
          {role === "admin" && (
            <div>
              <li className="  text-white py-[10px] px-[8px] flex gap-2 items-center ">
                <NavLink to="manageclasses" className="flex items-center gap-2">
                  <IoSchoolSharp /> <span>Manage Classes</span>
                </NavLink>
              </li>
              <li className="  text-white py-[10px] px-[8px] flex gap-2 items-center ">
                <NavLink to="manageusers" className="flex items-center gap-2">
                  <IoPeopleSharp /> <span>Manage Users</span>
                </NavLink>
              </li>
            </div>
          )} 
          {role === "student" && (
            <div>
              <li className="  text-white py-[10px] px-[8px] flex gap-2 items-center ">
                <NavLink to="selectedclasses" className="flex items-center gap-2">
                  <FaReadme /> <span>My Selected Classes</span>
                </NavLink>
              </li>
              <li className="  text-white py-[10px] px-[8px] flex gap-2 items-center ">
                <NavLink to="enrolledclasses" className="flex items-center gap-2">
                  <FaLeanpub /> <span>My Enrolled Classes</span>
                </NavLink>
              </li> 
              <li className="  text-white py-[10px] px-[8px] flex gap-2 items-center ">
                <NavLink to="payhistory" className="flex items-center gap-2">
                  <FaCcVisa /> <span>Payment History</span>
                </NavLink>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default DashboardSidebar;
