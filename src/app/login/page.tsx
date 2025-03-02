import React from "react";

const Login: React.FC = () => {
  return (
    <div>
      <div className="login-container px-4 py-8 md:p-16 max-w-xl mx-auto">
        <div className="text-gray-500 text-3xl md:text-5xl font-bold font-poppins md:text-left text-center mb-8 md:mb-16">
          Login
        </div>

        <div className="form-container border bg-white border-gray-400 rounded-lg py-6 px-6 md:px-8">
          <form action="#" method="post">
            <div className="mb-4">
              <label
                htmlFor="usernameoremail"
                className="flex items-center text-gray-700 text-base md:text-lg pb-3 font-poppins"
              >
                Username or email address
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="usernameoremail"
                id="usernameoremail"
                className="w-full px-4 md:px-6 py-2 outline-none border text-black border-gray-300 rounded-lg"
                placeholder="Username or Email Address"
              />
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="flex items-center text-gray-700 text-base md:text-lg pb-3 font-poppins"
              >
                Password
                <span className="text-red-500">*</span>
              </label>
              <div className="relative w-full">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full text-black px-4 md:px-6 py-2 outline-none border border-gray-300 rounded-lg pr-12"
                  placeholder="****************"
                />
                <i
                  className="fa-solid fa-eye absolute right-4 top-3 cursor-pointer text-gray-500"
                  id="togglePassword"
                ></i>
              </div>
            </div>

            <div className="mb-4 flex-col gap-4">
              <label className="flex items-center">
                <input className="mr-1" type="checkbox" />
                <span className="text-gray-700 text-sm md:text-base">
                  Remember me
                </span>
              </label>
              <button
                type="submit"
                className="text-white bg-gray-700 hover:bg-gray-800 w-full md:w-20 p-2 rounded-lg"
              >
                Login
              </button>
            </div>
            <div className="mb-4 text-center">
              <a
                href="/forgetpassword.html"
                className="text-base md:text-lg underline text-green-500 hover:text-green-600"
              >
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
