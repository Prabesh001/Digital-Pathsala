import React from "react";

const page = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 p-8 text-black">
        <div className=" mx-auto  p-8">
          <h4 className="text-xl font-semibold text-blue-900 mb-4">
            My Profile
          </h4>

          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium text-gray-600">
                Registration Date
              </span>
              <span>October 1, 2024 9:59 am</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium text-gray-600">First Name</span>
              <span>Sulav</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium text-gray-600">Last Name</span>
              <span>Acharya</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium text-gray-600">Username</span>
              <span>sulavacharya2</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium text-gray-600">Email</span>
              <span>sulavacharya643@gmail.com</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium text-gray-600">Phone Number</span>
              <span>-</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="font-medium text-gray-600">
                Skill/Occupation
              </span>
              <span>-</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Biography</span>
              <span>-</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
