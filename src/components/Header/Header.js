import { faTruckMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = ({ header }) => {
  const [user] = useAuthState(auth);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItem = (
    <>
      <Link className="block md:mb-0 mb-3" to={"/find"}>
        Find nearby
      </Link>
      {!user ? (
        <>
          <Link className="block px-3 bg-white py-2 text-black" to={"/login"}>
            Login
          </Link>
          <Link
            className="block px-3 bg-white py-2 text-black"
            to={"/register"}
          >
            Register
          </Link>
        </>
      ) : (
        <>
          {user.email === "admin@gmail.com" ? (
            <Link to={"/manage-bookings"}>Manage Bookings</Link>
          ) : (
            <Link to={"/my-bookings"}>My Bookings</Link>
          )}
          <div>
            {!user.photoURL && userSvg}
            {user.photoURL && (
              <img
                className="w-8 h-8 inline-block rounded-full mr-2"
                src={user.photoURL}
                alt=""
              />
            )}
            {user.displayName}
          </div>
          <button className="py-2 rounded-lg " onClick={() => signOut(auth)}>
            {logoutSvg} <span className="md:hidden inline">Logout</span>
          </button>
        </>
      )}
    </>
  );

  return (
    <div className="bg-[#003580] ">
      <div className="lg:max-w-[1024px] lg:px-0 px-7 py-5 flex justify-between items-center mx-auto relative text-white">
        <div>
          <Link to={"/"} className="border border-white rounded-full p-2 ">
            {/* <img
              className="md:w-52 w-40"
              src={"/images/logo_black.png"}
              alt=""
            /> */}
            <FontAwesomeIcon className="mr-2" icon={faTruckMedical} />
            BD Ambulance
          </Link>
        </div>
        <nav className="hidden md:flex space-x-3 items-center text-xs">
          {navItem}
        </nav>
        <button onClick={() => setIsNavOpen(!isNavOpen)} className="md:hidden">
          {menuSvg}
        </button>
        <div
          className={`md:hidden ${
            !isNavOpen ? "w-32 opacity-0" : "w-1/2 opacity-100"
          } absolute bg-red text-white right-0 p-5 top-[70px] rounded space-y-4 duration-500 z-50`}
        >
          {navItem}
        </div>
      </div>
      {header && (
        <div className="lg:max-w-[1024px] mx-auto py-14 lg:px-0 px-5">
          <h1 className="lg:text-4xl text-white font-bold">
            Booking Emergency Ambulance
          </h1>
          <p className="text-white my-5">
            Get rewarded for your booking - unlock instant savings of 10% or
            more with a free account!
          </p>
          <button className="py-2 px-3 text-white bg-blue-600 text-xs">
            Sign in/ Register
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

const userSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline h-6 w-6 -mt-1 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const logoutSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 inline-block mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
    />
  </svg>
);

const menuSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h8m-8 6h16"
    />
  </svg>
);
