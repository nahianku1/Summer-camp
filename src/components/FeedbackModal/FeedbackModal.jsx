import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FeedbackModal = ({ modalinfo, setOpenModal }) => {
  const { register, handleSubmit, reset } = useForm();
  console.log(modalinfo);
  const onSubmit = (data) => {
    // Perform form submission or data handling logic here
    console.log(data);
    axios
      .put(`http://localhost:5000/addfeedback/${modalinfo._id}`, {
        feedback: data.feedback,
      })
      .then((data) => {
        if (data.statusText === "OK") {
          setOpenModal(false);
          Swal.fire({
            icon: "success",
            title: "Yahoo..",
            text: "Feedback Added Successfully",
          });
        }
      });
    reset();
  };

  return (
    <div className="fixed bg-[rgba(0,0,0,0.5)] inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Leave Feedback</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="feedback" className="block font-medium mb-2">
              Feedback
            </label>
            <textarea
              id="feedback"
              {...register("feedback", { required: true })}
              className="w-full border border-gray-300 px-3 py-2 rounded"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              className="mr-2 text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackModal;
