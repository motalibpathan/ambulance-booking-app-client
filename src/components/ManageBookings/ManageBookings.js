import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Header from "../Header/Header";
import { loadingSvg } from "../Loading/Loading";

const ManageBookings = () => {
  //   const [bookings, setBookings] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    data: bookings,
    isLoading,
    refetch,
  } = useQuery(["bookings"], () =>
    fetch(`https://ambulance-booking-backend.onrender.com/bookings`).then(
      (res) => res.json()
    )
  );

  //   useEffect(() => {
  //     if (user?.email) {
  //       const url = `https://ambulance-booking-backend.onrender.com/bookings`;
  //       fetch(url)
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //           setBookings(data);
  //           setOrderLoading(false);
  //         });
  //     }
  //   }, [user]);

  if (isLoading) {
    return (
      <>
        <Header header={false} />
        <div className="w-full h-[300px] flex justify-center items-center">
          {loadingSvg}
        </div>
      </>
    );
  }

  if (user.email !== "admin@gmail.com") {
    navigate("/");
  }

  return (
    <>
      <Header header={false} />
      <div className="bg-gray-100">
        <div className="md:container mx-auto p-5 min-h-[500px]">
          <h1 className="text-2xl">All Booking </h1>
          <p>Total Bookings: {bookings?.length}</p>
          {loading && (
            <div className="w-full h-[300px] flex justify-center items-center">
              {loadingSvg}
            </div>
          )}
          <div className="space-y-3 mt-4">
            {bookings.map((booking) => (
              <BookingCard
                key={booking?._id}
                booking={booking}
                refetch={refetch}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageBookings;

const BookingCard = ({ booking, refetch }) => {
  const [ambulanceNumber, setAmbulanceNumber] = useState("");
  const [isCancelling, setIsCancelling] = useState(false);
  const handleAssignAmbulance = (id) => {
    if (ambulanceNumber) {
      fetch(`https://ambulance-booking-backend.onrender.com/bookings/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ ambulanceNumber, status: "approved" }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          refetch();
        });
    }
  };

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
    <>
      <div className="border bg-white p-3 rounded-lg ">
        <div className="ml-3 grid md:grid-cols-3 grid-cols-1 gap-5 items-center ">
          <div>
            <h1>
              Booking id: <span className="font-bold"> {booking?._id}</span>{" "}
            </h1>
            <p className="text-red font-bold">
              Date: {new Date(booking.date).toDateString()}{" "}
              {new Date(booking.date).toLocaleTimeString()}
            </p>
            <h1>
              Patient Name:{" "}
              <span className="font-bold"> {booking.patientName}</span>
            </h1>
            <p>
              Disease:
              <span className="font-bold"> {booking.disease}</span>{" "}
            </p>
          </div>
          <div>
            <p>
              Email: <span className="font-bold">{booking.email}</span>
            </p>
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
          <div className="md:my-0 my-2">
            <p className="">
              Status:{" "}
              {!booking.status ? (
                <span className="">Pending</span>
              ) : (
                <span
                  className={`capitalize px-3 py-1 ${
                    booking.status === "cancel" ? "bg-red" : "bg-green-500"
                  } rounded-full text-white`}
                >
                  {booking.status === "cancel" ? "Cancelled" : booking.status}
                </span>
              )}
            </p>
            {booking.status !== "approved" && booking.status !== "cancel" && (
              <>
                <p>Assign Ambulance: </p>
                <input
                  className="border rounded-md px-2 py-1 border-gray-500"
                  type="text"
                  placeholder="Ambulance Number"
                  value={ambulanceNumber}
                  onChange={(e) => setAmbulanceNumber(e.target.value)}
                />
                <button
                  onClick={() => handleAssignAmbulance(booking?._id)}
                  className="px-3 py-1 bg-yellow-500 text-white"
                >
                  Assign
                </button>

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
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
