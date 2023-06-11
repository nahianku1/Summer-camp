import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { Vortex } from "react-loader-spinner";

function ApprovedClasses() {
  let { user, loading } = useContext(AuthContext);
  let [role, setRole] = useState("");
  useEffect(() => {
    setRole(JSON.parse(localStorage.getItem("token")).userinfo.role);
  }, []);
  let { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ["approved-classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/approvedclasses`);
      return res.json();
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  console.log(role);
  if (isLoading) {
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
    <div className="min-h-screen  text-center flex items-start justify-center  flex-wrap gap-4 mx-[120px] my-[40px]">
      {data?.map((entry) => (
        <div
          key={crypto.randomUUID()}
          className={`min-w-[300px]  ${
            entry.availableSeats === "0" ? "bg-red-500" : ""
          } flex flex-col p-[10px] items-center justify-center rounded overflow-hidden shadow-2xl`}
        >
          <img
            src={entry.photo}
            className="block object-cover object-center w-[150px] h-[150px] rounded-full"
          />
          <div className="px-6 py-4 flex flex-col justify-center">
            <div className="font-bold text-xl mb-2">{entry.className}</div>
            <p className="text-gray-700 text-base mb-2">
              Instructor: {entry.instructorName}
            </p>
            <p className="text-gray-700 text-base mb-2">
              Available Seats: {entry.availableSeats}
            </p>
            <p className="text-gray-700 text-base mb-2">Price: {entry.price}</p>
           
            <button
              disabled={
                entry.availableSeats === "0"
                  ? true
                  : role === "admin"
                  ? true
                  : role === "instructor"
                  ? true
                  : false
              }
              className="bg-red-400  hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApprovedClasses;