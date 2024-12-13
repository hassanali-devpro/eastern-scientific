"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-between items-center w-full fixed top-0 px-6 py-2 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-black bg-opacity-20'
        }`}
    >
      {/* Logo */}
      <div className={`text-${scrolled ? '[#042182]' : 'white'}`}>
        <img src={scrolled ? '/logon.png' : '/logow.png'} alt="Eastern Logo" width="176" height="44" className={`h-11 ${scrolled ? 'w-56 h-14' : 'w-44'}`}  />
      </div>

      {/* Responsive Menu Toggle */}
      <button className="text-white md:hidden focus:outline-none" onClick={() => setisOpen(!isOpen)} >
        <img src={isOpen ? (scrolled ? "/cross1.png" : "/cross.png") : (scrolled ? "/hamberger1.png" : "/hamberger.png")} alt="Menu Icon" width={32} height={32} />
      </button>

      {/* Links and Search */}
      <div className={`${isOpen ? 'block bg-black text-center' : 'hidden'} ${scrolled ? ' bg-white' : ' bg-opacity-20'} md:flex flex-col md:items-end gap-5 absolute md:static top-16 left-0 w-full md:w-auto  md:text-left z-40 p-4 md:p-0`}>
        {/* Search Input */}
        <div className={`w-full md:w-[80%] border-2 ${scrolled ? 'border-[#042182]' : 'border-white'} rounded-3xl mx-auto md:mx-0 flex`} >
          <input type="text" className={`bg-transparent mx-3 my-1 w-full text-${scrolled ? '[#042182]' : 'white'} focus-visible:outline-none placeholder:overflow-hidden placeholder:text-ellipsis placeholder:whitespace-nowrap`} placeholder="Search by keyword or Description" />
          <button className="bg-white cursor-pointer mx-3 my-1 rounded-full">
            <img src="/search.png" alt="Search Icon" width={36} height={36} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row mt-4 md:mt-0 gap-5 ">
          {['Home', 'Products', 'Industries', 'Services', 'About', 'Contact'].map(
            (item, index) => (
              <Link key={index} href={`/pages/${item.replace(/\s+/g, '').toLowerCase()}`} className={`transition-colors duration-300 hover:text-blue-600 ${scrolled ? 'text-[#042182]' : 'text-white'}`} onClick={() => setisOpen(!isOpen)}>
                {item}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
