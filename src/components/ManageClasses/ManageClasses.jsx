import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { Vortex } from "react-loader-spinner";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import FeedbackModal from "../FeedbackModal/FeedbackModal";

function ManageClasses() {
  let { user, loading } = useContext(AuthContext);
  let [openmodal, setOpenModal] = useState(false);
  let [modalinfo, setModalinfo] = useState(null);




  let { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ["manage-classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://summer-camp-server-henna.vercel.app/allclasses`
      );
      return res.json();
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  let handleApprove = (id) => {
    console.log(id);
    axios.put(`https://summer-camp-server-henna.vercel.app/approve/${id}`).then((data) => {
      refetch();
      if (data.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Class Approved",
          text: "Class Approved Successfully",
        });
      }
    });
  };
  let handleDeny = (id) => {
    console.log(id);
    axios.put(`https://summer-camp-server-henna.vercel.app/deny/${id}`).then((data) => {
      refetch();
      if (data.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Class Denied",
          text: "Class Denied Successfully",
        });
      }
    });
  };
  let handleEdit = (info) => {
    setModalinfo(info);
    setOpenModal(true);
  };
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
    <div className="w-[72%]  mt-[20px] mx-[300px]">
      {openmodal && <FeedbackModal modalinfo={modalinfo} setOpenModal={setOpenModal} />}

      <h2 className="text-2xl w-full  text-center font-bold mb-4">
        Manage Classes
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
              <td>{entry.status}</td>
              <td className="flex gap-3">
                <button
                  onClick={() => handleApprove(entry._id)}
                  className="px-[5px]  bg-red-400 disabled:bg-red-800"
                  disabled={entry.status !== "pending"}
                >
                  Approve
                </button>
                <button
                  onClick={() => handleDeny(entry._id)}
                  className="px-[5px]  bg-red-400 disabled:bg-red-800"
                  disabled={entry.status !== "pending"}
                >
                  Deny
                </button>
                <button
                  onClick={() => handleEdit(entry)}
                  className="px-[5px]  bg-red-400 "
                >
                  Send feedback
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageClasses;
