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
    { img: '/pt1.png', title: 'BSCT', text: "Milk Antibiotic Residues Rapid Test Kit 4 in 1 BSCT" },
    { img: '/pt2.png', title: 'BT (EU)', text: "Milk Antibiotic Residues Rapid Test Kit 2 in 1 BT (EU)." },
    { img: '/pt3.png', title: 'Melamin', text: "Milk Rapid Test Kit Melamine Rapid Test." },
    { img: '/pt4.png', title: 'Aflatoxin M1', text: "Milk Rapid Test Kit Aflatoxin M1 Rapid Test" },
    { img: '/pt5.jpg', title: 'Mycotoxin', text: "Mycotoxin Residues Rapid Test Kit Aflatoxin B1 (AFB1) Quantitative Rapid Test Kit for Cereals and Feed" },
    { img: '/pt6.jpg', title: 'Milk Antibiotic BT (EU)', text: "Milk Antibiotic Residues Rapid Test Kit 2 in 1 BT(EU)" },
    { img: '/pt.jpg', title: 'Milk Antibiotic BT (EU)', text: "Milk Antibiotic Residues Rapid Test Kit 4 in 1 BSCT" },
    { img: '/pt8.jpg', title: 'Aflatoxin For Feed', text: "Total Aflatoxin Rapid Test Kit for Cereals and Feed" },
  ];
  const Diagnostics = [
    { img: '/ai1.png', title: '', text: "" },
    { img: '/ai2.png', title: '', text: "" },
    { img: '/ai3.png', title: '', text: "" },
    { img: '/ai4.png', title: '', text: "" },
  ];
  const Research = [
    { img: '/di1.png', title: '', text: "" },
    { img: '/di2.png', title: '', text: "" },
    { img: '/di3.png', title: '', text: "" },
    { img: '/di4.png', title: '', text: "" },
  ];
  const Microbiology = [
    { img: '/m1.png', title: '', text: "" },
    { img: '/m2.png', title: '', text: "" },
    { img: '/m3.png', title: '', text: "" },
    { img: '/m4.png', title: '', text: "" },
  ];


  return (
    <div>
      <Hero text={heroText} images={heroImage} />
      <NameCard name={name} />
      <div className="bg-[url('/bg-circle.png')] bg-left bg-cover">
        <h1 className="text-[#042182] text-center text-3xl font-semibold mt-20">{header}</h1>
        <ProductSection cardData={TestKits} header={header} heading="Testing Kits" text="" />
        <ProductSection cardData={Diagnostics} header={header} heading="Diagnostics Instruments" text="" />
        <ProductSection cardData={Research} header={header} heading="Readers" text="" />
        <ProductSection cardData={Microbiology} header={header} heading="Microbiology Media & Reagents" text="" />
      </div>
    </div>
  );
};

export default index;
