import React, { useContext, useEffect, useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiSave3Line } from "react-icons/ri";
import { AuthContext } from "../../AuthProvider";
import { IoPersonCircleSharp } from "react-icons/io5";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FavContext } from "../../App";

const UserProfile = () => {
  let { user, auth } = useContext(AuthContext);

  const [isEditing, setIsEditing] = useState(false);
  let {updated,setUpdated} = useContext(FavContext)
  let nameRef = useRef();
  let photoRef = useRef();
  const handleNameChange = (e) => {
    nameRef.current = e.target.value;
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
  }, [updated]);
  const handleEmailChange = (e) => {
    photoRef.current = e.target.value;
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    updateProfile(auth.currentUser, {
      displayName: nameRef.current,
      photoURL: photoRef.current,
    })
      .then(() => {
        setUpdated(!updated);
        console.log("User Updated!");
      })
      .catch((error) => {
        console.log(error);
      });
    setIsEditing(false);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center">
        <div className="bg-gray-100 dark:bg-slate-700 dark:text-white p-4 rounded-md shadow-md max-w-sm w-[310px] md:w-full">
          <div className="flex items-center">
            <div className="mr-2">
              {user && user?.photoURL ? (
                <img
                  className="w-10 h-10 rounded-full"
                  src={user?.photoURL}
                  alt="Profile"
                />
              ) : (
                <IoPersonCircleSharp className="text-3xl cursor-pointer" />
              )}
            </div>
            <div>
              {user && user?.displayName ? (
                <h2 className="text-lg font-semibold">{user?.displayName}</h2>
              ) : (
                "Name not set"
              )}

              <p className="text-gray-600 dark:text-white">{user?.email}</p>
            </div>
          </div>
          {isEditing ? (
            <div className="mt-4">
              <div className="mb-2">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  defaultValue={user?.displayName}
                  onChange={handleNameChange}
                  className="block w-full dark:text-black focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email">Photo URL:</label>
                <input
                  type="email"
                  id="email"
                  defaultValue={user?.photoURL}
                  onChange={handleEmailChange}
                  className="block w-full dark:text-black focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="text-gray-600 dark:text-lime-400 hover:text-indigo-600  mr-2"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-indigo-500 dark:bg-lime-400 hover:bg-indigo-600 text-white dark:text-black rounded-md py-2 px-4"
                  onClick={handleSaveClick}
                >
                  <RiSave3Line className="inline-block mr-2 dark:text-black dark:bgl" />
                  Save
                </button>
              </div>
            </div>
          ) : (
            <button
              className="text-gray-600 dark:text-white hover:text-indigo-500 mt-4"
              onClick={handleEditClick}
            >
              <FaEdit className="inline-block mr-2" />
              Edit profile
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
