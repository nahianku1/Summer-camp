import { sendPasswordResetEmail } from "firebase/auth";
import { useContext, useRef, useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider";
import { useNavigate } from "react-router-dom";
function Reset() {
  let emailref = useRef("");
  let { auth } = useContext(AuthContext);
  let navigate = useNavigate();
  let handleSubmit = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, emailref.current)
      .then(() => {
        navigate("/resetemail");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center items-center h-[100vh] bg-green-200">
      <form
        action=""
        className="bg-white w-[320px] md:w-[400px] py-[30px] rounded-md flex items-center justify-center flex-col gap-3"
      >
        <div className="text-6xl text-green-400">
          <FaRegEnvelope />
        </div>
        <div>
          <label htmlFor="" className="block">
            Email:
          </label>
          <input
            type="email"
            className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
            placeholder="Email"
            onChange={(e) => {
              emailref.current = e.target.value;
            }}
            required
          />
        </div>

        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-green-400 px-4 py-2 rounded-lg text-white font-bold"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Reset;
