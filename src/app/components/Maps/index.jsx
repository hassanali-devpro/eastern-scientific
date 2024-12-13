import React from 'react';

const MapEmbed = () => {
    return (
        <div className="w-full flex flex-col items-center bg-[url('/bg-circle.png')] bg-left bg-cover">
            <h1 className=" text-4xl font-semibold py-10 text-[#042182] mx-[5%]">See Our Location on Map</h1>

            <div className="w-[90%] h-[400px] border-2 border-gray-300 rounded-lg overflow-hidden m-[5%] mt-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d859.1571423523023!2d74.26900172404001!3d31.416294324127183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901e7dd2b12fd%3A0x8e6676edd346ca6d!2sEastern%20Scientific%20Corporation!5e0!3m2!1sen!2s!4v1733495413302!5m2!1sen!2s"
                    className="w-full h-full border-none"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>



            </div>
        </div>
    );
};

export default MapEmbed;
