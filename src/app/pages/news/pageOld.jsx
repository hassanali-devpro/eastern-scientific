import React from 'react';
import Hero from "../../components/Hero";
import NameCard from "../../components/NameCard";
import Feed from "../../components/Feed"
import VideoFeed from "../../components/VideoFeed"




const index = () => {
    const heroText = "Stay Updated About Us";
    const heroImage = ["/media.jpg"];
    const name = "News and Media";

    const messageText = [
        {
            title: "CEO Guest of Honour at Agriculture Processing Workshop",
            text: "Our CEO was invited as the Guest of Honour at the training workshop on ‘Fruits & Vegetables Processing for Value Addition,’ held at Muhammad Nawaz Sharif University of Agriculture, Multan.",
            text1: "The workshop brought together industry experts, researchers, and students to explore innovative methods of reducing post-harvest losses, improving food quality, and increasing the market value of agricultural produce.",
            text2: "It was an inspiring session that highlighted the importance of collaboration between academia and industry to drive sustainable agricultural growth.",
            image: "/news/1.jpg",
        },
        {
            title: "CEO Keynote Speech Inspires at Emerson University",
            text: "Honored to see our CEO take the stage as a keynote speaker at Emerson University, where he shared visionary insights on innovation, leadership, and the future of our industry.",
            text1: "His inspiring speech sparked meaningful conversations and left a lasting impact on students, faculty, and fellow professionals.",
            text2: "A proud moment for our entire team as we continue to shape the future through knowledge and leadership.",
            image: "/news/2.jpg",
        },
        {
            title: "CEO to Deliver Keynote Address at Emerson University Multan",
            text: "A proud moment for Eastern Scientific Corporation as our Chairman & CEO, Mian M. Shahbaz, is set to deliver the keynote address at Emerson University Multan.",
            text1: "His address will highlight the importance of academia-industry collaboration in fostering innovation, enhancing research capabilities, and equipping the next generation with industry-relevant skills for a stronger, innovation-driven future.",
            text2: "",
            image: "/news/3.jpg",
        },
        {
            title: "Participation at 10th Industrial & Education Expo",
            text: "Eastern Scientific Corporation at the 10th Industrial & Education Expo! We were excited to be part of the prestigious event at Government College University, Faisalabad.",
            text1: "Our team proudly showcased advanced scientific equipment and innovative research solutions, while connecting with students, educators, and industry professionals.",
            text2: "Together, we’re shaping the future of science and technology!",
            image: "/news/4.jpg",
        },
        {
            title: "Landmark MoU with Golden Eagle Agriculture & Livestock Services",
            text: "Eastern Scientific Corporation and Golden Eagle Agriculture & Livestock Services Company (Kabul, Afghanistan) have signed a landmark MoU, marking a significant step toward advancing agricultural innovation, sustainable livestock management, and food security.",
            text1: "This partnership aims to integrate cutting-edge technology, research-driven solutions, and industry expertise to enhance productivity and efficiency in Afghanistan’s agriculture and livestock sector.",
            text2: "",
            image: "/news/5.jpg",
        },
        {
            title: "Showcasing Innovations at Dairy Asia Expo",
            text: "It was a privilege to host industry leaders and public figures at our stall at the Dairy Asia Expo, where we showcased Eastern Scientific Corporation’s latest innovations in dairy technology.",
            text1: "Our advanced solutions are designed to enhance efficiency, quality, and sustainability in the dairy sector. Engaging discussions and valuable connections made this day truly memorable. A heartfelt thank you to our partners and clients for their support and enthusiasm.",
            text2: "Let’s shape the future of dairy together!",
            image: "/news/6.jpg",
        },
        {
            title: "Warm Welcome to Industry Leaders at Dairy Asia Expo",
            text: "We were honored to welcome esteemed public figures and industry leaders to our stall at the Dairy Asia Expo! Their visit was a true privilege, and we expressed our gratitude with a warm floral gesture.",
            text1: "It was an incredible opportunity to share insights about Eastern Scientific Corporation’s innovative solutions for the dairy industry.",
            text2: "Thank you to our valued partners and clients for making this event a remarkable success!",
            image: "/news/7.jpg",
        },
        {
            title: "MoU Signed with University of Central Punjab",
            text: "The founder and CEO Mian Muhammad Shahbaz signed the memorandum of understanding between the University of Central Punjab (UCP) and Eastern Scientific Corporation Limited (ESC) represents a significant milestone.",
            text1: "This alliance will facilitate collaborative efforts in research, academic programs, internships, and shared events such as conferences and workshops.",
            text2: "As ESC and UCP unite, we are poised to strengthen connections between industry and academia moving forward. This partnership is set to drive innovation and sustainability across multiple fields.",
            image: "/news/8.jpg",
        },
        {
            title: "CEO Guest of Honour at World Food Safety Day Seminar",
            text: "EXCITING NEWS!\n\nWe are thrilled to announce that our CEO, Mian Muhammad Shahbaz, was the guest of honor at the National Seminar on World Food Safety Day 2024, themed \"Innovative Food Showcase: Bridging Academia & Industries for Sustainable Food Choices\". This impactful event was hosted by the Department of Food Sciences and Dietetics at the University of Okara.",
            text1: "Another proud moment for us was the signing of an MOU between UOK and Eastern Scientific Corporation. This partnership sets the stage for collaboration on various initiatives, including joint research projects, scholarship endowments, internships, and the co-organization of conferences, seminars, and workshops.",
            text2: "Stay tuned for more updates as we continue to advance innovation and sustainability in the food industry!",
            image: "/news/9.jpg",
        },
        {
            title: "Poultry Sector Tax Discussion at LCCI",
            text: "Our CEO, Mian M. Shahbaz, with his team, participated in an important session at the Lahore Chamber of Commerce and Industry to discuss the implications of increase in taxes for the poultry sector, proposed in the current federal budget.",
            text1: "Chaired by the Vice President of the Lahore Chamber of Commerce and Industry, Mr Adnan Khalid Butt, and convened by Dr. Saleh, Convener of the Veterinary Pharmaceutical Core Committee, the meeting addressed concerns from representatives of the Pakistan Poultry Traders Association and other stakeholders.",
            text2: "The discussion focused on the potential impact of these taxes on poultry sector prices, affecting consumers and urged the government to reconsider the GST hike on veterinary drugs and feed.",
            image: "/news/10.jpg",
        },
        {
            title: "Sponsorship of 8th International Conference on Halal Food Industry",
            text: "We're proud to announce that Eastern Scientific Corporation recently sponsored the 8th International Conference on the Global Halal Food Industry, which was held on April 24-25 at Jinnah Auditorium, BZU, Multan, Pakistan.",
            text1: "This event was a remarkable platform for sharing insights on Halal food trends, standards, and sustainability efforts.",
            text2: "We brought together leading local and international experts and professionals to advance the future of the Halal industry. A heartfelt thank you to all the participants and organizers for making this conference a monumental success!",
            image: "/news/11.jpg",
        },
        {
            title: "CEO Guest of Honour at World Food Safety Day Seminar Announcement",
            text: "We are proud to share that our CEO, Mian Muhammad Shahbaz, will be the Guest of Honour at this year’s National Seminar on World Food Safety Day.",
            text1: "We look forward to engaging in vital discussions about ensuring food safety worldwide and contribute to this important dialogue on global food safety standards.",
            text2: "",
            image: "/news/12.jpeg",
        },
        {
            title: "Celebrating Success at Recent Dairy Expo",
            text: "It’s time to celebrate our success at the recent Dairy Expo! Visitors were captivated by our commitment to delivering cutting edge solutions in the industry.",
            text1: "It was quite heartening to receive their positive feedback. We are energized and motivated to continue on our journey for leading positive change in the dairy sector.",
            text2: "",
            image: "/news/13.jpeg",
        },
        {
            title: "Commemoration of Quaid-e-Azam Day at LCCI",
            text: "Eastern Scientific Corporation was part of a memorable celebration on #QuaideAzamDay at the Lahore Chamber of Commerce.",
            text1: "Our team, along with the President, LCCI, and core committee members of the Veterinary Pharmaceuticals Association, came together for a meaningful cake-cutting ceremony.",
            text2: "It was a humbling experience as we paid tribute to the visionary leader.",
            image: "/news/14.jpg",
        },
        {
            title: "Engaging Visitors at Dairy Asia Expo 2023",
            text: "At Dairy Asia Expo 2023, enthusiastic visitors interacted with our team of experts to discuss their specific needs and how our cutting edge solutions can benefit their dairy operation.",
            text1: "They experienced firsthand how Eastern Scientific Corporation is revolutionizing the dairy industry.",
            text2: "",
            image: "/news/15.jpg",
        },
        {
            title: "Success at Dairy Asia Expo 2023",
            text: "Dairy Asia Expo 2023 drew huge crowds and proved a major success! As an industry leader, Eastern Scientific Corporation has always leveraged such platforms to showcase its innovations and share insights.",
            text1: "We stand by our commitment to enhance the efficiency and sustainability of dairy business and make a positive impact on the industry.",
            text2: "",
            image: "/news/16.jpg",
        },
        {
            title: "Leadership Recognized at World Food Day Celebrations",
            text: "TEAM EASTERN SCIENTIFIC CORPORATION\nAt World Food Day Celebrations, Department of Food Science & Technology, UCP.",
            text1: "Eastern Scientific Corporation leads the industry in agrifood and food safety. This contribution was recognized and highly appreciated at the recently held World Food Day Celebrations organized by the University of Central Punjab, Lahore.",
            text2: "The event was co-sponsored by Eastern Scientific Corporation in line with its mission to develop and promote linkages between industry and academia.",
            image: "/news/17.jpg",
        },
        {
            title: "Successful Participation at ILAFEX Peshawar",
            text: "We are thrilled to share our experience at ILAF",
            text1: "The overwhelming response of hundreds of visitors at our stall is truly humbling. Our mission has always been to push the boundaries of what's possible in the realm of science and technology.",
            text2: "We thank all who have made this grand event a huge success. Stay tuned for more exciting updates!",
            image: "/news/18.jpg",
        },
        {
            title: "Sponsorship & Participation at Dairy Forum-2",
            text: "Eastern Scientific Corporation participated in and also sponsored the recently held Dairy Forum-2 event at Faletti’s Hotel Lahore.",
            text1: "Its theme was ‘Achieving Food Security through Climate Resilient Sustainable Dairy Value Chain’. Our Dairy Division marketing team also set up stalls showcasing various milk safety products and services.",
            text2: "This wonderful event provided a great opportunity for the dairy value chain stakeholders to come together and share ideas and expert knowledge.",
            image: "/news/19.jpg",
        },
        {
            title: "Exclusive Partners Bioeasy Group Visit Pakistan",
            text: "EXCITING NEWS! Our exclusive partners from Bioeasy Group visit Pakistan.",
            text1: "We at Eastern Scientific Corporation were thrilled to welcome delegates from our partner Bioeasy, on their recent visit to Pakistan.",
            text2: "It proved a great success in providing both of our companies to discuss new opportunities and strengthen our relationship. Their interaction with different stakeholders helped the visitors gain deeper insight about Pakistan market. We are sure the delegates took back good memories and a renewed resolve to continue working together for delivering market leading solutions to our customers.",
            image: "/news/20.jpg",
        },
        {
            title: "Participation at 3rd International Dairy Expo 2023",
            text: "Eastern Scientific Corporation was part of the 3rd International Dairy Expo 2023 held at Expo Centre, Lahore from January 28-29.",
            text1: "It was a great success. We got an overwhelming response from visitors who showed keen interest in all our products and services.",
            text2: "",
            image: "/news/21.jpg",
        },
    ];




    return (
        <div>
            <Hero text={heroText} images={heroImage} />
            {/* <NameCard name={name}/> */}
            {messageText.map((item, index) => (
                <Feed
                key={index}
                title={item.title}
                text={item.title}
                text1={item.text1}
                text2={item.text2}
                image={item.image}
                isEven={index % 2 === 0}
                />
            ))}
            <VideoFeed />
        </div>
    );
};

export default index;
