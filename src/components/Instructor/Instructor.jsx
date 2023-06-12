import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Vortex } from "react-loader-spinner";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Instructor() {
  let { user, loading } = useContext(AuthContext);

  let { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ["manage-users", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`https://summer-camp-server-henna.vercel.app/instructor`);
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

  return (
    <div className="overflow-x-auto min-h-screen my-[40px] mx-[60px]">
        <h1 className="text-center text-2xl font-pacifico font-bold mt-[40px] mb-[30px]">Instructor</h1>
      <table className="min-w-full bg-white">
        <thead className="">
          <tr className="">
            <th className="py-3 px-4 border-b  font-bold uppercase text-sm text-gray-600">
              User Pic
            </th>
            <th className="py-3 px-4 border-b  font-bold uppercase text-sm text-gray-600">
              Name
            </th>
            <th className="py-3 px-4 border-b  font-bold uppercase text-sm text-gray-600">
              Email
            </th>
            <th className="py-3 px-4 border-b  font-bold uppercase text-sm text-gray-600">
              Role
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={crypto.randomUUID()}>
              <td>
                <img
                  src={item.photo}
                  className="block w-[50px] h-[50px] rounded-full object-cover object-center"
                  alt=""
                />
              </td>
              <td className="py-3 px-4 border-b border-red-400">{item.username}</td>
              <td className="py-3 px-4 border-b border-red-400">
                {item.email}
              </td>
              <td className="py-3 px-4 border-b border-red-400">{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Instructor;
