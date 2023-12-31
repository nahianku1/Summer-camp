import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { Vortex } from "react-loader-spinner";
import { FaEdit } from "react-icons/fa";
function MyClasses() {
  let { user, loading } = useContext(AuthContext);

  let { data, isLoading, error, isError } = useQuery({
    queryKey: ["my-classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://summer-camp-server-henna.vercel.app/my-classes?email=${user.email}`
      );
      return res.json();
    },
  
  });
  console.log(data);

  if (data?.length == 0) {
    console.log("entered");
    return (
      <h1 className="w-[72%]  mt-[20px] mx-[300px] text-black text-2xl">
        No item Found!
      </h1>
    );
  }

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
    <div className="w-[72%] mb-[40px] mt-[20px] mx-[300px]">
      <h2 className="text-2xl w-full  text-center font-bold mb-4">
        My Classes
      </h2>
      <table>
        <thead>
          <tr className="uppercase">
            <th>Class Pic</th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Instructor Email</th>
            <th>Seats</th>
            <th>Price</th>
            <th>Total Enrolled</th>
            <th>Feedback</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((entry) => (
            <tr key={crypto.randomUUID()}>
              <td>
              <img
                  src={entry.photo}
                  className="block w-[50px] h-[50px] rounded-full object-cover object-center"
                  alt=""
                />
              </td>
              <td>{entry.className}</td>
              <td>{entry.instructorName}</td>
              <td>{entry.instructorEmail}</td>
              <td>{entry.availableSeats}</td>
              <td>${entry.price}</td>
              <td>{entry.enrolled}</td>
              <td>{entry.status === 'denied' ? entry.feedback : 'N/A'}</td>
              <td>{entry.status}</td>
              <td>
                <button className="px-[15px] py-[10px] bg-red-400 ">
                  <FaEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyClasses;