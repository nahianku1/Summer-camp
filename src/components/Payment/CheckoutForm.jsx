import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function CheckoutForm({ item }) {
  console.log(item);
  const stripe = useStripe();
  const elements = useElements();
  let [carderror, setCarderror] = useState("");
  let [clientSecret, setClientSecret] = useState("");
  let [processing, setProcessing] = useState(false);
  let { user } = useContext(AuthContext);
  let navigate = useNavigate();
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    axios
      .post("http://localhost:5000/order", {
        ...item,
      })

      .then((data) => setClientSecret(data.data.clientSecret));
  }, []);
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    console.log(card);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCarderror(error.message);
    } else {
      setCarderror("");
      console.log("[PaymentMethod]", paymentMethod);
    }
    console.log(user.displayName, clientSecret);
    stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      })
      .then(function (result) {
        setProcessing(false);
        // Handle result.error or result.paymentIntent
        if (result.error) setCarderror(result.error.message);
        if (result.paymentIntent) {
          console.log(result.paymentIntent.status);
          console.log("paymentIntent:", result.paymentIntent);
          let { amount, created, id, payment_method_types, status } =
            result.paymentIntent;
          let paymentmethod = payment_method_types[0];
          let date = new Date(created);
          console.log(date);
          if (result.paymentIntent.status === "succeeded") {
            axios
              .post(`http://localhost:5000/enrolled-class`, {
                ...item,
                user: user.email,
              })
              .then((data) => {
                if (data.statusText === "OK") {
                  axios
                    .post(`http://localhost:5000/payhistory`, {
                      amount: amount / 100,
                      transactionId: id,
                      paymentmethod,
                      status,
                      user: user.email,
                    })
                    .then((data) => console.log(data));
                  Swal.fire({
                    icon: "success",
                    title: "Yahoo...",
                    text: "Class Enrolled Successfully",
                  });
                  //   navigate('/dashboard/enrolledclasses')
                }
              });
          }
        }
      });
  };

  return (
    <>
      <form className="p-[20px]" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="bg-red-400 mt-[30px] font-bold px-[30px] py-[8px] rounded-md"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {carderror && <p className="text-red-600">{carderror}</p>}
    </>
  );
}

export default CheckoutForm;
