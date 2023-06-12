import React, { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from "axios";

let auth = getAuth(app);
export let AuthContext = createContext(null);
function AuthProvider({ children }) {
  let [user, setUser] = useState("");
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user);
      if (user) {
        axios
          .post(`https://summer-camp-server-henna.vercel.app/jwt`, {
            email: user.email,
          })
          .then((response) => {
            console.log(response.data);
            localStorage.setItem("token", JSON.stringify(response.data));
          });
      } else {
        localStorage.removeItem("token");
      }
      setLoading(false);
    });
  }, []);
  let authInfo = { auth, user, loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
