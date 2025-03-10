import React from 'react';
import Hero from "../../components/Hero";
import NameCard from "../../components/NameCard";
import Feed from "../../components/Feed"
import VideoFeed from "../../components/VideoFeed"




const index = () => {
    const heroText = "Stay Updated About Us";
    const heroImage = ["/news.jpg"];
    const name = "News and Media";

    const messageText = [
        {
            text: "Highlights from the Inaugural Meeting of the Board of Advisors/Directors. Friday, 29th November at PC Hotel, Lahore. This milestone event brought together our esteemed board members for strategic discussions to shape our growth and innovation roadmap. We extend our heartfelt gratitude for their invaluable insights. Together, we move forward with renewed vision and determination.",
            image: "/feed1.jpg",
        },
        {
            text: "Eastern Group of Companies. We are pleased to announce the First Meeting of the Board of Advisors/Directors, taking place today at the Pearl Continental Hotel, Lahore. Date: 29th November 2024. Time: 3:00 PM – 5:00 PM. Venue: Zaver Board Room, Pearl Continental Hotel - Lahore. This inaugural meeting marks a significant milestone, setting the stage for strategic discussions on our vision for growth and future advancements. We look forward to welcoming our esteemed Board of Advisors and Directors to this landmark event.",
            image: "/feed2.jpg",
        },
        {
            text: "The 14th of November is designated as World Diabetes Day. The primary goal of this day is to raise public awareness about the impact of diabetes disease, its prevention, and diabetes education.",
            image: "/feed3.jpg",
        },
        {
            text: "Every year on November 13th, World Kindness Day is observed. The main goal of this day is to allow everyone to reflect on and follow one of the most important and unique human principles. This day also promotes small acts of kindness, which bring people together.",
            image: "/feed4.jpg",
        },
        {
            text: "Exciting moments at the International Livestock Agri Fishery Expo 2024 in Peshawar! The Eastern Scientific Corporation team is proud to showcase our innovative solutions for the agriculture and livestock industry at the Expo.",
            image: "/feed5.jpg",
        },
        {
            text: "Exciting moments at the International Livestock Agri Fishery Expo 2024 in Peshawar! The Eastern Scientific Corporation team is proud to showcase our innovative solutions for the agriculture and livestock industry at the Expo.",
            image: "/feed6.jpg",
        },
        {
            text: "We are pleased to announce that Eastern Scientific Corporation is taking part in the upcoming exhibition of International Livestock Agri Fishery Expo 2024. We will be placed at Hall #1, Stall #43 on 09-10 October 2024 (09:00 AM to 05:00 PM) at Gullmakai Palace, Northern Bypass, Peshawar, Khyber Pakhtunkhwa. Looking forward to connecting with you at the event!",
            image: "/feed7.jpg",
        },
        {
            text: "Today marks a special milestone as we proudly inaugurate our signature office of Eastern Scientific Corporation! Thank you to everyone who made this possible. Here's to the new beginnings and endless opportunities!",
            image: "/feed8.jpg",
        },
        {
            text: "Today marks a special milestone as we proudly inaugurate our signature office of Eastern Scientific Corporation! Thank you to everyone who made this possible. Here's to the new beginnings and endless opportunities!",
            image: "/feed9.jpg",
        },
    ];
    

    return (
        <div>
            <Hero text={heroText} images={heroImage} />
            {/* <NameCard name={name}/> */}
            <VideoFeed />
            {messageText.map((item, index) => (
                <Feed
                    key={index}
                    title={item.title}
                    text={item.text}
                    image={item.image}
                    isEven={index % 2 === 0}
                />
            ))}
        </div>
    );
};

export default index;
