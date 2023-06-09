import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function DefineUser() {
  let [role, setRole] = useState("");
  useEffect(() => {
    setRole(JSON.parse(localStorage.getItem("token")).userinfo.role);
  }, []);
  if (role === "instructor") {
    return <Navigate to="addclass" />;
  }if (role === "admin") {
    return <Navigate to="manageclasses" />;
  }
}

export default DefineUser;
