import React, { useRef } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddClass = () => {
  const { register, handleSubmit, reset } = useForm();
  let { user } = useContext(AuthContext);
  let photoRef = useRef("");

  console.log(user.email);

  const onSubmit = (data) => {
    let formData = new FormData();
    formData.append("image", data.classImage[0]);
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
        let {
          availableSeats,
          className,
          instructorEmail,
          instructorName,
          price,
        } = data;
        axios
          .post(`https://summer-camp-server-henna.vercel.app/add-class`, {
            availableSeats,
            className,
            instructorEmail,
            instructorName,
            price,
            photo: imgdata.data.display_url,
          })

          .then((data) => {
            if(data.status==200){
                Swal.fire({
                    icon: "success",
                    title: "Yahoo...",
                    text: 'Class Created!',
                })
            }
          });
      });

    // reset();
  };

  return (
    <div className="w-[72%]  mt-[20px] mx-[300px]">
      <h2 className="text-2xl text-center font-bold mb-4">Add Class</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="classImage" className="block font-medium">
            Class Image
          </label>
          <input
            type="file"
            id="classImage"
            {...register("classImage")}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="className" className="block font-medium">
            Class Name
          </label>
          <input
            type="text"
            id="className"
            {...register("className", { required: true })}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="instructorName" className="block font-medium">
            Instructor Name
          </label>
          <input
            type="text"
            id="instructorName"
            readOnly
            defaultValue={user?.displayName}
            {...register("instructorName", { required: true })}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="instructorEmail" className="block font-medium">
            Instructor Email
          </label>
          <input
            type="email"
            readOnly
            defaultValue={user?.email}
            id="instructorEmail"
            {...register("instructorEmail", { required: true })}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="availableSeats" className="block font-medium">
            Available Seats
          </label>
          <input
            type="number"
            id="availableSeats"
            {...register("availableSeats", { required: true })}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="price" className="block font-medium">
            Price
          </label>
          <input
            type="text"
            id="price"
            {...register("price", { required: true })}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddClass;
