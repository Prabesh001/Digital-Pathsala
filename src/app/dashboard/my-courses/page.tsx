"use client";
import { useState } from "react";
import { FaStar, FaEye, FaSquarePlus } from "react-icons/fa6";
import Card from "@/components/CourseCard";

const InstructorCourses = () => {
  const [activeTab, setActiveTab] = useState<"publish" | "pending" | "draft">(
    "publish"
  );

  const courses = {
    publish: [
      {
        title: "Class 10 C Programming All Important Solution",
        image:
          "https://digitalpathshalanepal.com/wp-content/uploads/2024/09/Complete-C-programming-for-see-students-1-768x402.png",
        originalPrice: "Rs 300.00",
        discountedPrice: "Rs 99.00",
      },
      {
        title: "Complete Web Development Bootcamp: Zero to Hero",
        image:
          "https://digitalpathshalanepal.com/wp-content/uploads/2024/09/98a3efb3-4be0-40da-a804-0ce103d57e6e-768x577.webp",
        originalPrice: "Rs 15,000.00",
        discountedPrice: "Rs 1,499.00",
      },
    ],
    pending: [
      {
        title: "Namaskar React JS: Basic to Advance",
        image:
          "https://digitalpathshalanepal.com/wp-content/uploads/2024/09/5-768x377.webp",
        originalPrice: "Rs 5,000.00",
        discountedPrice: "Rs 999.00",
      },
    ],
    draft: [
      {
        title: "The complete MERN Course in Nepali",
        image:
          "https://digitalpathshalanepal.com/wp-content/uploads/2024/09/Colorful-fun-Character-Description-presentation-768x377.webp",
        originalPrice: "Rs 15,000.00",
        discountedPrice: "Rs 1,499.00",
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <div className="mx-2 px-3 tabs flex sm:flex-row  lg:overflow-x-hidden gap-10 md:gap-36">
          {(["publish", "pending", "draft"] as const).map((tab) => (
            <button
              key={tab}
              className={`text-black py-2 px-2 font-medium text-xl border-b-2 ${
                activeTab === tab
                  ? "border-green-700 text-green-700"
                  : "border-transparent hover:text-green-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} (
              {courses[tab].length})
            </button>
          ))}
        </div>

        <div className="mx-auto p-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pt-10 pl-3">
            {courses[activeTab].map((course, index) => (
              <Card key={index} isProfile={true} {...course} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default InstructorCourses;
