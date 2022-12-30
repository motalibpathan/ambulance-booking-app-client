import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Header from "../Header/Header";
import { loadingSvg } from "../Loading/Loading";
import SingleBooking from "./SingleBooking";

const MyBookings = () => {
  const [user, useLoading] = useAuthState(auth);

  const {
    data: bookings,
    isLoading,
    refetch,
    error,
  } = useQuery(["myBookings"], () =>
    fetch(
      `https://ambulance-booking-backend.onrender.com/bookings?email=${user.email}`
    ).then((res) => res.json())
  );

  const navigate = useNavigate();

  if (user.email === "admin@gmail.com") {
    navigate("/");
  }

  return (
    <>
      <Header />
      <div className="bg-gray-100">
        <div className="lg:max-w-[1024px] md:container mx-auto lg:p-0 p-5 min-h-[500px] ">
          <div className="md:flex justify-between">
            <div>
              <h1 className="text-2xl font-bold">My Booking History</h1>
              <p className="text-red font-bold">
                Total Bookings: {bookings?.length}
              </p>
            </div>

            <button
              onClick={() => navigate("/booking")}
              className="px-7 py-2 text-white rounded-md bg-blue-500 mt-5"
            >
              Book Another
            </button>
          </div>

          {(isLoading || useLoading) && (
            <div className="w-full h-[300px] flex justify-center items-center">
              {loadingSvg}
            </div>
          )}
          {error && (
            <p className="text-redTwo-500">An Error has been occurred</p>
          )}
          <div className="space-y-3 mt-4">
            {bookings?.map((booking) => (
              <SingleBooking
                booking={booking}
                refetch={refetch}
                key={booking?._id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBookings;
