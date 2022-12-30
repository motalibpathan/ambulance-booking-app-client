import React from "react";

const FindNearby = () => {
  return (
    <div className="lg:max-w-[1024px] lg:px-0 px-7 w-full mx-auto">
      <h1 className="text-2xl font-bold mb-5">Find near by ambulance</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14604.939640751161!2d90.40310325!3d23.77464785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1671366430675!5m2!1sen!2sbd"
        width="300"
        height="200"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map"
      ></iframe>
      <div className="mb-3"></div>
    </div>
  );
};

export default FindNearby;
