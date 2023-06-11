import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { Vortex } from "react-loader-spinner";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import FeedbackModal from "../FeedbackModal/FeedbackModal";
import { IoLogoUsd } from "react-icons/io5";

function EnrolledClasses() {
  let { user, loading } = useContext(AuthContext);

  let { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ["enrolled-classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/enrolledclasses?email=${user.email}`);
      return res.json();
    },
    refetchOnWindowFocus: false,
  });

  if (data?.length == 0) {
    console.log("entered");
    return (
      <h1 className="w-[72%]  mt-[20px] mx-[300px] text-black text-2xl">
        No item Found!
      </h1>
    );
  }

  let handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action can't be undone.",
      type: "confirm",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, Delete it!",
      cancelButtonText: "No, cancel please!",
      closeOnConfirm: true,
      closeOnCancel: true,
      timer: 3000,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/selecteddelete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Good Job",
                text: "Deleted Successfully!",
                icon: "success",
              });
              refetch();
            }
          });
      } else {
        Swal.fire({
          title: "OK",
          text: "Delete Cancelled!",
          icon: "info",
        });
      }
    });
  };

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
      <h2 className="text-2xl w-full  text-center font-bold mb-4">
        My Selected Classes
      </h2>
      <table>
        <thead>
          <tr>
            <th>Class Pic</th>
            <th>Class Name</th>
            <th>Enrolled User</th>
            <th>Instructor Name</th>
            <th>Instructor Email</th>
            <th>Seats</th>
            <th>Price</th>
            <th>Status</th>
            
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
              <td>{entry.user}</td>
              <td>{entry.instructorName}</td>
              <td>{entry.instructorEmail}</td>
              <td>{entry.availableSeats}</td>
              <td>${entry.price}</td>
              <td>{entry.status}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EnrolledClasses;
