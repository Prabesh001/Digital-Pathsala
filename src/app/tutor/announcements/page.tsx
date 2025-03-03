"use client"
import { useState } from "react";
import {
  FaBullhorn,
} from "react-icons/fa6";

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [announcements] = useState([
    {
      date: "2080/12/12",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quis ipsum facilis saepe impedit quo modi debitis. Ex hic alias sed, dolorum, minima ratione harum molestiae, et reprehenderit dolor excepturi!",
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <div className="flex h-screen">
          <div className="flex-1">
            <div className="max-w-4xl bg-white shadow-lg rounded-lg p-6">
              {/* Announcement Header */}
              <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg p-6 md:p-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex items-center space-x-4">
                  <div className="flex justify-center items-center w-12 h-12 bg-green-100 rounded-full">
                    <FaBullhorn className="text-2xl text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-sm font-medium text-gray-500">
                      Create Announcement
                    </h2>
                    <p className="text-lg font-semibold text-gray-900">
                      Notify all students of your course
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-green-500 text-white px-6 py-2 w-full md:w-auto rounded-md hover:bg-green-600"
                >
                  Add New Announcement
                </button>
              </div>

              {/* Filters */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center md:gap-20 mt-6">
                <div className="w-full lg:w-1/3 mr-8">
                  <label
                    htmlFor="courses"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Courses
                  </label>
                  <select
                    id="courses"
                    className="mt-1 block w-full lg:w-96 pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  >
                    <option>All</option>
                    <option>Course 1</option>
                    <option>
                      Class 10 C Programming All Important Solution
                    </option>
                  </select>
                </div>

                <div className="w-full lg:w-1/4">
                  <label
                    htmlFor="sort"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Sort By
                  </label>
                  <select
                    id="sort"
                    className="mt-1 block w-full lg:w-60 pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  >
                    <option>DESC</option>
                    <option>ASC</option>
                  </select>
                </div>

                <div className="w-full lg:w-1/4">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    placeholder="MMMM d, yyyy"
                    className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Announcements Table */}
              <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center">
                <div className="relative overflow-x-auto w-full">
                  <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Announcement
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {announcements.map((announcement, index) => (
                        <tr key={index} className="bg-white border-b">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                          >
                            {announcement.date}
                          </th>
                          <td className="px-6 py-4">{announcement.content}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-full max-w-lg rounded-lg shadow-lg">
              <div className="flex justify-between items-center border-b px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Create Announcement
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="body">
                <form action="#" method="post">
                  <div className="p-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Select Course
                      </label>
                      <select className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                        <option>No course found</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Announcement Title
                      </label>
                      <input
                        type="text"
                        placeholder="Announcement title"
                        className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Summary
                      </label>
                      <textarea
                        placeholder="Summary..."
                        rows={4}
                        className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-t px-6 py-4">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="text-green-500 border border-green-500 hover:bg-green-100 rounded-md px-4 py-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-green-500 text-white hover:bg-green-600 rounded-md px-4 py-2"
                    >
                      Publish
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;
