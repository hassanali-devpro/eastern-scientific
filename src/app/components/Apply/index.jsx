"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

// Yup validation schema
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
  const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("position", data.position);
    formData.append("lastQualification", data.lastQualification);
    formData.append("lastExperience", data.lastExperience);
    formData.append("totalWorkExperience", data.totalWorkExperience);
    formData.append("resume", data.resume[0]);

    try {
      await emailjs.sendForm(
        "service_xwuj7fa",
        "template_wmbre3g",
        "#job-application-form",
        "ynzTs5Z2yXAI2CCp-"
      );
      setFormStatus("Thank you for your application! We'll get back to you soon.");
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setFormStatus("There was an error submitting the form. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto px-[10%] py-16 bg-[url('/bg-circle.png')] bg-left bg-cover rounded-lg">
      <h2 className="text-4xl font-bold text-center text-gray-700 mb-8">Application Form</h2>
      <div className="space-y-6 lg:w-[50%] mx-auto">
        <form id="job-application-form" onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="fullName"
              {...register("fullName")}
              name="fullName"
              className="mt-2 block w-full p-4 rounded-full border-2 border-blue-800"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              {...register("email")}
              name="email"
              className="mt-2 block w-full p-4 rounded-full border-2 border-blue-800"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <PhoneInput
              international
              defaultCountry="PK"
              onChange={(value) => setValue("phone", value)}
              className="mt-2 block w-full p-4 rounded-full border-2 border-blue-800"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            <input type="hidden" {...register("phone")} name="phone" />
          </div>

          {/* Resume */}
          {/* <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume</label>
            <input
              type="file"
              id="resume"
              {...register("resume")}
              name="resume"
              className="mt-2 block w-full p-4 rounded-full border-2 border-blue-800"
            />
            {errors.resume && <p className="text-red-500 text-sm">{errors.resume.message}</p>}
          </div> */}

          {/* Position */}
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position</label>
            <select
              id="position"
              {...register("position")}
              name="position"
              className="mt-2 block w-full p-4 rounded-full border-2 border-blue-800"
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
            <label htmlFor="lastQualification" className="block text-sm font-medium text-gray-700">Qualification</label>
            <input
              type="text"
              id="lastQualification"
              {...register("lastQualification")}
              name="lastQualification"
              className="mt-2 block w-full p-4 rounded-full border-2 border-blue-800"
            />
            {errors.lastQualification && <p className="text-red-500 text-sm">{errors.lastQualification.message}</p>}
          </div>

          {/* Last Experience */}
          <div>
            <label htmlFor="lastExperience" className="block text-sm font-medium text-gray-700">Experience</label>
            <input
              type="text"
              id="lastExperience"
              {...register("lastExperience")}
              name="lastExperience"
              className="mt-2 block w-full p-4 rounded-full border-2 border-blue-800"
            />
            {errors.lastExperience && <p className="text-red-500 text-sm">{errors.lastExperience.message}</p>}
          </div>

          {/* Total Work Experience */}
          <div>
            <label htmlFor="totalWorkExperience" className="block text-sm font-medium text-gray-700">Total Experience (Years)</label>
            <input
              type="number"
              id="totalWorkExperience"
              {...register("totalWorkExperience")}
              name="totalWorkExperience"
              className="mt-2 block w-full p-4 rounded-full border-2 border-blue-800"
            />
            {errors.totalWorkExperience && <p className="text-red-500 text-sm">{errors.totalWorkExperience.message}</p>}
          </div>

          {formStatus && (
            <div className="text-center text-green-600 font-medium mt-4">{formStatus}</div>
          )}

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-[#0064AD] text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition-all"
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
