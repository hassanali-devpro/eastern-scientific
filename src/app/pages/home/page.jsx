import React from "react";
import Hero from "../../components/Hero";
import HomeCard from "../../components/HomeCard";
import HomeSection from "../../components/HomeSection";
import LocalPartner from "../../components/LocalPartner";
import GlobalPartner from "../../components/GlobalPartner";

const index = () => {
  const heroText = "Science For a Better Tomorrow™";
  const industriesData = [
    {
      img: "/agri.png",
      title: "Agri Food",
      text: "Cutting-edge diagnostic solutions, analytical instruments, and microbiology media that ensure food safety and quality.",
    },
    {
      img: "/bgvet.png",
      title: "Veterinary",
      text: "High-quality diagnostic tools and analytical solutions that support animal health, livestock management, and veterinary professionals.",
    },
    {
      img: "/diversified.jpg",
      title: "Diversified Industries",
      text: "ESC delivers diagnostic instruments, lab consumables, chemicals, and hygiene products to a wide array of industries, ensuring quality control and operational efficiency.",
    },
  ];
  const productsData = [
    {
      img: "/testkits.png",
      title: "Testing Kits",
      text: "Providing precise and accurate testing kits for diagnostics across healthcare, veterinary, and agri-food sectors.",
    },
    {
      img: "/diagnostic.png",
      title: "Diagnostic Instruments",
      text: "High-performance instruments for diagnostics, research, and quality assurance in labs across industries.",
    },
    {
      img: "/research.png",
      title: "Research Instruments",
      text: "ESC delivers diagnostic instruments, lab consumables, chemicals, and hygiene products to a wide array of industries, ensuring quality control and operational efficiency.",
    },
  ];
  const servicesData = [
    {
      img: "/testing.png",
      title: "Laboratory Testing Services",
      text: "Providing precise and accurate testing kits for diagnostics across healthcare, veterinary, and agri-food sectors.",
    },
    {
      img: "/caliberation.png",
      title: "Calibration & Repair Services",
      text: "High-performance instruments for diagnostics, research, and quality assurance in labs across industries.",
    },
    {
      img: "/researchS.png",
      title: " Research Services",
      text: "ESC delivers diagnostic instruments, lab consumables, chemicals, and hygiene products to a wide array of industries, ensuring quality control and operational efficiency.",
    },
  ];
  const heroImage = [
    "/bgHome.png",
    "/bghome3.png",
    "/bgHome2.jpeg",
    "/bghome4.png",
    "/bghome5.png",
  ];

  return (
    <div className="">
      <Hero text={heroText} images={heroImage} />
      <HomeCard />
      <HomeSection
        link="/pages/industries"
        header="Industries we serve"
        cardData={industriesData}
      />
      <HomeSection
        link="/pages/products"
        header="Our Products"
        cardData={productsData}
      />
      <HomeSection
        link="/pages/services"
        header="Our Services"
        cardData={servicesData}
      />
      <LocalPartner />
      <GlobalPartner />
    </div>
  );
};

export default index;
