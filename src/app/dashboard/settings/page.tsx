"use client";
import React, { useState } from "react";
import {
  FaCameraRotate,
  FaLinkedin,
  FaTrash,
  FaGithub,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";

const Settings = () => {
  const [tab, setTab] = useState("Profile");

  const navbar = ["Profile", "Password", "Withdraw", "Social Profile"];

  const SocialProfileFields = [
    { label: "Facebook", icon: <FaFacebook />, value: "" },
    { label: "Twitter", icon: <FaXTwitter />, value: "" },
    { label: "LinkedIn", icon: <FaLinkedin />, value: "" },
    { label: "Website", icon: <CiGlobe />, value: "" },
    { label: "Github", icon: <FaGithub />, value: "" },
  ];

  return (
    <div className="flex-1 ">
      <h4 className="text-xl font-semibold text-blue-900 mb-0 m-4">Settings</h4>
      <div className=" mx-auto  ">
        <nav className="mx-2 px-3 tabs flex justify-between  gap-10">
          {navbar.map((nav, i) => (
            <button
              key={i}
              className={`py-2 block hover:text-green-600 focus:outline-none font-medium text-xl text-nowrap ${
                nav === tab
                  ? "border-b-2 text-green-500 border-green-700"
                  : "text-black"
              }   `}
              onClick={() => setTab(nav)}
            >
              {nav}
            </button>
          ))}
        </nav>

        {tab === "Profile" && (
          <div id="profile" className="panel-content text-black">
            <div className="container mx-auto p-6">
              <div className="relative mb-10">
                <img
                  src="https://digitalpathshalanepal.com/wp-content/plugins/tutor/assets/images/cover-photo.jpg"
                  alt="Cover Photo"
                  className="w-full h-20 md:h-40 object-cover rounded-lg"
                />
                <div className="absolute flex justify-center items-center top-16 left-5 md:top-24 md:left-10 z-10">
                  <div className="relative">
                    <img
                      src="https://digitalpathshalanepal.com/wp-content/plugins/tutor/assets/images/profile-photo.png"
                      alt="Profile Photo"
                      className="w-20 h-20 md:w-40 md:h-40 rounded-full border-4 border-white object-cover"
                    />

                    <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 bg-gray-600 rounded-full p-1 md:p-2 cursor-pointer hover:bg-gray-700 transition ">
                      <span>
                        <FaCameraRotate size={14} color="white" />
                      </span>
                      <input
                        type="file"
                        name="profile"
                        id="profile"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                <div className="button">
                  <div className="absolute bottom-2 right-4 md:bottom-4 md:right-6">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-600 transition duration-200 relative">
                      <span>
                        <FaCameraRotate size={16} color="white" />
                      </span>
                      <span>Upload Cover Photo</span>
                      <input
                        type="file"
                        name="cover-photo"
                        id="cover-photo"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </button>
                  </div>

                  {/* <div className="absolute top-4 right-4">
                    <button className="bg-gray-700 text-white px-2 py-2 rounded-full hover:bg-gray-600">
                      <FaTrash size={13}/>
                    </button>
                  </div> */}
                </div>
              </div>

              <form className="mt-20 md:mt-28 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                      defaultValue="Sulav"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                      defaultValue="Acharya"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="user-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      User Name
                    </label>
                    <input
                      type="text"
                      id="user-name"
                      className="w-full border border-gray-300 rounded-lg p-2 bg-gray-200 focus:outline-none"
                      defaultValue="sulavacharya2"
                      readOnly
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone-number"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      id="phone-number"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="occupation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Skill/Occupation
                  </label>
                  <input
                    type="text"
                    id="occupation"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                    placeholder="UX Designer"
                  />
                </div>

                <div>
                  <label
                    htmlFor="bio"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Bio
                  </label>
                  <textarea
                    id="myEditor"
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                  ></textarea>
                </div>

                <div>
                  <label
                    htmlFor="display-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Display name publicly as
                  </label>
                  <select
                    id="display-name"
                    className="w-60 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent"
                  >
                    <option>Sulav Acharya</option>
                    <option>Acharya Sulav</option>
                    <option>Sulav</option>
                    <option>Acharya</option>
                  </select>
                  <p className="text-sm text-gray-500 mt-2">
                    The display name is shown in all public fields, such as the
                    author name, instructor name, student name, and the name
                    that will be printed on the certificate.
                  </p>
                </div>

                <div className="text-right mt-6">
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {tab === "Password" && (
          <div id="password" className="panel-content">
            <div className="flex h-auto px-10">
              <div className="w-full lg:w-3/4 xl:w-2/3">
                <form className="bg-white   pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="current-password"
                    >
                      Current Password
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="current-password"
                      type="password"
                      placeholder="Current Password"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="new-password"
                    >
                      New Password
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="new-password"
                      type="password"
                      placeholder="Type Password"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="retype-password"
                    >
                      Re-type New Password
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="retype-password"
                      type="password"
                      placeholder="Type Password"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Reset Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {tab === "Withdraw" && (
          <div id="withdraw" className="panel-content">
            <div className=" mx-auto p-4 sm:p-6 bg-white text-gray-600 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-center sm:text-left">
                Select a withdraw method
              </h2>
              <div className="border p-4 rounded-lg mb-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-green-500"
                    defaultChecked
                  />
                  <span>Bank Transfer</span>
                </label>
                <p className="text-sm text-gray-500">Min withdraw Rs 80.00</p>
              </div>

              <form action="#" method="post">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="accountName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Account Name
                    </label>
                    <input
                      type="text"
                      id="accountName"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="accountNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Account Number
                    </label>
                    <input
                      type="text"
                      id="accountNumber"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="bankName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Bank Name
                    </label>
                    <input
                      type="text"
                      id="bankName"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="iban"
                      className="block text-sm font-medium text-gray-700"
                    >
                      IBAN
                    </label>
                    <input
                      type="text"
                      id="iban"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="bic"
                      className="block text-sm font-medium text-gray-700"
                    >
                      BIC / SWIFT
                    </label>
                    <input
                      type="text"
                      id="bic"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>

                <button className="mt-6 w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded sm:ml-auto block">
                  Save Withdrawal Account
                </button>
              </form>
            </div>
          </div>
        )}

        {tab === "Social Profile" && (
          <div id="socialprofile" className="panel-content">
            <div className="profile-links flex justify-center lg:justify-start lg:m-4 p-5">
              <form
                action="#"
                method="post"
                className="w-full max-w-2xl text-gray-600"
              >
                {SocialProfileFields.map((p,_) => (
                  <div key={p.label} className="mb-4">
                    <label
                      htmlFor={p.label}
                      className="flex items-center gap-2 w-full md:w-1/3 mb-2 md:mb-0 text-gray-700"
                    >
                      <span className="icon text-lg">{p.icon}</span> {p.label}:
                    </label>
                    <input
                      type="url"
                      name={p.label}
                      id={p.label}
                      defaultValue={p.value}
                      placeholder={
                        p.label === "Website"
                          ? "https://www.example.com"
                          : `https://www.${p.label.toLowerCase()}.com/username`
                      }
                      className="w-full md:w-2/3 p-3 border border-gray-300 outline-none rounded-md"
                    />
                  </div>
                ))}
                
                <div className="flex justify-end items-end">
                  <input
                    type="submit"
                    value="Submit"
                    className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600"
                  />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
