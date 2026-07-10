import Link from "next/link";
import React from "react";

const index = () => {
  const textSize = "xl:text-xl 2xl:text-4xl";

  // Common image style for all images
  const imageStyle =
    "w-[90%] md:w-[40%] h-[320px] lg:h-[380px] xl:h-[450px] object-cover rounded-3xl";

  return (
    <div className="px-[5%] py-10 bg-[url('/bg-circle.png')] bg-right bg-cover space-y-16">

      {/* Section 1 */}
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <img
          src="/office.jpeg"
          alt="Office"
          className={imageStyle}
        />

        <p className={`md:w-[40%] w-[90%] ${textSize} text-justify`}>
          <span className="text-lg text-[#042182] font-bold xl:text-xl 2xl:text-4xl">
            Eastern Scientific Corporation (Pvt) Ltd
          </span>{" "}
          Eastern Scientific Corporation (Pvt) Ltd. is a scientific and AgriTech
          company in Pakistan, operating in the food, agriculture, and life
          sciences sectors. As part of the Eastern Group, ESC supports quality,
          safety, and innovation across the agri-food ecosystem. The company
          provides laboratory technologies, diagnostic systems, and analytical
          instruments for food, grain, feed, and pharmaceutical industries,
          along with services such as testing, calibration, and technical
          support to meet regulatory standards.
        </p>
      </div>

      {/* Section 2 */}
      <div className="flex flex-wrap items-center justify-center gap-10">
        <img
          src="/tubes.png"
          alt="Tubes"
          className={`${imageStyle} sm:hidden`}
        />

        <p className={`md:w-[40%] w-[90%] ${textSize} text-justify`}>
          As a trusted leader in the science and technology sector, we offer
          top-notch solutions through partnerships with renowned local
          manufacturers and international principals. Our comprehensive
          portfolio includes advanced testing kits, analytical instruments,
          microbiology media, research solutions, and laboratory supplies. We
          provide services such as commercial lab testing, equipment repair and
          maintenance, calibration, and research support, ensuring precision
          and excellence in every solution.
        </p>

        <img
          src="/tubes.png"
          alt="Tubes"
          className={`${imageStyle} hidden sm:block`}
        />
      </div>

      {/* Section 3 */}
      <div className="flex flex-wrap items-center justify-center gap-10">
        <img
          src="/micro.png"
          alt="Micro"
          className={imageStyle}
        />

        <p className={`md:w-[40%] w-[90%] ${textSize} text-justify`}>
          With numerous certifications and affiliations, we uphold the highest
          standards of quality and professionalism through our extensive sales
          and service network across Pakistan and the surrounding region. At
          ESC, integrity, respect, and professionalism are fundamental. We
          prioritize continuous learning, value diversity, and foster a
          positive, innovative work environment.
        </p>
      </div>

      {/* Core Values + Vision */}
      <div className="flex flex-wrap justify-center items-start gap-10 text-justify">
        <div className={`md:w-[40%] w-[90%] flex flex-col gap-5 ${textSize}`}>

          <h1 className="w-full text-[#042182] text-4xl font-semibold">
            Vision & Mission
          </h1>

          <p>
            Our{" "}
            <span className="text-[#042182] text-lg font-semibold xl:text-xl 2xl:text-4xl">
              Vision
            </span>
            <br />
            To be the trusted leader in science and technology, advancing
            integrated solutions that enhance One Health for a better tomorrow.
          </p>

          {/* <div className="h-[2px] bg-white w-full" /> */}

          <p>
            Our{" "}
            <span className="text-[#042182] text-lg font-semibold xl:text-xl 2xl:text-4xl">
              Mission
            </span>
            <br />
            To provide cutting-edge scientific and technological solutions that
            drive the advancement of One Health, addressing the interconnected
            needs of human, animal, and environmental health. Through
            innovation, collaboration, and excellence, we are dedicated to
            improving health and well-being worldwide, ensuring a healthier and
            more sustainable future for all.
          </p>

                    <h1 className="w-full text-[#042182] text-4xl font-semibold">
            Core Values
          </h1>

          <ul className="list-disc pl-5">
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Collaboration</li>
            <li>Excellence</li>
            <li>Sustainability</li>
            <li>Customer-Centricity</li>
            <li>Quality</li>
          </ul>
        </div>

        <img
          src="/core-value.jpg"
          alt="Core Values"
          className={imageStyle}
        />
      </div>

      {/* CTA */}
      <div className="flex justify-center text-justify">
        <div className="md:w-[80%] w-[90%]">
          <h1
            className={`w-full text-[#042182] text-4xl font-semibold ${textSize}`}
          >
            Join the Leaders in Quality Assurance
          </h1>

          <p className={textSize}>
            Whether you&apos;re in food safety, dairy, veterinary, or industrial
            testing, Eastern Scientific Corporation has the solutions to meet
            your needs.{" "}
            <Link
              href="/pages/contact"
              className="underline text-blue-700"
            >
              Click Here
            </Link>{" "}
            to be a partner with us today and experience excellence.
          </p>
        </div>
      </div>

    </div>
  );
};

export default index;