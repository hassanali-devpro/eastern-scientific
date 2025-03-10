import React from 'react';
import Hero from "../../components/Hero";
import NameCard from "../../components/NameCard";
import Apply from "../../components/Apply";


const index = () => {
    const heroText = "Want to Join Eastern Scientific Corporation?";
    const heroImage = ["/bgcareer.jpg"];
    
    const name = "Careers";

    const descriptionText = "We  serve sectors including agriculture, food  and dairy, veterinary, environmental,  healthcare, education, research, and  diversified industries.";
    const jobOpenings = [
        {
            title: "Laboratory Technician",
            descriptionLink: "/job-descriptions/laboratory-technician.pdf",
        },
        {
            title: "Calibration Engineer",
            descriptionLink: "/job-descriptions/calibration-engineer.pdf",
        },
        {
            title: "Research Scientist",
            descriptionLink: "/job-descriptions/research-scientist.pdf",
        },
    ];

    return (
        <div>
            <Hero text={heroText} images={heroImage} />
            {/* <NameCard name={name}/> */}
            <div className="container mx-auto px-6 pt-16 bg-[url('/bg-circle.png')] bg-left bg-cover">
                <h2 className="text-4xl font-bold text-center mb-6 text-black">
                    Join the Eastern Scientific CorporationTeam
                </h2>
                <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto pb-8">
                    We are always looking for passionate and talented individuals to join our team
                    of scientists, technicians, and industry experts. If you are committed to
                    excellence and innovation in the testing industry, Eastern Scientific Corporationmay be
                    the perfect fit for you.
                </p>
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobOpenings.map((job, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden p-6 transform hover:scale-105 transition-all"
                        >
                            <h3 className="text-2xl font-semibold text-black mb-4">
                                {job.title}
                            </h3>
                            <a
                                href={job.descriptionLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline hover:text-blue-700"
                            >
                                Download Job Description
                            </a>
                        </div>
                    ))}
                </div> */}
            </div>
            <Apply />
        </div>
    );
};

export default index;
