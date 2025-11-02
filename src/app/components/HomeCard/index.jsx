import Link from 'next/link';
import React from 'react';

const Index = () => {
    return (
        <div className="bg-[url('/dna.png')] bg-center bg-cover bg-[#1BBAC8] bg-opacity-10 py-10">
            <div className="flex flex-col md:flex-row px-[4%] items-center">
                <img src="/office.png" className="w-full md:w-[45%] mb-6 lg:mb-0" alt="Office" />
                <div className="flex flex-col w-full lg:w-[45%] pl-0 lg:pl-[5%]">
                    <h1 className="text-[#042182] text-3xl sm:text-4xl font-bold">About Us</h1>
                    <p className="py-6 sm:py-8 text-lg sm:text-xl">
                        Eastern Scientific Corporation (Pvt) Ltd is Pakistan’s leading One Health organization, dedicated to redefining the future of science and integrated health solutions. Guided by our philosophy, “Science for a Better Tomorrow”, we bring cutting-edge diagnostics, analytical technologies, and research-driven solutions to sectors including agriculture, healthcare, education, and government.
                    </p>
                    <Link href="/pages/about" className='flex items-center justify-between p-1 pl-2 w-36 border-2 border-gray-400 rounded-3xl bg-black bg-opacity-15 hover:bg-opacity-50 cursor-pointer'>
                        <p className=" text-base">View More</p>
                        <img src="/arrow.png" alt="Arrow" className='w-9' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Index;
