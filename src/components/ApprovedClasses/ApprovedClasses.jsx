import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { Vortex } from "react-loader-spinner";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function ApprovedClasses() {
  let { user, loading } = useContext(AuthContext);
  let [role, setRole] = useState("");
  let navigate = useNavigate();
  let location = useLocation();
  useEffect(() => {
    setRole(JSON.parse(localStorage.getItem("token"))?.userinfo?.role);
  }, []);
  let { data, isLoading } = useQuery({
    queryKey: ["approved-classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://summer-camp-server-henna.vercel.app/approvedclasses`
      );
      return res.json();
    },
    
    refetchOnWindowFocus: false,
  });

  let handleClick = (entry) => {
    console.log(entry._id);
    location.state = location.pathname;
    if (
      JSON.parse(localStorage.getItem("token"))?.userinfo?.role === undefined
    ) {
      navigate("/signin", { state: location.pathname });
      Swal.fire({
        title: "Sign In",
        text: "You must login to continue",
        icon: "warning",
      });
    }
    axios
      .post(`https://summer-camp-server-henna.vercel.app/selected-class`, {
        ...entry,
        user: user.email,
      })
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          Swal.fire({
            title: "Yahoo..",
            text: "Class Selected Successfully",
            icon: "success",
          });
        } else if (data.status === 210) {
          Swal.fire({
            title: "Oops..",
            text: "Class already Selected",
            icon: "info",
          });
        } else if (data.status === 220) {
          Swal.fire({
            title: "Oops..",
            text: "Class already Enrolled",
            icon: "info",
          });
        }
      });
  };
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

  if (data?.length == 0) {
    console.log("entered");
    return (
      <h1 className=" min-h-screen font-bold  text-center mt-[80px] mx-[300px] text-black text-2xl">
        No item Found!
      </h1>
    );
  }

  return (
    <div>
      <h1 className="text-center text-2xl font-pacifico font-bold mt-[40px] mb-[30px]">
        Classes
      </h1>
      <div className="min-h-screen  text-center flex items-start justify-center  flex-wrap gap-4 mx-[120px] my-[40px]">
        {data?.map((entry) => (
          <div
            key={crypto.randomUUID()}
            className={`min-w-[300px]  ${
              entry.availableSeats == "0" ? "bg-red-500" : ""
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
              <p className="text-gray-700 text-base mb-2">
                Price: ${entry.price}
              </p>

              <button
                onClick={() => handleClick(entry)}
                disabled={
                  entry.availableSeats == "0"
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
    </div>
  );
}

export default ApprovedClasses;
