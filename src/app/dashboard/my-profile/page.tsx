import React from "react";

const MyProfile = () => {
  const userInfo = [
    { label: "Registration Number", value: "010101010100101" },
    { label: "Registration Date", value: "October 1, 2024 9:59 am" },
    { label: "First Name", value: "Sulav" },
    { label: "Last Name", value: "Acharya" },
    { label: "Username", value: "sulavacharya2" },
    { label: "Email", value: "sulavacharya643@gmail.com" },
    { label: "Phone Number", value: "1234567890" },
    { label: "Skill/Occupation", value: "-" },
    { label: "Biography", value: "-" },
  ];

  return (
    <div className="flex h-full">
      <div className="flex-1 p-8 text-black">
        <div className=" mx-auto  p-8">
          <h4 className="text-xl font-semibold text-blue-900 mb-4">
            My Profile
          </h4>
          <div className="space-y-4">
            {userInfo.map((info, i) => (
              <div className="flex justify-between border-b pb-2" key={i}>
                <span className="font-medium text-gray-600">{info.label}</span>
                <span>{info.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
