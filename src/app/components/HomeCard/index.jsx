import Link from "next/link";
import React from "react";

const Index = () => {
  // Responsive Typography
const heading =
  "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#042182] leading-tight";

  const paragraph =
    "text-sm sm:text-base md:text-[17px] lg:text-lg xl:text-xl 2xl:text-2xl leading-7 xl:leading-9";

  const buttonText =
    "text-sm sm:text-base md:text-lg lg:text-xl";

  return (
    <div className="bg-[url('/dna.png')] bg-center bg-cover bg-[#1BBAC8]/10 py-10 lg:py-16">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-[5%]">
        {/* Image */}
        <img
          src="/office.jpeg"
          alt="Office"
          className="w-full lg:w-[45%] rounded-3xl object-cover"
        />

        {/* Content */}
        <div className="w-full lg:w-[45%] flex flex-col">
          <h1 className={heading}>About Us</h1>

          <p className={`py-6 ${paragraph} text-justify`}>
            Eastern Scientific Corporation (Pvt) Ltd. is a scientific and
            AgriTech company in Pakistan, operating across the food,
            agriculture, and life sciences sectors. As part of the Eastern
            Group, a vertically integrated Life Sciences and AgriTech platform,
            ESC supports quality, safety, and innovation within the agri-food
            ecosystem.
          </p>

          <Link
            href="/pages/about"
            className="flex items-center justify-between w-40 sm:w-44 lg:w-48 p-1 pl-4 border-2 border-gray-400 rounded-full bg-black/15 hover:bg-black/30 transition-all duration-300"
          >
            <span className={buttonText}>View More</span>

            <img
              src="/arrow.png"
              alt="Arrow"
              className="w-9 sm:w-10 lg:w-11"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;