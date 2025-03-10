import React from 'react';
import Hero from "../../components/Hero";
import NameCard from "../../components/NameCard";
import AboutCard from "../../components/AboutCard";
// import GlobalPartner from "../../components/GlobalPartner";
import LocalPartner from "../../components/LocalPartner";


const index = () => {
    const heroText = "Get to Know Us Better";
    const heroImage = ["/bgabout.png"];
    const name = "Who We Are?";

    

    return (
        <div>
            <Hero text={heroText} images={heroImage} />
            {/* <NameCard name={name}/> */}
            <AboutCard />
            {/* <GlobalPartner /> */}
            <LocalPartner />
        </div>
    );
};

export default index;
