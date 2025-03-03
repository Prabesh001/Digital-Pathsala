"use client";
import React, { useState } from "react";
import { instructorNav, tutorNav } from "@/data/cardData";
import { useRouter } from "next/navigation";

export default function Tutor({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [selectedIndex, setSelectedIndex] = useState("Dashboard");
  const router = useRouter();

  return (
    <main className="bg-white">
      <div className="profile px-4 bg-white sm:px-8 md:px-16 lg:px-36 flex flex-col sm:flex-row justify-between items-center py-6">
        <div className="flex items-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0">
          <img
            src="/images/Mr. Sulav Acharya.png"
            alt="Profile Image"
            className="h-24 w-24 rounded-full border-4 border-gray-300 object-cover"
          />
          <div className="text-center sm:text-left">
            <h2 className="font-bold text-xl text-gray-800">Sulav Acharya</h2>
            <div className="flex items-center pt-2 ">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-300 ml-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
            </div>
          </div>
        </div>

        <div className="button">
          <a
            href="/tutor/createcourse"
            className="border text-green-500 hover:bg-green-500 hover:text-white rounded-lg border-green-500 px-4 py-2 transition text-center"
          >
            <i className="fa-solid fa-square-plus px-2"></i> Create a New Course
          </a>
        </div>
      </div>

      <div className="h-px bg-gray-400 mx-6"></div>
      <div className="flex">
        <div className="w-64 bg-white shadow-lg md:flex flex-col justify-between pl-9 border-r-2 hidden h-fit">
          <div>
            <nav className="mt-4">
              {tutorNav.map((nav, i) => (
                <div
                  onClick={() => {
                    setSelectedIndex(nav.title);
                    router.push(
                      `${
                        nav.title === "Question & Answer"
                          ? "q&a"
                          : nav.title.toLowerCase().replaceAll(" ", "-")
                      }`
                    );
                  }}
                  key={i}
                  className={`${
                    nav.title === selectedIndex &&
                    "bg-green-500 text-white hover:bg-green-500"
                  } flex items-center px-6 py-3 cursor-pointer text-gray-600 hover:bg-gray-100 space-x-3`}
                >
                  <span
                    className={`${
                      selectedIndex === nav.title && "text-white"
                    } text-green-500 `}
                  >
                    {nav.icon}
                  </span>
                  <span className="font-bold text-nowrap">{nav.title}</span>
                </div>
              ))}
            </nav>
          </div>

          <div className="instructor border-t border-t-stone-800 mt-4 z-50">
            <h4 className="text-gray-400 text-md pl-2">Instructor</h4>
            <nav>
              {instructorNav.map((nav, i) => (
                <div
                  onClick={() => {
                    setSelectedIndex(nav.title);
                    router.push(
                      `${
                        nav.title === "Question & Answer"
                          ? "q&a"
                          : nav.title.toLowerCase().replaceAll(" ", "-")
                      }`
                    );
                  }}
                  key={i}
                  className={`${
                    nav.title === selectedIndex &&
                    "bg-green-500 text-white hover:bg-green-500"
                  } flex items-center px-6 py-3 cursor-pointer text-gray-600 hover:bg-gray-100 space-x-3`}
                >
                  <span
                    className={`${
                      selectedIndex === nav.title && "text-white"
                    } text-green-500 `}
                  >
                    {nav.icon}
                  </span>
                  <span className="font-bold text-nowrap">{nav.title}</span>
                </div>
              ))}
            </nav>
          </div>
        </div>

        <div className="w-full h-full">{children}</div>
      </div>
    </main>
  );
}
