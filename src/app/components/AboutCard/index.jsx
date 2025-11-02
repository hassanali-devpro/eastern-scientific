import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div className="px-[5%] bg-[url('/bg-circle.png')] bg-right bg-cover">
      {/* <h1 className=" w-full text-[#042182] text-4xl font-semibold text-center my-10 ">Who We Are?</h1> */}
<div className="flex flex-wrap items-center justify-center py-5">
  <img src="/office.png" alt="Office" className="md:w-[40%]" />
  <p className="md:w-[40%] w-[90%] text-justify">
    <span className="text-lg text-[#042182] font-bold">
      Eastern Scientific Corporation (Pvt) Ltd</span>{" "} is Pakistan’s leading One Health organization, dedicated to redefining the future of science and integrated health solutions. Guided by our philosophy,{" "}
    <span className="font-semibold">“Science for a Better Tomorrow”</span>, we bring cutting-edge diagnostics, analytical technologies, and research-driven solutions to sectors including agriculture, healthcare, education, and government. As exclusive partners of world-renowned brands, we deliver innovation and precision through testing kits, lab equipment, and scientific services. With a nationwide network and global standards, we stand as the country’s first true One Health provider, bridging disciplines to build a healthier tomorrow.
  </p>
</div>

      <div className=" flex flex-wrap items-center justify-center py-5">
        <img src="/tubes.png" alt="" className="md:w-[40%] sm:hidden" />
        <p className=" md:w-[40%] w-[90%]"> As a trusted leader in the science and technology sector, we offer top-notch solutions through partnerships with renowned local manufacturers and international principals. Our comprehensive portfolio includes advanced testing kits, analytical instruments, microbiology media, research solutions, and laboratory supplies. We provide services such as commercial lab testing, equipment repair and maintenance, calibration, and research support, ensuring precision and excellence in every solution.</p>
        <img src="/tubes.png" alt="" className="md:w-[40%] sm:block hidden" />
      </div>
      <div className=" flex flex-wrap items-center justify-center py-5 pb-10">
        <img src="/micro.png" alt="" className="md:w-[40%]" />
        <p className=" md:w-[40%] w-[90%]"> With numerous certifications and affiliations, we uphold the highest standards of quality and professionalism through our extensive sales and service network across Pakistan and the surrounding region. At ESC, integrity, respect, and professionalism are fundamental. We prioritize continuous learning, value diversity, and foster a positive, innovative work environment.</p>
      </div>
      <div className=" flex flex-wrap justify-center">
        <div className="md:w-[40%] w-[90%] flex flex-col gap-5">
          <h1 className=" w-full text-[#042182] text-4xl font-semibold text-start ">Core Values</h1>
          <div className=" bg-gradient-to-r from-[#DAF1FC] to-[#C2E6F8] p-3 rounded-xl">
            <ul className='list-disc pl-5'>
              <li>Innovation</li>
              <li>Integrity</li>
              <li>Collaboration</li>
              <li>Excellence</li>
              <li>Sustainability</li>
              <li>Customer-Centricity</li>
              <li>Quality</li>
            </ul>
          </div>
          <h1 className=" w-full p- text-[#042182] text-4xl font-semibold text-start ">Vision & Mission</h1>
          <div className=" bg-gradient-to-r from-[#DAF1FC] to-[#C2E6F8] p-3 rounded-xl">
            <p className="">Our <span className="text-[#042182] text-lg font-semibold">Vision</span>To be the trusted leader in science and technology, advancing integrated solutions that enhance One Health for a better tomorrow.</p>
            <div className="h-[2px] bg-white w-full"></div>
            <p className="">Our <span className="text-[#042182] text-lg font-semibold">Mission</span> To provide cutting-edge scientific and technological solutions that drive the advancement of One Health, addressing the interconnected needs of human, animal, and environmental health. Through innovation, collaboration, and excellence, we are dedicated to improving health and well-being worldwide, ensuring a healthier and more sustainable future for all.</p>
          </div>
        </div>
        <img src="/core-value.jpg" alt="" className="md:w-[40%] mx-10 rounded-3xl" />
      </div>
      <div className=" flex justify-center my-10 ">
        <div className="md:w-[88%] w-[90%]">
          <h1 className=" w-full p- text-[#042182] text-4xl font-semibold text-start ">Join the Leaders in Quality Assurance</h1>
          <div className=" bg-gradient-to-r from-[#DAF1FC] to-[#C2E6F8] p-3 rounded-xl">
            <p className="">Whether you re in food safety, dairy, veterinary, or industrial testing, Eastern Scientific Corporation has the solutions to meet your needs. <Link href='/pages/contact' className=' underline text-blue-700'>Click Here</Link> be a partner with us today and experience excellence.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
