"use client";
import React, { useEffect, useState } from "react";
import { instructorNav, tutorNav } from "@/data/cardData";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaSquarePlus, FaUser, FaStar } from "react-icons/fa6";
import {startCase} from "lodash";

export default function Tutor({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [selectedIndex, setSelectedIndex] = useState("dashboard");
  const router = useRouter();
  const location = usePathname();

  useEffect(() => {
    const myUrl = location.split("/")[2] || location.split("/")[1];
    setSelectedIndex(startCase(myUrl));
  }, [location]);

  const isTutor: boolean = false;

  return (
    <main className="bg-white">
      <div className="profile px-4 bg-white sm:px-8 md:px-16 lg:px-36 flex flex-col sm:flex-row justify-between items-center py-6">
        <div className="flex items-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0">
          <Image
            src="/images/Mr. Sulav Acharya.png"
            alt="Profile Image"
            width={40}
            height={40}
            className="h-24 w-24 rounded-full border-4 border-gray-300 object-cover"
          />
          <div className="text-center sm:text-left">
            <h2 className="font-bold text-xl text-gray-800">Sulav Acharya</h2>
            <div className="flex items-center md:justify-start justify-center pt-2 ">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span className="text-yellow-300" key={i}>
                    <FaStar />
                  </span>
                ))}
            </div>
          </div>
        </div>

        {isTutor ? (
          <div className="button">
            <Link
              href="/dashboard/createcourse"
              className="border text-green-500 hover:bg-green-500 hover:text-white rounded-lg border-green-500 px-4 py-2 transition text-center flex items-center gap-2"
            >
              <FaSquarePlus />
              <span>Create a New Course</span>
            </Link>
          </div>
        ) : (
          <div className="button">
            <Link
              href="/applyforinstructor"
              className="border text-green-500 hover:bg-green-500 hover:text-white rounded-lg border-green-500 px-4 py-2 transition text-center flex items-center gap-2"
            >
              <FaUser />
              <span>Become an Instructor</span>
            </Link>
          </div>
        )}
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
                      `/dashboard/${
                        nav.title === "Question & Answer"
                          ? "q&a"
                          : nav.title === "Dashboard"
                          ? "/"
                          : `${nav.title.toLowerCase().replaceAll(" ", "-")}`
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

          {isTutor && (
            <div className="instructor border-t border-t-stone-800 mt-4 z-50">
              <h4 className="text-gray-400 text-md pl-2">Instructor</h4>
              <nav>
                {instructorNav?.map((nav, i) => (
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
          )}
        </div>

        <div className="w-full h-full">{children}</div>
      </div>
    </main>
  );
}
