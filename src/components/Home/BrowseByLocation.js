import React from "react";

const BrowseByLocation = () => {
  const locations = [
    {
      id: 1,
      title: "Dhaka",
      img: "https://media.istockphoto.com/id/1210768445/photo/skyscraper-in-dhaka-metropolitan-area.jpg?s=612x612&w=0&k=20&c=qGFV2qpVXkUNtm8KYT2avrSZwcBcoeM9wIp4LdADgrI=",
      href: "/",
    },
    {
      id: 2,
      title: "Chattagram",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/0a/74/f0/27/chittagong-port.jpg",
      href: "/",
    },
    {
      id: 3,
      title: "Sylhet",
      img: "https://sgp1.digitaloceanspaces.com/cosmosgroup/news/9782559_best%20tea%20gardens%20Bangladesh.jpg",
      href: "/",
    },
    {
      id: 4,
      title: "Rajshahi",
      img: "https://www.theindependentbd.com/assets/news_images/Rajshahi-city.jpg",
      href: "/",
    },
  ];
  return (
    <div className="lg:max-w-[1024px] md:container w-full mx-auto lg:p-0 p-5">
      <h1 className="text-2xl font-bold mb-5">Browse By Location</h1>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
        {locations.map((city) => (
          <div key={city.id} className="rounded-md overflow-hidden relative">
            <img
              className="w-full lg:h-[200px] h-[150px] object-cover"
              src={city.img}
              alt=""
            />
            <div className="absolute bottom-3 left-3">
              <h1 className=" text-white font-bold text-xl">{city.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByLocation;
