import { useContext, useRef, useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { AuthContext } from "../../AuthProvider";
import { IoPersonSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import axios from "axios";

function Register() {
  let [hidden, setHidden] = useState(true);
  let [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  // const onSubmit = data => console.log(data);
  const capitalregex = /[A-Z]+/;
  const specialRegex = /[!@#$%^&*()~`]+/;
  let photoRef = useRef("");
  let navigate = useNavigate();
  let { auth } = useContext(AuthContext);

  let modifyError = (error) => {
    let modifiedMessage = error.message
      .split("/")[1]
      .split(")")[0]
      .split("-")
      .map((v) => v[0].toUpperCase() + v.slice(1))
      .join(" ");
    setError(modifiedMessage);
  };

  let onSubmit = (data) => {
    setError("");
    let formData = new FormData();
    formData.append("image", data.photo[0]);
    let url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgdata) => {
        console.log(imgdata.data.display_url);
        photoRef.current = imgdata.data.display_url;
      });
    console.log(data);
    if (data.password !== data.cpassword) {
      setError(`Password didn't matched`);
      return;
    } else if (!capitalregex.test(data.password)) {
      console.log(capitalregex.test(data.password));
      setError(`Password must have 1 Capital letter`);
      return;
    } else if (!specialRegex.test(data.password)) {
      setError(`Password must have 1 Special character`);
      return;
    }
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: data.username,
          photoURL: photoRef.current,
        })
          .then(() => {
            axios
              .post(`http://localhost:5000/users`, {
                username: data.username,
                email: data.email,
              })
              .then(() => {
                navigate("/");
              });
          })
          .catch((error) => {
            modifyError(error);
          });
      })
      .catch((error) => {
        console.log(error);
        modifyError(error);
      });
  };
  return (
    <div className="flex justify-center items-center  py-[30px]">
      <div className="bg-white border border-solid border-black w-[320px] md:w-[400px] py-[30px] rounded-md ">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center justify-center flex-col gap-4"
        >
          <div className=" mb-5 text-[100px] font-bold text-[#f788c7]">
            <IoPersonSharp />
          </div>
          <div>
            <label htmlFor="" className="block">
              Name:
            </label>
            <input
              type="text"
              className="focus:shadow-lg outline-none border border-solid border-[#f788c7] p-1 rounded-md indent-2"
              placeholder="Name"
              {...register("username")}
            />
          </div>
          <div>
            <label htmlFor="" className="block">
              Email:
            </label>
            <input
              type="text"
              className="focus:shadow-lg outline-none border border-solid border-[#f788c7] p-1 rounded-md indent-2"
              placeholder="Email"
              {...register("email")}
              required
            />
          </div>
          <div>
            <label htmlFor="" className="block">
              Password:
            </label>
            <div className="relative">
              <input
                type={hidden ? `password` : `text`}
                className="focus:shadow-lg outline-none border border-solid border-[#f788c7] p-1 rounded-md indent-2"
                placeholder="Password"
                {...register("password")}
                required
              />
              {hidden ? (
                <FaEye
                  onClick={() => setHidden(false)}
                  className="absolute top-2.5 right-2 cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setHidden(true)}
                  className="absolute top-2.5 right-2 cursor-pointer"
                />
              )}
            </div>
          </div>{" "}
          <div>
            <label htmlFor="" className="block">
              Confirm Password:
            </label>
            <div className="relative">
              <input
                type="password"
                className="focus:shadow-lg outline-none border border-solid border-[#f788c7] p-1 rounded-md indent-2"
                placeholder="Password"
                {...register("cpassword")}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="" className="block">
              Photo URL:
            </label>
            <input
              type="file"
              className="focus:shadow-lg outline-none border border-solid border-[#f788c7] p-1 rounded-md indent-2"
              placeholder="Photo URL"
              {...register("photo")}
            />
          </div>
          {error && !error === "Weak Password" ? (
            <p className="text-red-600 font-bold">{error}</p>
          ) : error === "Weak Password" ? (
            <p className="text-red-600 font-bold">
              Password should be at least 6 characters.
            </p>
          ) : (
            <p className="text-red-600 font-bold">{error}</p>
          )}
          <div>
            <button
              type="submit"
              className="bg-[#f788c7] px-4 py-2 rounded-lg text-white font-bold"
            >
              Sing Up
            </button>
          </div>
          <p className="text-[15px]">
            Already have an account?{" "}
            <Link to="/signin" className="underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
