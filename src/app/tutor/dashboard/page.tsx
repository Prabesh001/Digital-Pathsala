import React from "react";
import { tutorData } from "@/data/cardData";
import { FaUser } from "react-icons/fa6";

const Tutor = () => {
  return (
    <div className="flex-1 p-12 bg-white rounded-lg">
          <div className="flex flex-col md:flex-row justify-between items-center border border-black rounded-lg p-6 space-y-6 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 pr-0 md:pr-6 space-y-6 md:space-y-0">
              <div className="flex flex-col text-center md:text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  Complete Your Profile
                </h3>
                <p className="text-sm text-gray-500">
                  You are almost done:{" "}
                  <span className="font-bold text-gray-800">2/3</span>
                </p>
              </div>
    
              <div className="flex items-center justify-center md:justify-start space-x-1">
                <div className="w-12 h-2 rounded-full bg-green-500"></div>
                <div className="w-12 h-2 rounded-full bg-green-500"></div>
                <div className="w-12 h-2 rounded-full bg-gray-200"></div>
              </div>
    
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-400 text-4xl">
                <FaUser />
              </div>
            </div>
    
            <div className="hidden md:block h-24 border-r-2 border-black"></div>
    
            <div className="flex flex-col space-y-4 text-center md:text-left pl-0 md:pl-6">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <i className="fa-regular fa-circle-check text-xl text-green-400"></i>
                <span className="text-sm text-gray-600 underline underline-offset-4 cursor-pointer hover:text-green-500">
                  <a href="#">Set Your Profile Photo</a>
                </span>
              </div>
    
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <i className="fa-regular fa-circle-check text-xl text-green-400"></i>
                <span className="text-sm text-gray-600 underline underline-offset-4 cursor-pointer hover:text-green-500">
                  <a href="#">Set Your Bio</a>
                </span>
              </div>
    
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <i className="fa-regular fa-circle-xmark text-xl text-red-500"></i>
                <span className="text-sm text-gray-600 underline underline-offset-4 cursor-pointer hover:text-green-500">
                  <a href="/tutor/withdraw.html">Set Withdraw Method</a>
                </span>
              </div>
            </div>
          </div>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 ">
            {tutorData.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-md p-6 flex flex-col items-center shadow-md border border-gray-600"
              >
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4 text-green-500">
                  {t.icon}
                </div>
                <h4 className="text-3xl font-bold text-gray-600">{t.count}</h4>
                <span className="text-gray-500">{t.title}</span>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Tutor