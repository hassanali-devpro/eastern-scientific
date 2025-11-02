"use client";

import React, { useState } from "react";
import Hero from "../../components/Hero";
import VideoFeed from "../../components/VideoFeed";
import CardModal from "../../components/CardModal";
import media from "../../../constants";

const cardsData = [
  {
    id: 0,
    title: "78th Independence Day & Eastern Tower Inauguration",
    images: [media[45], media[46], media[47]], // Next.js image objects
    description:
      "Eastern Group commemorated Pakistan’s 78th Independence Day with a dignified ceremony at our landmark Eastern Tower in Lahore. We had the privilege of hosting a distinguished gathering, including a delegation from the Lahore Chamber of Commerce, representatives from the Veterinary Business Association, prominent business leaders, esteemed board members, and valued stakeholders. 🎉 The occasion featured a ceremonial cake cutting and the ribbon-cutting inauguration of Eastern Tower, symbolizing a new chapter of growth and excellence. The event concluded with heartfelt prayers for the prosperity of our nation, our community, our group, and our team members who drive our success.",
  },
  {
    id: -1,
    title: "Mango Festival",
    images: [media[40], media[41], media[42], media[43], media[44]],
    description:
      "Eastern Group of Companies proudly hosted the Mango Festival. Bringing together our valued stakeholders, partners, and industry leaders, the festival was a celebration of Pakistan’s rich agricultural heritage and the spirit of collaboration and innovation. From showcasing premium mango varieties to creating a vibrant networking platform, the event highlighted our commitment to strengthening relationships and fostering growth across sectors. It was truly an occasion of sweet success, shared vision, and future opportunities!",
  },
  {
    id: 1,
    title: "DAE 2025",
    images: [media[0], media[1], media[2]],
    description:
      "Showcasing Innovations at Dairy Asia Expo. Our advanced solutions are designed to enhance efficiency, quality, and sustainability in the dairy sector. Engaging discussions and valuable connections made this day truly memorable. A heartfelt thank you to our partners and clients for their support and enthusiasm. Let’s shape the future of dairy together!",
  },
  {
    id: 2,
    title: "EMERSON UNIVERSITY",
    images: [media[3], media[4]],
    description:
      "Our CEO, Mian M Shahbaz, had a productive meeting with Vice Chancellor Prof. Dr. Muhammad Ramzan and the senior board faculty at Emerson University, Multan. We focused on enhancing industry-academia collaboration and introducing a Diploma in Entrepreneurship through our partnership. We had an in-depth conversation on broader cooperation, invaluable for shaping our initiatives. We were honored to receive a Souvenir Shield from Prof. Dr. Ramzan and to present one on behalf of Eastern Scientific Corporation. We are excited about the potential finalization of the MOU, which promises to elevate our efforts and strengthen the industry-academia linkage. This marks the beginning of a journey towards long-term cooperation and shared success.",
  },
  {
    id: 3,
    title: "EMERSON UNIVERSITY MULTAN",
    images: [media[5], media[6], media[7], media[8]],
    description:
      "CEO Keynote Speech Inspires at Emerson University. His inspiring speech sparked meaningful conversations and left a lasting impact on students, faculty, and fellow professionals. A proud moment for our entire team as we continue to shape the future through knowledge and leadership.",
  },
  {
    id: 4,
    title: "ILAFEX",
    images: [media[9], media[10], media[11]],
    description:
      "Successful Participation at ILAFEX Peshawar. The overwhelming response of hundreds of visitors at our stall is truly humbling. Our mission has always been to push the boundaries of what's possible in the realm of science and technology. We thank all who have made this grand event a huge success. Stay tuned for more exciting updates!",
  },
  {
    id: 5,
    title: "UNIVERSITY OF OKARA MOU",
    images: [media[12], media[13], media[14], media[15], media[16]],
    description:
      "We are thrilled to announce that our CEO, Mian Muhammad Shahbaz, was the guest of honor at the National Seminar on World Food Safety Day 2024, themed \"Innovative Food Showcase: Bridging Academia & Industries for Sustainable Food Choices\". This impactful event was hosted by the Department of Food Sciences and Dietetics at the University of Okara. Another proud moment for us was the signing of an MOU between UOK and Eastern Scientific Corporation. This partnership sets the stage for collaboration on various initiatives, including joint research projects, scholarship endowments, internships, and the co-organization of conferences, seminars, and workshops. Stay tuned for more updates as we continue to advance innovation and sustainability in the food industry!",
  },
  {
    id: 6,
    title: "WOMEN’S DAY",
    images: [media[17], media[18]],
    description:
      "Every day is a day to celebrate women! Today, we honor the resilience, brilliance, and impact of the amazing women in our team with heartfelt appreciation and thoughtful gifts. Thank you for your dedication and inspiration!",
  },
  {
    id: 7,
    title: "UCP 2024",
    images: [media[19], media[20], media[21], media[22]],
    description:
      "The founder and CEO, Mian Muhammad Shahbaz, signed the memorandum of understanding between the University of Central Punjab (UCP) and Eastern Scientific Corporation Limited (ESC) represents a significant milestone. This alliance will facilitate collaborative efforts in research, academic programs, internships, and shared events such as conferences and workshops. As ESC and UCP unite, we are poised to strengthen connections between industry and academia moving forward. This partnership is set to drive innovation and sustainability across multiple fields.",
  },
  {
    id: 8,
    title: "SIGNATURE OFFICE",
    images: [media[23], media[24], media[25]],
    description:
      "A new milestone for Eastern Scientific Corporation! Signature Office inauguration, marking a new era of innovation and excellence. This space reflects our commitment to advancing scientific solutions and fostering collaboration. Grateful to our team, partners, and clients for being part of this journey!",
  },
  {
    id: 9,
    title: "IDAEX 2023",
    images: [media[26], media[27], media[28], media[29], media[30]],
    description:
      "Eastern Scientific Corporation was part of the 3rd International Dairy Expo 2023 held at Expo Centre, Lahore from January 28-29. It was a great success. We got an overwhelming response from visitors who showed keen interest in all our products and services.",
  },
  {
    id: 10,
    title: "MNSUAM",
    images: [media[31], media[32], media[33], media[34]],
    description:
      "Our CEO was invited as the Guest of Honour at the training workshop on ‘Fruits & Vegetables Processing for Value Addition,’ held at Muhammad Nawaz Sharif University of Agriculture, Multan. The workshop brought together industry experts, researchers, and students to explore innovative methods of reducing post-harvest losses, improving food quality, and increasing the market value of agricultural produce. It was an inspiring session that highlighted the importance of collaboration between academia and industry to drive sustainable agricultural growth.",
  },
  {
    id: 11,
    title: "BOARD OF DIRECTORS | Advisory Meeting.",
    images: [media[35], media[36], media[37]],
    description:
      "The Board of Directors meeting of Eastern Group of Companies convened, where leadership aligned on vision, evaluated key achievements, and outlined actionable strategies for the next quarter. As a future-focused group, Eastern remains committed to the One Health approach, driving innovation across AgriTech, HealthTech, and Biotechnology. This is where direction is set, impact is shaped, and progress begins. Together, we’re shaping a legacy rooted in purpose, progress, and excellence. Eastern Group of Companies — Leading with Excellence™️.",
  },
  {
    id: 12,
    title: "IDEX 2024",
    images: [media[38], media[39]],
    description:
      "We were thrilled to welcome prominent public figures and industry leaders to our stall at the 4th International Dairy Expo. It was an honor to welcome Major General Shahid Mehmood, DG RVFC, and Mr. Asif Awan, President of Livestock Farmers Welfare Association Khyber Pakhtunkhwa, to visit our stall. We presented them with flowers as a gesture of gratitude for their visit. During their time at our stall, we had the privilege of briefing them about Eastern Scientific Corporation, a leading solutions provider in the dairy industry.",
  },
];

console.log(media[45]);

// ✅ FIXED CARD COMPONENT
const Card = ({ card, onClick }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div
      onClick={() => onClick(card)}
      className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition p-4"
    >
      <div className="relative w-full h-48 mb-3">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg animate-pulse">
            <span className="text-gray-400 text-sm">Loading...</span>
          </div>
        )}
        {/* ✅ FIXED HERE */}
        <img
          src={card.images[0]?.src}
          alt={card.title}
          className={`rounded-lg w-full h-48 object-cover transition-opacity duration-300 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => setLoading(false)}
          onError={(e) => {
            setLoading(false);
            e.target.src = "/fallback.png";
          }}
          loading="lazy"
        />
      </div>
      <h3 className="text-lg font-semibold">{card.title}</h3>
    </div>
  );
};

export default function NewsPage() {
  const [selectedCard, setSelectedCard] = useState(null);
  const heroText = "Stay Updated About Us";
  const heroImage = ["/media.jpg"];

  return (
    <div>
      <Hero text={heroText} images={heroImage} />

      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card) => (
          <Card key={card.id} card={card} onClick={setSelectedCard} />
        ))}
      </div>

      {selectedCard && (
        <CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}

      <VideoFeed />
    </div>
  );
}
