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

function PayHistory() {
  let { user, loading } = useContext(AuthContext);

  let { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ["payhistory", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://summer-camp-server-henna.vercel.app/payhistory?email=${user.email}`
      );
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
        My Payment History
      </h2>
      <table>
        <thead>
          <tr className="uppercase">
            <th>User</th>
            <th>amount</th>
            <th>status</th>
            <th>Payment Method</th>
            <th>Transaction ID</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((entry) => (
            <tr key={crypto.randomUUID()}>
              <td>{entry.user}</td>
              <td>${entry.amount}</td>
              <td>{entry.status}</td>
              <td>{entry.paymentmethod}</td>
              <td>{entry.transactionId}</td>
              <td>{new Date(entry.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PayHistory;
