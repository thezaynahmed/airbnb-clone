import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
        fill
        className="object-cover brightness-65"
        alt="Banner Image"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <h2 className="text-sm sm:text-6xl font-bold text-white drop-shadow-lg shadow-black">
          Explore your place to stay
        </h2>
        <button
          className="text-red-500 bg-white px-10 py-4 mt-4 shadow-md rounded-full font-bold my-5 
        hover:shadow-xl active:scale-90 transition duration-150">
          START EXPLORING
        </button>
      </div>
    </div>
  );
}

export default Banner;
