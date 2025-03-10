"use client"
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// Define the validation schema using Yup
const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  resume: Yup.mixed().required("Please upload your resume"),
  position: Yup.string().required("Please select a position"),
  lastQualification: Yup.string().required("Last qualification is required"),
  lastExperience: Yup.string().required("Last experience is required"),
  totalWorkExperience: Yup.number().required("Total work experience is required").min(0, "Experience cannot be negative"),
});

const JobApplicationForm = () => {
  const [formStatus, setFormStatus] = useState(null);

  // Initialize useForm with the Yup validation resolver
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    setFormStatus("Thank you for your application! We'll get back to you soon.");
    // You can send the data to a backend or service here
    console.log(data); // Log the form data to check
  };

  return (
    <div className="container mx-auto px-[10%] py-16 bg-[url('/bg-circle.png')] bg-left bg-cover rounded-lg">
      <h2 className="text-4xl font-bold text-center text-gray-700 mb-8">Application Form</h2>
      <div className=" space-y-6 lg:w-[50%] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                {...register("fullName")}
                className="mt-2 block w-full p-4 text-gray-700 rounded-full border-2 border-blue-800 py-2 px-4 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-transform"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="mt-2 block w-full p-4 text-gray-700 rounded-full border-2 border-blue-800 py-2 px-4 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-transform"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <PhoneInput
                international
                defaultCountry="PK"
                {...register("phone")}
                onChange={(value) => setValue("phone", value)}
                className="mt-2 block w-full p-4 text-gray-700 rounded-full bg-white border-2 border-blue-800 py-2 px-4 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-transform"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            {/* Resume Upload */}
            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                Resume (PDF or Word)
              </label>
              <input
                type="file"
                id="resume"
                {...register("resume")}
                className="mt-2 block w-full p-4 text-gray-700 rounded-full bg-white border-2 border-blue-800 py-2 px-4 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-transform"
              />
              {errors.resume && <p className="text-red-500 text-sm">{errors.resume.message}</p>}
            </div>

            {/* Position Applied For */}
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                Position Applied For
              </label>
              <select
                id="position"
                {...register("position")}
                className="mt-2 block w-full p-4 text-gray-700 rounded-full border-2 border-blue-800 py-2 px-4 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-transform"
              >
                <option value="">Select a Position</option>
                <option value="laboratory_technician">Laboratory Technician</option>
                <option value="calibration_engineer">Calibration Engineer</option>
                <option value="research_scientist">Research Scientist</option>
              </select>
              {errors.position && <p className="text-red-500 text-sm">{errors.position.message}</p>}
            </div>

            {/* Last Qualification */}
            <div>
              <label htmlFor="lastQualification" className="block text-sm font-medium text-gray-700">
              Relevant Qualification
              </label>
              <input
                type="text"
                id="lastQualification"
                {...register("lastQualification")}
                className="mt-2 block w-full p-4 text-gray-700 rounded-full border-2 border-blue-800 py-2 px-4 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-transform"
              />
              {errors.lastQualification && <p className="text-red-500 text-sm">{errors.lastQualification.message}</p>}
            </div>

            {/* Last Experience */}
            <div>
              <label htmlFor="lastExperience" className="block text-sm font-medium text-gray-700">
              Relevant Experience
              </label>
              <input
                type="text"
                id="lastExperience"
                {...register("lastExperience")}
                className="mt-2 block w-full p-4 text-gray-700 rounded-full border-2 border-blue-800 py-2 px-4 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-transform"
              />
              {errors.lastExperience && <p className="text-red-500 text-sm">{errors.lastExperience.message}</p>}
            </div>

            {/* Total Work Experience */}
            <div>
              <label htmlFor="totalWorkExperience" className="block text-sm font-medium text-gray-700">
                Total Work Experience (in years)
              </label>
              <input
                type="number"
                id="totalWorkExperience"
                {...register("totalWorkExperience")}
                className="mt-2 block w-full p-4 text-gray-700 rounded-full border-2 border-blue-800 py-2 px-4 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-transform"
              />
              {errors.totalWorkExperience && <p className="text-red-500 text-sm">{errors.totalWorkExperience.message}</p>}
            </div>
          </div>

          {formStatus && (
            <div className="text-center text-green-600 font-medium mt-4">
              {formStatus}
            </div>
          )}

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-[#0064AD] text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
