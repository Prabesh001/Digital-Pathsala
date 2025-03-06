"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const InstructorRegistration = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [mobileMenuItems, setMobileMenuItems] = useState<React.ReactNode[]>([]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const router = useRouter();

  useEffect(() => {
    const desktopMenu = document.getElementById("desktop-menu");
    if (desktopMenu) {
      const items = Array.from(desktopMenu.children).map((item, index) => {
        return <li key={index}>{(item as HTMLElement).innerHTML}</li>;
      });
      setMobileMenuItems(items);
    }
  }, []);

  return (
    <div>
      {/* Mobile Menu */}
      <aside>
        <div
          id="mobile-menu"
          className={`md:hidden bg-white shadow-md fixed top-0 left-0 w-full h-screen z-50 p-4 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <span
            id="close-menu"
            className="text-black font-extrabold text-2xl p-4 cursor-pointer"
            onClick={toggleMenu}
          >
            ×
          </span>
          <ul className="flex flex-col items-start space-y-2">
            {mobileMenuItems}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
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
            Tell us your qualifications, show us your passion, and begin
            teaching with us!
          </p>
          <button
            onClick={() => router.push("/register")}
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600"
          >
            Apply Now
          </button>
        </div>
      </main>
    </div>
  );
};

export default InstructorRegistration;
