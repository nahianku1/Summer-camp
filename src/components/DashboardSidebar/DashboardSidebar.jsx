import React, { useEffect, useState } from "react";
import { FaAccusoft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function DashboardSidebar() {
  let [role, setRole] = useState("");
  useEffect(() => {
    setRole(JSON.parse(localStorage.getItem("token")).userinfo.role);
  }, []);
  return (
    <div className="w-[18%] min-h-screen top-0 left-0 fixed bg-red-400">
      <div className="flex flex-col gap-3 mt-[20px] items-center justify-center">
        <img src="/images/logo.png" className="block w-[80px]" alt="" />
        <h1 className="font-pacifico">Lingua Master</h1>
        <div className="h-[2px] w-[80%] bg-slate-400"></div>
      </div>
      <div className="mt-[30px] px-[20px]">
        <ul>
          <li className=" hover:bg-black text-white py-[10px] px-[8px] flex gap-2 items-center ">
            <NavLink to="/" className="flex items-center gap-2">
              <FaAccusoft /> <span>Home</span>
            </NavLink>
          </li>
          {role === "instructor" && (
            <div>
              <li className=" hover:bg-black text-white py-[10px] px-[8px] flex gap-2 items-center ">
                <NavLink to="addclass" className="flex items-center gap-2">
                  <FaAccusoft /> <span>Add Class</span>
                </NavLink>
              </li>
              <li className=" hover:bg-black text-white py-[10px] px-[8px] flex gap-2 items-center ">
                <NavLink to="myclasses" className="flex items-center gap-2">
                  <FaAccusoft /> <span>My Classes</span>
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
