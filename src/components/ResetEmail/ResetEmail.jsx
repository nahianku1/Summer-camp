import React from "react";
import { Link } from "react-router-dom";

function ResetEmail() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 shadow-lg">
      <div className="p-[40px] bg-white flex flex-col gap-4 rounded-md items-center justify-center">
        <p>Reset Email has been sent</p>
        <button className="px-[15px] py-[8px] bg-lime-500 rounded-md text-white font-bold">
          <Link to="/signin">Sign In</Link>
        </button>
      </div>
    </div>
  );
}

export default ResetEmail;
