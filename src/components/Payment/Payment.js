import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const [booking, setBooking] = useState({});
  const id = useParams();
  // const navigation = useNavigation();
  const { treatment, price, appointmentDate, slot } = booking;
  // if(navigation.state === "loading"){
  //     return <Loading></Loading>
  // }
  useEffect(() => {
    fetch(`https://ambulance-booking-backend.onrender.com/booking/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
        console.log(data);
      });
  }, [id]);

  return (
    <div>
      <h3 className="text-3xl">Payment for {treatment}</h3>
      <p className="text-xl">
        Please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate}{" "}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
