import React from "react";
import { FaStar } from "react-icons/fa6";
import Card from "@/components/CourseCard";

const InstructorProfile: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: "Class 10 C Programming All Important Solution",
      image:
        "https://digitalpathshalanepal.com/wp-content/uploads/2024/09/Complete-C-programming-for-see-students-1.png",
      noOfStudents: 1,
      lectureHour: 1.32,
      prevPrice: 300,
      price: 99,
      instructor: "Bishal Rijal",
      category: "School level",
    },
  ];

  return (
    <main>
      <section>
        <div className="max-w-2xl mx-auto mt-10 p-5">
          {/* Profile Section */}
          <div className="flex md:flex-row flex-col items-center mb-6">
            <img
              src="https://digitalpathshalanepal.com/wp-content/uploads/2024/09/Bishal-Rijal-1.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-full"
            />
            <div className="ml-4 text-left">
              <div className="rating flex">
                <div className="flex items-center">
                  {[...Array(4)].map((_, i) => (
                    <FaStar color="yellow" key={i}/>
                  ))}
                  <FaStar color="lightgray"/>
                  
                </div>
                <div className="count">
                  <span className="font-bold">
                    0.00{" "}
                    <span className="text-gray-600">
                      <sup>(0.00)</sup>
                    </span>
                  </span>
                </div>
              </div>

              <div className="instructor-data">
                <h1 className="text-5xl font-bold">Bishal Rijal</h1>
                <p className="mt-2 text-md">1 Course · 1 Student</p>
              </div>
              <div className="biography py-6">
                <h2 className="font-medium text-2xl text-black">Biography</h2>
                <p className="text-gray-500 py-3">
                  Learner, Educator, Creator!
                </p>
              </div>
            </div>
          </div>

          {/* Course Section */}
          <div className="course">
            <h2 className="font-bold text-2xl">Courses</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 pt-10">
              {courses.map((course, i) => (
                <Card key={i} isProfile={true} {...course} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default InstructorProfile;
