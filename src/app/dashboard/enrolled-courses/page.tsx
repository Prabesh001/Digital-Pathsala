"use client";
import React, { useState } from "react";
import CourseCard from "@/components/CourseCard";

const courses = [
  {
    id: 1,
    title: "Class 10 C Programming All Important Solution",
    image:
      "https://imgs.search.brave.com/BU1Aqff_r13UuDJuvA_ho2iiBr7bGzjZAXSjfbBiSwk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzBlL1RlcnJhZ2Vu/X3JlbmRlci5qcGc",
    price: 300,
    discountedPrice: 99,
    progress: "enrolled",
  },
  {
    id: 2,
    title: "Complete Web Development Bootcamp: Zero to Hero",
    image:
      "https://imgs.search.brave.com/HO_LdK79ExNq_Du9Y1imfKP9zXkgx-vKCXWDIdx1Otg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLm5h/dGdlb2ZlLmNvbS9u/L2JmNWJhOTM3LWNk/MTEtNDZmMC1hN2Fm/LWI4OGQwYTVmYzU2/Zi8xNi05MTU0ODM4/X3VwbG9hZHNtZW1i/ZXI1MTY2NjJ5b3Vy/c2hvdC01MTY2NjIt/OTE1NDgzOGpwZ19l/a2MzcWN2cnRjNGRp/d3Z5eHdxd3hmNzRi/ZXp4czJ1ZHdhdGph/dmp4ZWZ0Z29veXA0/amZhXzU3NjB4Mzg0/MC5qcGc",
    price: 15000,
    discountedPrice: 1499,
    progress: "active",
  },
  {
    id: 3,
    title: "Python Course: Cobra to Python",
    image:
      "https://imgs.search.brave.com/EuPwZyOF5FhVVPL99lAS_5z_Nr0FUuiTP2qWbiIZ40E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzcyL2Y5/LzRlLzcyZjk0ZTE4/ZWE0NTUxODJkZTg2/MWY3ZDIyYWY5NGE0/LmpwZw",
    price: 15000,
    discountedPrice: 1499,
    progress: "completed",
  },
];

const enrolledCourse = courses.filter(
  (course) => course.progress === "enrolled"
);
const completedCourse = courses.filter(
  (course) => course.progress === "completed"
);
const activeCourse = courses.filter((course) => course.progress === "active");

const Navbar = ({
  activeTab,
  setTab,
}: {
  activeTab: string;
  setTab: (tab: string) => void;
}) => {
  const tabs = ["Enrolled Course", "Active Course", "Completed Course"];
  return (
    <nav className="flex gap-10 px-3 overflow-x-auto lg:overflow-hidden">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`py-2 px-2 text-xl font-medium ${
            activeTab === tab
              ? "border-b-2 text-green-900 border-green-900"
              : "text-black hover:text-green-700"
          }`}
          onClick={() => setTab(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

const Courses = () => {
  const [tab, setTab] = useState("Enrolled Course");

  return (
    <div className="flex h-full mb-4">
      <div className="flex-1 mx-auto">
        <Navbar activeTab={tab} setTab={setTab} />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pt-10 pl-3">
          {tab === "Enrolled Course" &&
            (enrolledCourse.length !== 0 ? (
              enrolledCourse.map((course, i: number) => (
                <CourseCard key={i} isProfile={true} {...course} />
              ))
            ) : (
              <p className="text-center text-xl text-gray-700">
                No courses available.
              </p>
            ))}

          {tab === "Active Course" &&
            (activeCourse.length !== 0 ? (
              activeCourse.map((course, i) => (
                <CourseCard key={i} isProfile={true} {...course} />
              ))
            ) : (
              <p className="text-center text-xl text-gray-700">
                No courses available.
              </p>
            ))}

          {tab === "Completed Course" &&
            (completedCourse.length !== 0 ? (
              completedCourse.map((course, i) => (
                <CourseCard key={i} isProfile={true} {...course} />
              ))
            ) : (
              <p className="text-center text-xl text-gray-700">
                No courses available.
              </p>
            ))}

        </div>
      </div>
    </div>
  );
};

export default Courses;
