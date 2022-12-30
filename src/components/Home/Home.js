import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import BrowseByLocation from "./BrowseByLocation";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header header={true} />
      <Slider />
      <BrowseByLocation />
      <ServiceCards />
      <AboutOurAmbulance />
    </>
  );
};

export default Home;

export const AboutOurAmbulance = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="lg:max-w-[1024px] md:container mx-auto md:pt-10 pb-16 p-5 md:flex items-center md:gap-10">
        <div className="md:w-1/2 w-full">
          <img className="w-full" src="/images/ambulance2.jpg" alt="" />
        </div>
        <div className="md:w-1/2 w-full">
          <h1 className="text-3xl font-bold mb-5">
            About Our Ambulance Service
          </h1>
          <p>
            we additionally paintings very closely with our community healthcare
            group who provide antenatal, postnatal and nursing services and
            different specialist provision inclusive of the quitters scheme.
          </p>
          <p className="mb-3">
            This 24 month benefit covers all ranges of basic upkeep.
            Notwithstanding every one of the things included on the Full
            administration we cover things that are frequently suggested for
            substitution like clockwork.
          </p>
          <p>
            Ipsum dolor sit amet, consectetur adipisicing elit. Minus sit
            voluptates, quis. Soluta libero quam natus veritatis est inventore,
            ipsam, ex vitae sequi nihil eos dicta itaque sit praesentium, id
            error! Ullam, reiciendis at omnis atque.
          </p>
          <button
            onClick={() => navigate("/booking")}
            className="px-7 py-2 text-white bg-[#003580] mt-5"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

const ServiceCards = () => {
  const cardInfo = [
    {
      id: 1,
      icon: payment,
      title: "Online Payment",
      subtitle: "You can pay with Electronic Fund Transfers System (EFT).",
      img: "https://1000logos.net/wp-content/uploads/2021/02/Bkash-logo.png",
    },
    {
      id: 2,
      icon: headset,
      title: "24 hour Online Help",
      subtitle: "You Can Call Our Medical Help Line 24 hours a day, In a Week.",
      phone: ["9871469", "881175160"],
    },
    {
      id: 3,
      icon: emergency,
      title: "Emergency",
      subtitle:
        "Hi and welcome we are ready for emergency vehicle administrations and Medical Services.",
      phone: ["9801874", "9803302"],
    },
  ];
  return (
    <div className="bg-[#003580]">
      <div className="lg:max-w-[1024px] md:container mx-auto md:py-14 p-5 grid md:grid-cols-3 grid-cols-1 my-10 gap-5">
        {cardInfo.map((card, i) => (
          <div
            key={card.id + i}
            className="text-center border rounded-md border-white p-5 text-white"
          >
            <div className="flex items-center justify-center mb-2 text-xl">
              {card.icon}
            </div>
            <h1 className="text-lg font-bold mb-2">{card.title}</h1>
            <p className="text-xs">{card.subtitle}</p>
            <div className="mt-3">
              {card.img && (
                <a href="https://www.bkash.com/">
                  <img
                    className="w-20 bg-white px-2 mx-auto"
                    src={card.img}
                    alt=""
                  />
                </a>
              )}
              {card?.phone?.map((p) => (
                <p key={p}>Hotline: {p}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const payment = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-16 w-16 "
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const headset = (
  <svg
    className="h-16 w-16"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="#fff"
  >
    <path d="M191.1 224c0-17.72-14.34-32.04-32-32.04L144 192c-35.34 0-64 28.66-64 64.08v47.79C80 339.3 108.7 368 144 368H160c17.66 0 32-14.36 32-32.06L191.1 224zM256 0C112.9 0 4.583 119.1 .0208 256L0 296C0 309.3 10.75 320 23.1 320S48 309.3 48 296V256c0-114.7 93.34-207.8 208-207.8C370.7 48.2 464 141.3 464 256v144c0 22.09-17.91 40-40 40h-110.7C305 425.7 289.7 416 272 416H241.8c-23.21 0-44.5 15.69-48.87 38.49C187 485.2 210.4 512 239.1 512H272c17.72 0 33.03-9.711 41.34-24H424c48.6 0 88-39.4 88-88V256C507.4 119.1 399.1 0 256 0zM368 368c35.34 0 64-28.7 64-64.13V256.1C432 220.7 403.3 192 368 192l-16 0c-17.66 0-32 14.34-32 32.04L320 335.9C320 353.7 334.3 368 352 368H368z" />
  </svg>
);
const emergency = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    className="h-16 w-16"
    fill="#fff"
  >
    <path d="M368 0C394.5 0 416 21.49 416 48V96H466.7C483.7 96 499.1 102.7 512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 384C640 401.7 625.7 416 608 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H48C21.49 416 0 394.5 0 368V48C0 21.49 21.49 0 48 0H368zM416 160V256H544V237.3L466.7 160H416zM160 368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464C186.5 464 208 442.5 208 416C208 389.5 186.5 368 160 368zM480 464C506.5 464 528 442.5 528 416C528 389.5 506.5 368 480 368C453.5 368 432 389.5 432 416C432 442.5 453.5 464 480 464zM112 176C112 184.8 119.2 192 128 192H176V240C176 248.8 183.2 256 192 256H224C232.8 256 240 248.8 240 240V192H288C296.8 192 304 184.8 304 176V144C304 135.2 296.8 128 288 128H240V80C240 71.16 232.8 64 224 64H192C183.2 64 176 71.16 176 80V128H128C119.2 128 112 135.2 112 144V176z" />
  </svg>
);
