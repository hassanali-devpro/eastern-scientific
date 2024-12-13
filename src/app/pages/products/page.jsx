import React from 'react';
import Hero from "../../components/Hero";
import NameCard from "../../components/NameCard";
import ProductSection from "../../components/ProductSection";


const index = () => {
  const heroText = "Quality You Can Trust, Results You’ll Love.";
  const heroImage = ["/bgproduct.png"];
  const name = "Products We Offer";
  const header = ""

  const TestKits = [
    { img: '/pt1.png', title: 'BSCT', text: "Innovative solutions for diagnostics, enabling accurate and efficient healthcare, veterinary, and agri-food testing." },
    { img: '/pt2.png', title: 'BT (EU)', text: "Advanced tools for precise diagnostics and reliable quality assurance in diverse laboratory settings." },
    { img: '/pt3.png', title: 'Melamin', text: "Comprehensive diagnostic kits and lab supplies for ensuring safety and compliance in critical industries." },
    { img: '/pt4.png', title: 'Aflatoxin M1', text: "Effective testing kits for detecting contaminants and ensuring product safety in food and beverage sectors." },
    { img: '/pt5.jpg', title: 'Mycotoxin', text: "Specialized diagnostic kits designed to identify and mitigate risks of mycotoxin contamination." },
    { img: '/pt6.jpg', title: 'Milk Antibiotic BT (EU)', text: "Reliable detection tools for identifying antibiotics in milk, ensuring food safety and quality." },
    { img: '/pt8.jpg', title: 'Aflatoxin For Feed', text: "Targeted solutions for detecting aflatoxin in feed, safeguarding animal health and productivity." },
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
        <ProductSection cardData={Research} header={header} heading="Reader Instruments" text="" />
        <ProductSection cardData={Microbiology} header={header} heading="Microbiology Media & Reagents" text="" />
      </div>
    </div>
  );
};

export default index;
