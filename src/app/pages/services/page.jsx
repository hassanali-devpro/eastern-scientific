import React from 'react';
import Hero from "../../components/Hero";
import NameCard from "../../components/NameCard";
import ProductSection from "../../components/ProductSection";


const index = () => {
    const heroText = "Quality You Can Trust, Results You’ll Love.";
    const heroImage = ["/bgservices.png"];

    const name = "Services We Offer";
    const header = "";
    const text = "At Eastern Scientific Corporation, we empower industries with the most advanced testing solutions, from rapid test kits to milk testing instruments. Partner with Pakistan’s leading suppliers and take your quality control to the next level.";
    const servicesData = [
        { img: '/testing.png', title: 'Laboratory Testing Services', text: "Providing precise and accurate testing kits for diagnostics across healthcare, veterinary, and agri-food sectors." },
        { img: '/caliberation.png', title: 'Calibration & Repair Services', text: "High-performance instruments for diagnostics, research, and quality assurance in labs across industries." },
        { img: '/researchS.png', title: ' Research Services', text: "ESC delivers diagnostic instruments, lab consumables, chemicals, and hygiene products to a wide array of industries, ensuring quality control and operational efficiency." },
        { img: '/s4.jpg', title: ' Technical Services', text: "We provide installation, preventive maintenance, application support, and gold-level service contracts for laboratory and scientific equipment." },
    ];

    return (
        <div>
            <Hero text={heroText} images={heroImage} />
            <NameCard name={name} />
            <div className="bg-[url('/bg-circle.png')] bg-left bg-cover">
            <ProductSection cardData={servicesData} heading="" text={text} />
            </div>
        </div>
    );
};

export default index;
