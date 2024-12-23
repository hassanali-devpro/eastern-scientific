import React from 'react';
import Hero from "../../components/Hero";
import NameCard from "../../components/NameCard";
import ContactForm from "../../components/ContactForm";
import Maps from "../../components/maps"


const index = () => {
    const heroText = "We’re Just a Click Away.";
    const heroImage = ["/contact.png"];
    
    const name = "Contact Us";

    const descriptionText = "We  serve sectors including agriculture, food  and dairy, veterinary, environmental,  healthcare, education, research, and  diversified industries.";


    return (
        <div>
            <Hero text={heroText} images={heroImage} />
            <NameCard name={name}/>
            <ContactForm />
            <Maps />
        </div>
    );
};

export default index;
