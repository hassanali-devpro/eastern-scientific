import Hero from "../../components/Hero";
import NameCard from "../../components/NameCard";
import ProductSection from "../../components/ProductSection";



const index = () => {
    const heroText = "Tailored Solutions for Diverse Sectors";
    const heroImage = ["/bgindustries.png"]; 
    const name = "Industries we Serve";
    const text1 = "ESC plays a crucial role in supporting Pakistan’s agricultural economy with cutting-edge diagnostic solutions, analytical instruments, and microbiology media that ensure food safety and quality. Our solutions help farmers, food processors, and regulators comply with stringent local and international food safety standards.";
    const text2 = "ESC offers high-quality diagnostic tools and analytical solutions that support animal health, livestock management, and veterinary professionals in ensuring the well-being of livestock and companion animals. Our products include testing kits for zoonotic diseases, veterinary diagnostics, and laboratory equipment designed for veterinary use.";
    const text3 = "ESC delivers diagnostic instruments, lab consumables, chemicals, and hygiene products to a wide array of industries, ensuring quality control and operational efficiency. Our solutions cover sectors from manufacturing to consumer goods, providing customized support based on specific industry needs.";
    const text4 = "ESC offers healthcare providers rapid diagnostic solutions and testing instruments designed to improve public health outcomes. With a focus on point-of-care diagnostics, we help hospitals, clinics, and laboratories ensure timely and accurate diagnosis of diseases.";
    const text5 = "ESC is committed to fostering the next generation of scientists by providing research institutions and universities with the tools they need to succeed. Our instruments, lab supplies, and research solutions are tailored to support educational advancement and innovative research projects.";
    const servicesData1 = [
        { img: '/ia4.png', title: 'Dairy Processing', text: "Advanced solutions for dairy safety, including milk quality analysis, ice cream plants, and other dairy processing units." },
        // { img: '/ia1.png', title: 'Dairy', text: "Testing kits and instruments for ensuring quality and safety in milk production." },
        { img: '/ia2.png', title: 'Beverages', text: "Testing kits and instruments for quality assurance in juice and soft drink production." },
        { img: '/ia3.png', title: 'Packaged Food', text: "Microbiology media and rapid diagnostics to ensure packaged foods meet safety standards." },
        { img: '/ia5.png', title: 'Edible Oil & Ghee', text: "Quality control tools for oil extraction and ghee production." },
        { img: '/ia6.png', title: 'Bakery & Snacks', text: "Testing kits to ensure the safety of bakery products and snacks." },
    ];
    const servicesData2 = [
        { img: '/iv1.png', title: 'Livestock & Dairy Farms', text: "Advanced diagnostic tools for managing animal health and productivity.  " },
        { img: '/iv2.png', title: 'Poultry Farms', text: "Solutions for disease diagnostics and food safety in poultry production and processing." },
        { img: '/iv5.png', title: 'Companion Animals', text: "Diagnostic kits and instruments for pets such as cats, dogs, and birds." },
        { img: '/iv4.png', title: 'Wildlife & Zoo', text: "Diagnostic support for managing the health of zoo animals and wildlife." },
    ];
    const servicesData3 = [
        { img: '/id1.png', title: 'Cement & Steel', text: "Analytical instruments for quality assurance in material testing." },
        { img: '/id2.png', title: 'Glass & Chemical', text: "Solutions for monitoring production quality in the glass and chemical sectors." },
        { img: '/id3.png', title: 'Textiles & Plastics', text: "Diagnostics and microbiology tools for ensuring compliance with environmental and safety standards." },
        { img: '/id4.png', title: 'Automobile', text: "Laboratory testing for material durability and safety in the automotive industry." },
        { img: '/id5.png', title: 'Consumer Goods & Energy', text: "Diagnostics for quality assurance in consumer product manufacturing and energy production." },
    ];
    const servicesData4 = [
        { img: '/ih1.png', title: 'Public Health', text: "Point-of-care testing solutions for disease control and prevention." },
        { img: '/ih2.png', title: 'Clinical Diagnostics', text: "Instruments and reagents for routine testing in clinical labs." },
        { img: '/ih3.png', title: 'Research Labs', text: "Advanced instruments for medical and healthcare research institutions." },
        { img: '/ih4.jpg', title: 'Pharmaceutical', text: "Cutting-edge tools for pharmaceutical research and development institutions." },

    ];
    const servicesData5 = [
        { img: '/ie1.png', title: 'Universities & Colleges', text: "Research-grade instruments and educational supplies." },
        { img: '/ie2.png', title: 'Research Institutes', text: "Custom research solutions and equipment for academic and industrial research projects." },
    ];



    return (
        <div>
            <Hero text={heroText} images={heroImage} />
            {/* <NameCard name={name}/> */}
            <div className="bg-[url('/bg-circle.png')] bg-left bg-cover">
            <ProductSection cardData={servicesData1} heading="Agri Food" text={text1} />
            <ProductSection cardData={servicesData2} heading="Veterinary Sector" text={text2} />
            <ProductSection cardData={servicesData3} heading="Diversified Industries" text={text3} />
            <ProductSection cardData={servicesData4} heading="Healthcare Sector" text={text4} />
            <ProductSection cardData={servicesData5} heading="Education & Research" text={text5} />
            </div>
        </div>
    );
};

export default index;
