import { faTruckMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-xs">
      <div className="lg:max-w-[1024px] md:container mx-auto p-14">
        <div className="md:flex md:mb-14 mb-5">
          <div className="w-2/3">
            {/* <img width={200} src="/images/logo_white.png" alt="" /> */}
            <Link
              to={"/"}
              className="border border-white rounded-full p-2 text-white"
            >
              {/* <img
              className="md:w-52 w-40"
              src={"/images/logo_black.png"}
              alt=""
            /> */}
              <FontAwesomeIcon className="mr-2" icon={faTruckMedical} />
              BD Ambulance
            </Link>
          </div>
          <div className="w-full md:w-1/3 text-white md:flex md: md:mt-0 mt-5">
            <ul className="w-full md:w-1/2 space-y-3">
              <li>About Online Service</li>
              <li>Read our blog</li>
              <li>Sign up to get ambulance</li>
              <li>Add your hospital</li>
            </ul>
            <ul className="w-full md:w-1/2 space-y-3">
              <li>Get help</li>
              <li>Read FAQs</li>
              <li>View all cities</li>
              <li>Hospital near me</li>
            </ul>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between ">
          <p className="text-gray-400 md:order-1 order-2">
            Copyright &copy; -{new Date().getFullYear()} BD Ambulance
          </p>
          <ul className="md:mb-0 mb-3 md:order-2 order-1 md:flex md:space-x-9 text-white">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
