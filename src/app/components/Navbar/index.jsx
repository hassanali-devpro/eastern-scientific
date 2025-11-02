"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/pages/about" },
  { label: "Products", path: "/pages/products" },
  { label: "Industries", path: "/pages/industries" },
  { label: "Services", path: "/pages/services" },
  { label: "News & Media", path: "/pages/news" },
  { label: "Contact", path: "/pages/contact" },
  { label: "Careers", path: "/pages/career" },
];

// Titles array from previous request
const allTitles = [
  "Milk Antibiotic Residues", "Melamine", "Aflatoxin M1", "Aflatoxin For Feed", "Milk Antibiotic BT (EU)", "Milk Adulteration Screening", "Mycotoxin for Feed", "Food Test Kits", "Veterinary Test Kits",
  "Microbiology Test Kits", "Culture Media", "Count Plates", "Contact Agar Medium", "Swab Sampler", "Liquid Chromogenic Culture Medium", "Sterile Sample Bag", "ATP & Hygiene Measurement",
  "HEMATOLOGY ANALYZERS", "CHEMISTRY ANALYZERS", "ELISA READER", "Blood Banking Instruments", "Histopathology Equipment",
  "Spectroscopy", "Chromatography Machine", "Stereo Microscopy", "Electrochemical Analyzer", "Physical Property Analyzers", "Electron Microscope", "Moisture Analyzer", "Analog Refractometer", "Digital Refractometer", "ph Meter"
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Suggestion filter
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSuggestions([]);
    } else {
      const filtered = allTitles.filter(title =>
        title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered);
    }
  }, [searchQuery]);

  const renderNavLinks = (className) =>
    navItems.map(({ label, path }) => (
      <li key={label} className="mx-3 whitespace-nowrap">
        <Link href={path} onClick={() => setToggleMenu(false)}>
          <span className={className}>{label}</span>
        </Link>
      </li>
    ));

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out lg:py-0 py-4 ${
        isScrolled ? "bg-white shadow-md" : "bg-black bg-opacity-30"
      }`}
      onMouseEnter={() => setIsScrolled(true)}
      onMouseLeave={() => {
        if (window.scrollY <= 50) setIsScrolled(false);
      }}
    >
      <div className="flex justify-between items-center px-[5%]">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            {!isScrolled ? (
              <img src="/logow.png" className="w-44 " alt="Logo" />
            ) : (
              <img src="/logon.png" className="w-56 h-14" alt="Logo" />
            )}
          </Link>
          <button
            type="button"
            className="lg:hidden text-light"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <FaBars size={26} className={isScrolled ? "text-[#1F3F78]" : "text-white"} />
          </button>
        </div>

        {/* Desktop Search & Nav */}
        <div className="flex flex-col items-end py-4 gap-3 relative">
          <div
            className={`w-full md:w-[60%] border-2 ${
              isScrolled ? "border-[#042182]" : "border-white"
            } rounded-3xl mx-auto md:mx-0 lg:flex hidden relative`}
          >
            <input
              type="text"
              className={`bg-transparent mx-3 my-1 w-full text-${
                isScrolled ? "[#042182]" : "white"
              } focus-visible:outline-none placeholder:text-ellipsis`}
              placeholder="Search By Keyword Or Description"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-white cursor-pointer m-1 rounded-full">
              <img src="/search.png" alt="Search Icon" width={36} height={36} />
            </button>
          </div>

          {/* Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <ul className="absolute top-14 left-0 mt-1 bg-white border border-gray-300 rounded-3xl w-full max-h-60 overflow-y-auto z-60 hidden lg:block">
              {suggestions.map((item, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#042182]"
                  onClick={() => {
                    setSearchQuery(item);
                    setSuggestions([]);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className="hidden lg:flex">
            <ul className={`flex items-center ${isScrolled ? "text-[#1F3F78]" : "text-white"}`}>
              {renderNavLinks("uppercase font-semibold hover:text-[#2E73B0]")}
            </ul>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`fixed inset-0 h-full w-full p-12 z-50 shadow-lg bg-[#1F3F78] transition-all duration-300 ease-in-out transform ${
            toggleMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
          } lg:hidden`}
        >
          <button
            type="button"
            className="absolute top-8 right-8 text-light"
            onClick={() => setToggleMenu(false)}
          >
            <FaTimes size={32} className="text-white" />
          </button>
          <ul className="flex flex-col items-start space-y-8 text-light text-white mt-10">
            {renderNavLinks("uppercase font-semibold text-2xl hover:pl-4 transition-all")}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
