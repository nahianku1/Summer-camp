import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Vortex } from "react-loader-spinner";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function ManageUsers() {
  let { user, loading } = useContext(AuthContext);

  let { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ["manage-users", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://summer-camp-server-henna.vercel.app/users`
      );
      return res.json();
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

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
      <h1 className="w-[72%]  mt-[20px] mx-[300px] text-black text-2xl">
        No item Found!
      </h1>
    );
  }

  let makeAdmin = (id) => {
    axios
      .put(`https://summer-camp-server-henna.vercel.app/makeadmin/${id}`)
      .then((data) => {
        refetch();
        if (data.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Yahoo..",
            text: "User Updated Successfully",
          });
        }
      });
  };

  let makeInstructor = (id) => {
    axios
      .put(`https://summer-camp-server-henna.vercel.app/makeinstructor/${id}`)
      .then((data) => {
        refetch();
        if (data.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Yahoo..",
            text: "User Updated Successfully",
          });
        }
      });
  };

  return (
    <div className="w-[72%]  mt-[20px] mx-[300px]">
      <h2 className="text-2xl text-center font-bold mb-4">Manage Users</h2>
      <table>
        <thead>
          <tr className="uppercase">
            <th>User Pic</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Role</th>
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
              <td>{entry.username}</td>
              <td>{entry.email}</td>
              <td>{entry.role}</td>

              <td className=" space-x-3">
                <button
                  onClick={() => makeAdmin(entry._id)}
                  className="px-[5px]  bg-red-400 disabled:bg-red-800"
                >
                  Make admin
                </button>

                <button
                  onClick={() => makeInstructor(entry._id)}
                  className="px-[5px]  bg-red-400 disabled:bg-red-800"
                >
                  Make instructor
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageUsers;
