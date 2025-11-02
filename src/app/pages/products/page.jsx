import React from 'react';
import Hero from "../../components/Hero";
import NameCard from "../../components/NameCard";
import ProductSection from "../../components/ProductSection";


const index = () => {
  const heroText = "Innovative Products for Every Sector";
  const heroImage = ["/bgproduct.jpeg"];
  const name = "Products We Offer";
  const header = ""

  const TestKits = [
    // { img: '/pt1.png', title: 'Milk Antibiotic Residues', text: "Rapid Test Kit 4 in 1" },
    // { img: '/pt2.png', title: 'Milk Antibiotic Residues', text: "Rapid Test Kit 2 in 1" },
    // { img: '/pt3.png', title: 'Melamine', text: "Milk Rapid Test Kit" },
    // { img: '/pt4.png', title: 'Aflatoxin M1', text: "Milk Rapid Test Kit" },
    // { img: '/pt5.jpg', title: 'Aflatoxin For Feed', text: "Aflatoxin B1 Quantitative Rapid Test Kit for Cereals and Feed" },
    // { img: '/pt8.jpg', title: 'Aflatoxin For Feed', text: "Total Aflatoxin Qualitative Rapid Test Kit for Cereals and Feed" },
    // { img: '/pt6.jpg', title: 'Milk Antibiotic BT (EU)', text: "Milk Antibiotic Residues Rapid Test Kit 2 in 1" },
    // { img: '/pt7.jpg', title: 'Milk Antibiotic BT (EU)', text: "Milk Antibiotic Residues Rapid Test Kit 4 in 1" },
    // { img: '/pt8.png', title: 'Milk Adulteration Screening', text: "Milk Rapid Test Kit" },
    // { img: '/pt00.png', title: 'Lactoquick', text: "Lactoquick for milk & dairy products safety" },
    // { img: '/pt9.png', title: 'Mediquick for human', text: "Mmediquick all range of human health care testing kits" },
    // { img: '/pt10.png', title: 'Aflatoxin For Feed', text: "Aflatoxin B1 Quantitative Rapid Test Kit for Cereals and Feed" },
    // { img: '/pt11.png', title: 'Food Test Kits', text: "All Range of Food and Beverages Rapid Test Kits" },
    // { img: '/pt12.png', title: 'Veterinary Test Kits', text: "All Range of Pets and Livestock Rapid Test Kits" },
    { img: '/pt00.png', title: 'Rapid Test Kits for Milk & Dairy Products Safety', },
    { img: '/pt9.png', title: 'Human Healthcare Testing Kits', },
    { img: '/pt10.png', title: 'Feed Rapid Test Kits',},
    { img: '/pt11.png', title: 'Food & Beverages Rapid Test Kits', },
    { img: '/pt12.png', title: 'Pets & Livestock Rapid Test Kits',},
  ];
  const Reagents = [
    // { img: '/mr1.png', title: 'Microbiology Test Kits', text: "All Range of Food and Beverages Rapid Test Kits" },
    { img: '/mr1.png', title: 'Microbiology Test Kits ' },
    { img: '/mr2.png', title: 'Culture Media', text: "" },
    { img: '/mr3.png', title: 'Count Plates', text: "" },
    { img: '/mr4.png', title: 'Contact Agar Medium', text: "" },
    { img: '/mr5.png', title: 'Swab Sampler', text: "" },
    { img: '/mr6.png', title: 'Liquid Chromogenic Culture Medium', text: "" },
    { img: '/mr7.png', title: 'Sterile Sample Bag', text: "" },
    { img: '/mr8.png', title: 'ATP & Hygiene Measurement', text: "" },
  ];
  const Diagnostic = [
    { img: '/d1.png', title: 'HEMATOLOGY ANALYZERS', text: "" },
    { img: '/d2.png', title: 'CHEMISTRY ANALYZERS', text: "" },
    { img: '/d3.png', title: 'ELISA READER', text: "" },
    { img: '/d4.png', title: 'Blood Banking Instruments', text: "" },
    { img: '/d5.png', title: 'Histopathology Equipment', text: "" },

  ];
  const Analytical = [
    { img: '/a1.png', title: 'Spectroscopy', text: "" },
    { img: '/a2.png', title: 'Chromatography Machine', text: "" },
    { img: '/a3.png', title: 'Stereo Microscopy', text: "" },
    { img: '/a4.png', title: 'Electrochemical Analyzer', text: "" },
    { img: '/a5.png', title: 'Physical Property Analyzers', text: "" },
    { img: '/a6.png', title: 'Electron Microscope', text: "" },
    { img: '/a7.png', title: 'Moisture Analyzer', text: "" },
    { img: '/a8.png', title: 'Analog Refractometer', text: "" },
    { img: '/a9.png', title: 'Digital Refractometer', text: "" },
    { img: '/a10.png', title: 'ph Meter', text: "" },
  ];


  return (
    <div>
      {/* <Hero text={heroText} images={heroImage} /> */}
      {/* <NameCard name={name} /> */}
      <div className="bg-[url('/bg-circle.png')] bg-left bg-cover">
        <h1 className="text-[#042182] text-center text-3xl font-semibold mt-20">{header}</h1>
        <ProductSection cardData={TestKits} header={header} heading="Testing Kits" text="" />
        <ProductSection cardData={Reagents} header={header} heading="MICROBIOLOGY MEDIA AND REAGENTS" text="" />
        <ProductSection cardData={Diagnostic} header={header} heading="Diagnostic Instruments" text="" />
        <ProductSection cardData={Analytical} header={header} heading= "Analytical & Research Instruments" text="" />
      </div>
    </div>
  );
};

export default index;
