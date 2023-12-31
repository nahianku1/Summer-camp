import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useContext, useRef, useState } from "react";
import { FaLock, FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";
import Header from "../Header/Header";
import axios from "axios";
import { useForm } from "react-hook-form";
let GithubProvider = new GithubAuthProvider();
let GoogleProvider = new GoogleAuthProvider();
function Signin() {
  let [hidden, setHidden] = useState(true);
  let [error, setError] = useState("");
  let { register, handleSubmit } = useForm();
  let location = useLocation();
  console.log(location);

  let { auth } = useContext(AuthContext);
  // let emailRef = useRef("");
  // let passwordRef = useRef("");
  let navigate = useNavigate();

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
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((result) => {
        if (location.state) {
          navigate(location.state);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        modifyError(error);
      });
  };

  let handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        axios
          .post(`https://summer-camp-server-henna.vercel.app/users`, {
            username: displayName,
            email: email,
          })
          .then(() => {
            if (location.state) {
              navigate(location.state);
            } else {
              navigate("/");
            }
          });
      })
      .catch((error) => {
        modifyError(error);
      });
  };
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] ">
        <div className="bg-white w-[320px] md:w-[400px] py-[30px] border border-solid border-black rounded-md ">
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center justify-center flex-col gap-4"
          >
            <div className=" mb-5 text-6xl text-[#f788c7]">
              <FaLock />
            </div>
            <div>
              <label htmlFor="" className="block">
                Email:
              </label>
              <input
                type="text"
                autoComplete="true"
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
                  autoComplete="true"
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

             
            </div>
            {error && <p className="text-red-600 font-bold">{error}</p>}

            <div>
              <button
                type="submit"
                className="bg-[#f788c7] px-4 py-2 rounded-lg text-white font-bold"
              >
                Sing In
              </button>
              {/* <p>Don't have an account? <Link to='/register'>Register</Link></p> */}
            </div>
            <p className="text-[15px]">
              Don't have an account?{" "}
              <Link to="/register" className="underline">
                Register
              </Link>
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-[2px] w-[90px] bg-slate-300"></div>
              <div className="relative -top-[1px]">OR</div>
              <div className="h-[2px] w-[90px] bg-slate-300"></div>
            </div>
          </form>
          <div className="flex flex-col gap-4 px-[70px] mt-[20px]">
            <button
              onClick={handleGoogleSignIn}
              className="bg-[#f788c7] rounded-md text-white flex items-center justify-center gap-2 py-2 px-2 md:px-4"
            >
              <FaGoogle className="text-white text-2xl" />
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
