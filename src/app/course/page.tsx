"use client";

import CategoryFilter from "@/components/CategoryFilter";
import Card from "@/components/CourseCard";
import { FaSliders, FaX } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import React, { useEffect, useState } from "react";
import { cardData } from "@/data/mockdata";

const Course = () => {
  interface CardType {
    price: number;
    prevPrice: number;
    title: string;
    rating: number;
    noOfStudents: number;
    lectureHour: number;
    lecturer: string;
    genre: string;
    thumbnail?: string;
    profilePhoto?: string;
  }

  const [showCategory, setShowCategory] = useState<boolean>(
    window.innerWidth > 1024
  );
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setShowCategory(window.innerWidth > 1024);

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSidebar]);

  const handleCourseSidebarClick = (event: any) => {
    if (event.target.classList.contains("mysidebar")) {
      setShowSidebar(false);
    }
  };

  return (
    <div className="course-page" onClick={handleCourseSidebarClick}>
      <div className="font-sans bg-gradient-to-r from-blue-600 to-purple-500 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Courses
        </h2>
        <p className="text-sm md:text-lg text-gray-200 mx-4 md:mx-0">
          Remember us for quality education at an affordable price.
        </p>
      </div>

      <div className="container mx-auto py-16 px-4 ">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-semibold text-xl mb-4">Courses</h3>

          {!showCategory && (
            <div
              className="bg-green-600 text-white h-max px-3 py-2 rotate-90 rounded-2xl"
              onClick={handleShowSidebar}
            >
              <FaSliders />
            </div>
          )}

          <div
            className={`fixed mysidebar transition-all duration-500
           top-0 bg-white h-screen pt-10 right-0 z-50 shadow-md shadow-black ${
             showSidebar ? "right-0" : "right-[-250px]"
           }`}
          >
            <div
              className="bg-red-600 text-white p-1 cursor-pointer rounded-sm w-max absolute z-10 right-3 top-3"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <RxCross2 size={22} />
            </div>
            <CategoryFilter />
          </div>
        </div>

        <div className="flex justify-end mb-4">
          <select className="p-2 border text-black border-gray-300 rounded-md outline-none w-full md:w-fit lg:m-4">
            <option value="recent">Release Date (newest first)</option>
            <option value="oldest">Release Date (oldest first)</option>
            <option value="ascending">Course Title (a-z)</option>
            <option value="descending">Course Title (z-a)</option>
          </select>
        </div>

        <div className="flex gap-4 justify-between">
          {showCategory && <CategoryFilter />}
          <div className="grid gap-x-4 gap-y-8 xsm:grid-cold-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {cardData.map((c: CardType, i: number) => (
              <Card key={i} isProfile={false} {...c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
