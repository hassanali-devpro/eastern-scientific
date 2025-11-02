"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Index = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_xwuj7fa',
      'template_tnpp8rl',
      form.current,
      'ynzTs5Z2yXAI2CCp-'
    )
    .then((result) => {
      console.log(result.text);
      alert("Message sent successfully!");
    }, (error) => {
      console.log(error.text);
      alert("Failed to send message, please try again.");
    });

    e.target.reset();
  };

  return (
    <div className="p-[5%] bg-[url('/bg-circle.png')] bg-left bg-cover">
      <h1 className="text-start pb-10 text-[#042182] text-xl font-semibold">
        Feel Free to Contact Us, We’re Here to Help You!
      </h1>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center p-[5%]">
        <div className="sm:w-[50%] w-full flex flex-col items-start justify-center gap-2">
          <label className="w-full">Full Name:</label>
          <input type="text" name="user_name" className="w-full rounded-full border-2 border-blue-800 py-1 px-3" placeholder="John David" required />

          <label className="w-full">Phone Number:</label>
          <input type="text" name="user_phone" className="w-full rounded-full border-2 border-blue-800 py-1 px-3" placeholder="+1 234 567 89..." required />

          <label className="w-full">Email:</label>
          <input type="email" name="user_email" className="w-full rounded-full border-2 border-blue-800 py-1 px-3" placeholder="jhondavid@example.com" required />

          <label className="w-full">Message</label>
          <textarea name="message" className="h-40 w-full rounded-3xl border-2 border-blue-800 py-1 px-3" placeholder="Enter your message here..." required />

          <div className="flex justify-end w-full">
            <input type="submit" value="Send" className="rounded-full md:w-20 w-full h-8 border-2 border-blue-800 bg-blue-400 text-white cursor-pointer" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Index;
