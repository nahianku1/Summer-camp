import { Elements } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
function Payment() {
  let location = useLocation();
  console.log(location.state);
  return (
    <div className="w-[72%]  mt-[20px] mx-[300px]">
      <h2 className="text-2xl w-full  text-center font-bold mb-4">
        Make Payment
      </h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm item={location.state} />
      </Elements>
    </div>
  );
}

export default Payment;
