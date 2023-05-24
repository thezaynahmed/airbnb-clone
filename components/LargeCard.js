import React from "react";
import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image src={img} fill className="object-cover rounded-2xl" />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-5xl text-black font-semibold mb-3 w-72">{title}</h3>
        <p className="text-black font-medium">{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
