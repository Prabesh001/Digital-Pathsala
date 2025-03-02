import React from "react";

const Register: React.FC = () => {
  return (
    <section className="flex items-center justify-center min-h-screen py-8">
      <div className="w-full max-w-lg">
        <form className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 outline-none"
              id="firstName"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 outline-none"
              id="lastName"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              User Name
            </label>
            <input
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 outline-none"
              id="username"
              type="text"
              placeholder="User Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              E-Mail
            </label>
            <input
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 outline-none"
              id="email"
              type="email"
              placeholder="E-Mail"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 outline-none"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="passwordConfirm"
            >
              Password Confirmation
            </label>
            <input
              className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 outline-none"
              id="passwordConfirm"
              type="password"
              placeholder="Password Confirmation"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-green-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register as instructor
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
