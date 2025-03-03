"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import {
  FaClock,
  FaGraduationCap,
  FaLock,
  FaRotate,
  FaSignal,
  FaYoutube,
  FaBookmark,
  FaShare,
} from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CoursePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "qa">("overview");
  const [isPlaying, setIsPlaying] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (title: string) => {
    setOpenAccordion((prev) => (prev === title ? null : title));
  };

  return (
    <div className="px-6 flex flex-col lg:flex-row">
      <div className="left">
        <div className="header">
          <div className="flex items-center pt-6 py-3 pl-3">
            {[...Array(4)].map((_, i) => (
              <FaStar color="#fde047" key={i} />
            ))}
            <FaStar color="gray" />
          </div>

          <div className="course-info px-3">
            <h4 className="text-black font-bold text-3xl">
              Class 10 C Programming All Important Solution
            </h4>
            <div className="flex justify-between">
              <h4 className="text-gray-400 text-md py-6">
                Categories :{" "}
                <span className="text-black font-bold cursor-pointer hover:text-green-600">
                  School level
                </span>
              </h4>
              <div className="flex items-center gap-6">
                <span className="text-gray-500 cursor-pointer hover:text-green-500">
                  <a
                    href="#"
                    className="flex justify-center items-center gap-x-1"
                  >
                    <FaBookmark />
                    Wishlist
                  </a>
                </span>
                <span className="text-gray-500 cursor-pointer hover:text-green-500">
                  <a
                    href="#"
                    className="flex justify-center items-center gap-x-1"
                  >
                    <FaShare /> Share
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="course">
          <div
            className="preview relative w-full max-w-4xl mx-auto bg-black overflow-hidden rounded-lg"
            style={{ paddingTop: "56.25%" }}
          >
            {isPlaying ? (
              <iframe
                id="youtube-player"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/Krn4AzmkfdU?enablejsapi=1&controls=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <img
                  id="thumbnail"
                  className="absolute top-0 left-0 w-full h-full object-fill rounded-lg cursor-pointer"
                  src="https://digitalpathshalanepal.com/wp-content/uploads/2024/09/Complete-C-programming-for-see-students-1.png"
                  alt="Video Thumbnail"
                />
                <button
                  id="playButton"
                  className="absolute inset-0 flex items-center justify-center bg-opacity-50 cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  <svg
                    className="w-16 h-16 text-blue-500 hover:text-blue-700 play-icon"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4.5 3.5l11 7-11 7v-14z" />
                  </svg>
                </button>
              </>
            )}

            <div
              id="controls"
              className="controls-container absolute bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-75 text-white flex items-center justify-between"
            >
              <span id="current-time" className="text-blue-500">
                00:00
              </span>
              <div className="flex-grow mx-4">
                <input
                  id="progress-bar"
                  type="range"
                  defaultValue="0"
                  max="100"
                  className="w-full cursor-pointer"
                />
              </div>
              <button id="volumeButton" className="mx-2">
                🔊
              </button>
              <button id="fullscreenButton" className="mx-2 text-blue-500">
                🔲
              </button>
            </div>
          </div>
        </div>

        <div className="nav">
          <nav className="tabs flex sm:flex-row lg:overflow-x-hidden">
            <button
              className={`tab py-2 px-2 block hover:text-green-500 focus:outline-none font-medium ${
                activeTab === "overview" ? "border-b-2 border-green-500" : ""
              }`}
              onClick={() => setActiveTab("overview")}
            >
              Course Info
            </button>
            <button
              className={`tab py-2 px-2 block hover:text-green-500 focus:outline-none font-medium ${
                activeTab === "qa" ? "border-b-2 border-green-500" : ""
              }`}
              onClick={() => setActiveTab("qa")}
            >
              Reviews
            </button>
          </nav>
          <hr />

          <div id="panels" className="lg:w-2/3 mx-4 lg:mx-8 my-2 min-h-screen">
            {activeTab === "overview" && (
              <div id="overview" className="panel-content">
                <div className="about-course">
                  <h4 className="text-2xl my-4 lg:text-3xl flex font-bold ">
                    About Course
                  </h4>
                  <p>
                    In this course, you'll gain a strong foundation in C
                    programming and learn how to solve a variety of problems
                    using different programming structures.
                  </p>
                </div>
                <div className="whatwillyoulearn">
                  <h4 className="text-2xl my-4 lg:text-3xl flex font-bold ">
                    What Will You Learn?
                  </h4>
                  <ul className="text-gray-600 px-8">
                    {[
                      "VSQ time management",
                      "Sequential problem-solving",
                      "Branching problem-solving",
                      "Looping problem-solving",
                    ].map((item, index) => (
                      <li key={index} className="list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="course-content max-w-[350rem]">
                  <h4 className="text-2xl my-4 lg:text-3xl font-bold">
                    Course Content
                  </h4>
                  <div className="w-full p-6 bg-white rounded-lg shadow-md">
                    {[
                      {
                        title: "VSQ’s Solution",
                        content:
                          "13 VSQ’s Solution – C programming for class 10 Students",
                        time: "10:08",
                      },
                      {
                        title: "Sequential Structure",
                        content:
                          "4 Sequential Structure C programs for class 10 Students",
                        time: "10:08",
                      },
                      {
                        title: "Branching Structure",
                        content:
                          "7 Branching structure C programs for Class 10 Students",
                        time: "31:04",
                      },
                      {
                        title: "Looping Structure",
                        content:
                          "10 Looping structure C programs for Class 10 Students",
                        time: "41:31",
                      },
                    ].map((section, index) => (
                      <div key={index} className="border-b border-gray-300">
                        <button
                          className="accordion w-full text-left flex items-center justify-between p-4 text-lg font-medium text-gray-900 hover:bg-gray-100 focus:outline-none"
                          onClick={() => toggleAccordion(section.title)}
                        >
                          <span className="title">{section.title}</span>
                          <span
                            className={"w-6 h-6 text-gray-500 text-xl transition-all duration-500"}
                          >
                            {openAccordion !== section.title ? <IoIosArrowDown/>: <IoIosArrowUp/>}
                          </span>
                        </button>
                        <div
                          className={`panel p-4 ${
                            openAccordion === section.title ? "" : "hidden"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-900 flex gap-1">
                              <span className="mt-[3px]">
                                <FaYoutube />
                              </span>
                              {section.content}
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600">
                              <span className="time">{section.time}</span>
                              <FaLock />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "qa" && (
              <div id="qa" className="panel-content">
                {/* Add reviews content here */}
              </div>
            )}
          </div>
        </div>
      </div>

      <AsideComponent />
    </div>
  );
};

const AsideComponent = () => {
  return (
    <div className="aside p-6 pt-16">
      <aside>
        <div className="w-full max-w-md p-6 bg-[#F4F6F9] shadow-2xl rounded-lg">
          <div className="text-center mb-4 pt-10 ">
            <span className="text-xl font-semibold text-gray-800">
              Rs 99.00
            </span>
            <span className="line-through text-sm text-gray-400 ml-2">
              Rs 300.00
            </span>
            <button className="block w-40 mt-2 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Add to cart
            </button>
          </div>

          <div className="border-t border-gray-200 pt-4 ">
            {[
              { icon: <FaSignal />, text: "Beginner" },
              { icon: <FaGraduationCap />, text: "1 Total Enrolled" },
              { icon: <FaClock />, text: "1 hour 32 minutes Duration" },
              {
                icon: <FaRotate />,
                text: "September 22, 2024 Last Updated",
              },
            ].map((item, index) => (
              <p
                key={index}
                className="text-lg text-gray-700 mt-2 flex items-center gap-x-1"
              >
                {item.icon}
                {item.text}
              </p>
            ))}
          </div>
        </div>

        <div className="w-full max-w-md px-6 py-2 bg-[#F4F6F9] shadow-2xl mt-6">
          <h4 className="text-md text-gray-700 font-bold py-3">A course by</h4>
          <div className="mt pt-4 flex">
            <img
              src="https://digitalpathshalanepal.com/wp-content/uploads/2024/09/Bishal-Rijal-1-150x150.jpg"
              alt="Instructor"
              className="w-14 h-14 rounded-full"
            />
            <div className="ml-3">
              <p className="text-md font-medium text-gray-800">Bishal Rijal</p>
              <p className="text-md text-gray-500">Educator</p>
            </div>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-4">
            <h4 className="text-2xl font-medium text-gray-800">
              Material Includes
            </h4>
            <ul className="text-md text-gray-600 list-disc list-inside mt-2">
              <li>
                Complete notes of the C programming Will be provided to the
                students
              </li>
            </ul>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-4">
            <h4 className="text-2xl font-medium text-gray-800">Requirements</h4>
            <ul className="text-md text-gray-600 list-disc list-inside mt-2">
              <li>Device to watch video, Internet</li>
            </ul>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-4">
            <h4 className="text-2xl font-medium text-gray-800">Tags</h4>
            <div className="mt-2 flex flex-wrap gap-6">
              {[
                "Class 10 C Programming",
                "Learn coding in Nepal",
                "Nepal most affordable institute",
                "Online teaching platform in Nepal",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-md border border-gray-300 hover:border-green-500 hover:text-green-500 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-gray-200 pt-4">
            <h4 className="text-2xl font-medium text-gray-800">Audience</h4>
            <li className="text-md text-gray-600 mt-2">
              SEE Computer Science Students
            </li>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default CoursePage;
