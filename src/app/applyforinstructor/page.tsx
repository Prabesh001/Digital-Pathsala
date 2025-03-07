"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const InstructorRegistration = () => {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <img
            src="https://digitalpathshalanepal.com/wp-content/plugins/tutor/assets/images/instructor-application-received.png"
            alt="Instructor Illustration"
            className="h-64 w-auto"
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Do you want to start your career as an instructor?
        </h1>

        <p className="text-gray-500 mb-6">
          Tell us your qualifications, show us your passion, and begin teaching
          with us!
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => router.push("/register")}
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600"
          >
            <FaArrowUpRightFromSquare /> <span> Apply Now</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default InstructorRegistration;
