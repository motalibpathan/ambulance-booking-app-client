import { faWallet, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SingleBooking = ({ booking, refetch }) => {
  const [isCancelling, setIsCancelling] = useState(false);

  const handleCancelBooking = (id) => {
    setIsCancelling(true);
    fetch(`https://ambulance-booking-backend.onrender.com/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "cancel" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        setIsCancelling(false);
      })
      .catch((err) => {
        console.log(err);
        setIsCancelling(false);
      });
  };
  return (
    <div className="border bg-white p-3 rounded-lg ">
      <div className="ml-3 grid md:grid-cols-3 grid-cols-1 gap-5 items-center ">
        <div className="text-sm">
          <h1>
            Booking id: <span className="font-bold"> {booking?._id}</span>{" "}
          </h1>
          <p className="text-red font-bold">
            Date: {new Date(booking.date).toDateString()}
            {new Date(booking.date).toLocaleTimeString()}
          </p>
          <h1>
            Patient Name:{" "}
            <span className="font-bold"> {booking.patientName}</span>
          </h1>
          <p>
            Disease:
            <span className="font-bold"> {booking.disease}</span>
          </p>
        </div>
        <div className="text-sm">
          <p>
            Phone: <span className="font-bold">{booking.phone}</span>
          </p>
          <p>
            Source Location:{" "}
            <span className="font-bold">{booking?.source}</span>
          </p>
          <p>
            Destination Location :{" "}
            <span className="font-bold">{booking?.destination}</span>
          </p>
        </div>
        <div className="md:my-0 my-2 text-sm">
          <p className=" mb-2 ">Status</p>
          {!booking.status && (
            <>
              <span className="px-4 text-yellow-700 rounded-full bg-yellow-200 inline-block py-1">
                Pending
              </span>
              <>
                <button
                  disabled={isCancelling}
                  onClick={() => handleCancelBooking(booking._id)}
                  className="bg-red p-1.5 ml-2 rounded text-white"
                >
                  {isCancelling ? (
                    "Cancelling..."
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faXmark} /> cancel
                    </>
                  )}
                </button>
                <button
                  disabled={isCancelling}
                  className="bg-green-600 p-1.5 ml-2 rounded text-white"
                >
                  <FontAwesomeIcon icon={faWallet} /> Pay
                </button>
              </>
            </>
          )}
          {booking.status === "cancel" && (
            <span className="px-4 bg-red text-white rounded-full inline-block py-1">
              Canceled
            </span>
          )}
          {booking.status === "approved" && (
            <>
              <span className="px-4 text-green-700 rounded-full inline-block py-1 bg-green-200">
                Approved
              </span>
              <p className="mt-2">
                Ambulance Number:{" "}
                <span className="text-green-500 font-bold">
                  {booking.ambulanceNumber}
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleBooking;
