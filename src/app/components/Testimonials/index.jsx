'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Muhammad Nasir',
    designation: ' Head of Corporate Affairs',
    company: ' Friesland Campina Engro Pakistan',
    feedback: 'Eastern Scientic Corporation has been instrumental in helping us maintain the highest food safety standards. Their innovative rapid test kits, reliable lab instruments, and testing services have signicantly enhanced the effectiveness of our quality assurance processes.',
    image: '/person1.png',
    logo: '/company1.png',
  },
  {
    id: 2,
    name: ' Dr. Talat N. Pasha, Hilal-i-Imtiaz, Sitara-i-Imtiaz (H.I.,S.I.)',
    designation: 'Director General (DG)',
    company: ' Punjab Agriculture Food & Drug Authority (PFDA),Lahore',
    feedback: 'Eastern Scientic Corporation offers food safety testing kits and lab equipment that enhance our ability to quickly and accurately detect contaminants. Their commitment to quality and customer satisfaction supports our food safety initiatives.',
    image: '/person2.png',
    logo: '/company2.png',
  },
  {
    id: 3,
    name: 'Dr. Shehzad Amin',
    designation: 'Chief Executive Officer',
    company: ' Dairy Association of Pakistan',
    feedback: 'As the CEO of the Dairy Association of Pakistan, I am extremely satisfied with Eastern Scientic Corporation’s products and services. Their diagnostic kits, analytical instruments, and testing services are highly accurate and meet industry standards. ESC plays a vital role in combating milk adulteration and ensuring product safety. Their professional team provides excellent after-sales support, making ESC a trusted partner in upholding the integrity and quality of Pakistan’s dairy industry.',
    image: '/person3.png',
    logo: '/company3.png',
  }
];

export default function TestimonialsSlider() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      {/* <h2 className="text-3xl font-bold text-center mb-8">Our Testimonials</h2> */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="overflow-hidden"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white p-6 rounded-2xl flex flex-col items-center text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-32 rounded-3xl shadow-xl mb-4 border-2 border-gray-300"
              />
              <p className="text-gray-700 italic mb-4">{testimonial.feedback}</p>
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.designation} at {testimonial.company}</p>
              {/* <img src={testimonial.logo} alt={testimonial.company} className="w-28 h-auto mt-4" /> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
