import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Header from "../Header/Header";
import { LoadingSpinner } from "../Loading/Loading";

const Booking = () => {
  const [formInfo, setFormInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentUser] = useAuthState(auth);
  const handleBookings = (e) => {
    e.preventDefault();
    setLoading(true);
    const url = `https://ambulance-booking-backend.onrender.com/bookings`;
    const bookingData = {
      ...formInfo,
      email: currentUser.email,
      date: new Date(),
    };
    console.log(bookingData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          setFormInfo({});
          toast.success("Your booking success");
          setLoading(false);
          e.target.reset();
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Something went wrong!");
      });
  };
  return (
    <>
      <Header />
      <div className="md:container mx-auto p-5 md:flex justify-center items-center gap-10">
        <div className="md:w-2/5 w-full">
          <img className="w-full" src="/images/ambulance.jpg" alt="" />
        </div>
        <div className="md:w-3/5 w-full">
          <h1 className="font-bold text-xl text-blue-500">
            Application for booking ambulance
          </h1>
          <form
            onSubmit={handleBookings}
            className="p-5 border-2 mt-3 rounded-md"
            action=""
          >
            {[
              { id: 1, label: "Patient Name", name: "patientName" },
              { id: 2, label: "Patient Disease", name: "disease" },
              { id: 3, label: "Contact Number", name: "phone" },
              { id: 4, label: "Source City ", name: "source" },
              { id: 5, label: "Destination City", name: "destination" },
            ].map((data) => (
              <div className="mt-2">
                <label className="font-bold inline-block" htmlFor="">
                  {data.label}
                </label>
                <input
                  className="w-full border-2 px-3 py-2 mb-3 rounded-md"
                  type="text"
                  onChange={(e) =>
                    setFormInfo({ ...formInfo, [data.name]: e.target.value })
                  }
                  required
                  value={formInfo[data.name]}
                />
              </div>
            ))}
            <button
              className="mt-3 px-7 py-2 bg-blue-500 rounded-md text-white cursor-pointer"
              disabled={loading}
            >
              {loading ? <LoadingSpinner size="6" /> : "Book Ambulance"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;
