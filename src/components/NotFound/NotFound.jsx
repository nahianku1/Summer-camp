import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <img src="/images/404.jpg" alt="Not Found" className="w-[400px]" />
      <h1 className="text-3xl font-bold dark:text-white  text-gray-900 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 dark:text-white  text-center max-w-md mb-8">
        We're sorry, but the page you requested could not be found.
      </p>
      <Link to="/" className=" font-bold   cursor-pointer bg-red-400 px-[15px] py-[10px]">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
