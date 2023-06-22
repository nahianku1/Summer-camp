import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Vortex } from "react-loader-spinner";
import { Navigate } from "react-router-dom";

function DefineUser() {
  let [role, setRole] = useState("");
  useEffect(() => {
    setRole(JSON.parse(localStorage.getItem("token"))?.userinfo?.role);
  }, []);

  if (!role) {
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
  } else if (role === "instructor") {
    return <Navigate to="addclass" />;
  } else if (role === "admin") {
    return <Navigate to="manageclasses" />;
  } else if (role === "student") {
    return <Navigate to="selectedclasses" />;
  }
}

export default DefineUser;
