import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div className="px-[5%] bg-[url('/bg-circle.png')] bg-right bg-cover">
      {/* <h1 className=" w-full text-[#042182] text-4xl font-semibold text-center my-10 ">Who We Are?</h1> */}
      <div className=" flex flex-wrap items-center justify-center py-5">
        <img src="/office.png" alt="" className="md:w-[40%]" />
        <p className=" md:w-[40%] w-[90%]"><span className=" text-lg text-[#042182] font-bold">Eastern Scientific Corporation (Pvt) Ltd</span> is a leading provider of comprehensive diagnostics, analytical, and research solutions and services across diverse sectors. Our commitment to <span className=" font-semibold"> Science for a Better Tomorrow</span> reflects our dedication to delivering high quality, integrated solutions. We serve sectors including agriculture, food and dairy, veterinary, environmental, healthcare, education, research, and diversified industries.</p>
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
              <li>Integrity</li>
              <li>Excellence</li>
              <li>Innovation</li>
              <li>Customer Focus</li>
              <li>Collaboration</li>
              <li>Sustainability</li>
              <li>Diversity & Inclusion</li>
            </ul>
          </div>
          <h1 className=" w-full p- text-[#042182] text-4xl font-semibold text-start ">Vision & Mission</h1>
          <div className=" bg-gradient-to-r from-[#DAF1FC] to-[#C2E6F8] p-3 rounded-xl">
            <p className="">Our <span className="text-[#042182] text-lg font-semibold">Vision</span> is to be the trusted leader in science and technology, empowering our customers with the innovations they need to succeed.</p>
            <div className="h-[2px] bg-white w-full"></div>
            <p className="">Our <span className="text-[#042182] text-lg font-semibold">Mission</span> is delivering high-quality scientific solutions and technical services with a focus on integrity, professionalism, and customer satisfaction.</p>
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
