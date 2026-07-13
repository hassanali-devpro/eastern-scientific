import Link from "next/link";
import React from "react";

const Index = () => {
  // Responsive Typography
  const paragraph =
    "text-sm sm:text-base md:text-[17px] lg:text-lg xl:text-xl 2xl:text-2xl leading-7 xl:leading-9";

  const heading =
    "text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-[#042182]";

  const highlight =
    "text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-bold text-[#042182]";

  // Common image style
  const imageStyle =
    "w-[90%] md:w-[40%] h-[320px] lg:h-[380px] xl:h-[450px] object-cover rounded-3xl";

  return (
    <div className="px-[5%] py-10 bg-[url('/bg-circle.png')] bg-right bg-cover space-y-16">
      {/* Section 1 */}
      <div className="flex flex-wrap items-center justify-center gap-10">
        <img src="/office.jpeg" alt="Office" className={imageStyle} />

        <div className={`md:w-[40%] w-[90%] ${paragraph} text-justify`}>
          <span className={highlight}>
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
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-wrap items-center justify-center gap-10">
        <img
          src="/tubes.png"
          alt="Tubes"
          className={`${imageStyle} sm:hidden`}
        />

        <div className={`md:w-[40%] w-[90%] ${paragraph} text-justify`}>
          As a trusted leader in the science and technology sector, we offer
          top-notch solutions through partnerships with renowned local
          manufacturers and international principals. Our comprehensive
          portfolio includes advanced testing kits, analytical instruments,
          microbiology media, research solutions, and laboratory supplies. We
          provide services such as commercial lab testing, equipment repair and
          maintenance, calibration, and research support, ensuring precision and
          excellence in every solution.
        </div>

        <img
          src="/tubes.png"
          alt="Tubes"
          className={`${imageStyle} hidden sm:block`}
        />
      </div>

      {/* Section 3 */}
      <div className="flex flex-wrap items-center justify-center gap-10">
        <img src="/micro.png" alt="Micro" className={imageStyle} />

        <div className={`md:w-[40%] w-[90%] ${paragraph} text-justify`}>
          With numerous certifications and affiliations, we uphold the highest
          standards of quality and professionalism through our extensive sales
          and service network across Pakistan and the surrounding region. At
          ESC, integrity, respect, and professionalism are fundamental. We
          prioritize continuous learning, value diversity, and foster a
          positive, innovative work environment.
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="flex flex-wrap items-center justify-center gap-10">
        {/* Text */}
        <div className={`md:w-[40%] w-[90%] ${paragraph} text-justify`}>
          <h1 className={`${heading} mb-6`}>Vision &amp; Mission</h1>

          <div className="mb-6">
            <h2 className={highlight}>Our Vision</h2>

            <p className="mt-2">
              To be the trusted leader in science and technology, advancing
              integrated solutions that enhance One Health for a better tomorrow.
            </p>
          </div>

          <div>
            <h2 className={highlight}>Our Mission</h2>

            <p className="mt-2">
              To provide cutting-edge scientific and technological solutions that
              drive the advancement of One Health, addressing the interconnected
              needs of human, animal, and environmental health. Through innovation,
              collaboration, and excellence, we are dedicated to improving health and
              well-being worldwide, ensuring a healthier and more sustainable future
              for all.
            </p>
          </div>
        </div>

        {/* Image */}
        <img
          src="/vission.png"
          alt="Vision & Mission"
          className={imageStyle}
        />
      </div>

      {/* Core Values */}
      <div className="flex flex-wrap items-center justify-center gap-10">
        {/* Image */}
        <img
          src="/core-value.jpg"
          alt="Core Values"
          className={imageStyle}
        />

        {/* Text */}
        <div className={`md:w-[40%] w-[90%] ${paragraph} text-justify`}>
          <h1 className={`${heading} mb-6`}>Core Values</h1>

          <ul className="list-disc pl-6 space-y-3">
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Collaboration</li>
            <li>Excellence</li>
            <li>Sustainability</li>
            <li>Customer-Centricity</li>
            <li>Quality</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <div className="w-[90%] max-w-5xl text-justify">
          <h1 className={`${heading} mb-4`}>
            Join the Leaders in Quality Assurance
          </h1>

          <p className={paragraph}>
            Whether you re in food safety, dairy, veterinary, or industrial
            testing, Eastern Scientific Corporation has the solutions to meet
            your needs.{" "}
            <Link
              href="/pages/contact"
              className="underline text-blue-700 hover:text-blue-900 transition-colors"
            >
              Click Here
            </Link>{" "}
            to become our partner today and experience excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;