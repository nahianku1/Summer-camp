import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ setOpen }) {
  return (
    <div className="flex  flex-col gap-3 items-start p-[20px] justify-start fixed z-50 inset-0 min-h-screen w-[200px] bg-white shadow-lg shadow-slate-400">
      <div className="flex items-center gap-[15px] ">
        <div className="flex gap-[3px] items-center ">
          <img src="/images/logo.png" className="block w-[32px]" alt="" />
          <p className="font-pacifico text-[12px]">Lingua Master</p>
        </div>

        <div>
          <button
            onClick={() => setOpen(false)}
            className="  bg-gray-200  border-none p-[3px] font-normal text-lg cursor-pointer rounded-[50%] w-[30px] h-[30px] flex items-center justify-center"
          >
            X
          </button>
        </div>
      </div>

      <NavLink to="/" className="link" onClick={() => setOpen(false)}>
        Home
      </NavLink>
      <NavLink className="link" to="/about" onClick={() => setOpen(false)}>
        About
      </NavLink>

      <NavLink className="link" to="/blog" onClick={() => setOpen(false)}>
        Blog
      </NavLink>
      <NavLink className="link" to="/favorite" onClick={() => setOpen(false)}>
        Favorite
      </NavLink>
    </div>
  );
}

export default Sidebar;
