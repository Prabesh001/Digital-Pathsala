import React from "react";

const Layout: React.FC = () => {
  return (
    // <main className="">
    //   <div className="profile px-4 bg-white sm:px-8 md:px-16 lg:px-36 flex flex-col sm:flex-row justify-between items-center py-6">
    //     <div className="flex items-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0">
    //       <img
    //         src="/images/Mr. Sulav Acharya.png"
    //         alt="Profile Image"
    //         className="h-24 w-24 rounded-full border-4 border-gray-300 object-cover"
    //       />
    //       <div className="text-center sm:text-left">
    //         <h2 className="font-bold text-xl text-gray-800">Sulav Acharya</h2>
    //         <div className="flex items-center pt-2 ">
    //           {Array(5)
    //             .fill(0)
    //             .map((_, i) => (
    //               <svg
    //                 key={i}
    //                 className="w-4 h-4 text-yellow-300 ml-1"
    //                 aria-hidden="true"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="currentColor"
    //                 viewBox="0 0 22 20"
    //               >
    //                 <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    //               </svg>
    //             ))}
    //         </div>
    //       </div>
    //     </div>

    //     <div className="button">
    //       <a
    //         href="/tutor/createcourse"
    //         className="border text-green-500 hover:bg-green-500 hover:text-white rounded-lg border-green-500 px-4 py-2 transition text-center"
    //       >
    //         <i className="fa-solid fa-square-plus px-2"></i> Create a New Course
    //       </a>
    //     </div>
    //   </div>

    //   <div className="h-px bg-gray-400 mx-6"></div>
    //   <div className="flex">
    //     <div className="w-64 bg-white shadow-lg md:flex flex-col justify-between pl-9 border-r-2 hidden h-fit">
    //       <div>
    //         <nav className="mt-4">
    //           {tutorNav.map((nav, i) => (
    //             <a
    //               key={i}
    //               href={nav.title.toLowerCase().replace(" ", "-")}
    //               className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 space-x-3"
    //             >
    //               {nav.icon}
    //               <span className="font-bold text-nowrap">{nav.title}</span>
    //             </a>
    //           ))}
    //         </nav>
    //       </div>

    //       <div className="instructor border-t border-t-stone-800 mt-4 z-50">
    //         <h4 className="text-gray-400 text-md pl-2">Instructor</h4>
    //         <nav>
    //           <a
    //             href="/tutor/my-course.html"
    //             className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 space-x-3"
    //           >
    //             <i className="fa-solid fa-book text-green-500"></i>
    //             <span className="font-bold">My Courses</span>
    //           </a>
    //           <a
    //             href="/tutor/announcement.html"
    //             className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 space-x-3"
    //           >
    //             <i className="fa-solid fa-bullhorn text-green-500"></i>
    //             <span className="font-bold">Announcements</span>
    //           </a>
    //           <a
    //             href="#"
    //             className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 space-x-3"
    //           >
    //             <i className="fa-solid fa-times text-green-500"></i>
    //             <span className="font-bold">Withdraw</span>
    //           </a>
    //         </nav>
    //       </div>
    //     </div>

    //     <div className="flex-1 p-12 bg-white rounded-lg">
    //       <div className="flex flex-col md:flex-row justify-between items-center border border-black rounded-lg p-6 space-y-6 md:space-y-0">
    //         <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 pr-0 md:pr-6 space-y-6 md:space-y-0">
    //           <div className="flex flex-col text-center md:text-left">
    //             <h3 className="text-lg font-semibold text-gray-800">
    //               Complete Your Profile
    //             </h3>
    //             <p className="text-sm text-gray-500">
    //               You are almost done:{" "}
    //               <span className="font-bold text-gray-800">2/3</span>
    //             </p>
    //           </div>

    //           <div className="flex items-center justify-center md:justify-start space-x-1">
    //             <div className="w-12 h-2 rounded-full bg-green-500"></div>
    //             <div className="w-12 h-2 rounded-full bg-green-500"></div>
    //             <div className="w-12 h-2 rounded-full bg-gray-200"></div>
    //           </div>

    //           <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-400 text-4xl">
    //             <IoPersonSharp />
    //           </div>
    //         </div>

    //         <div className="hidden md:block h-24 border-r-2 border-black"></div>

    //         <div className="flex flex-col space-y-4 text-center md:text-left pl-0 md:pl-6">
    //           <div className="flex items-center justify-center md:justify-start space-x-2">
    //             <i className="fa-regular fa-circle-check text-xl text-green-400"></i>
    //             <span className="text-sm text-gray-600 underline underline-offset-4 cursor-pointer hover:text-green-500">
    //               <a href="#">Set Your Profile Photo</a>
    //             </span>
    //           </div>

    //           <div className="flex items-center justify-center md:justify-start space-x-2">
    //             <i className="fa-regular fa-circle-check text-xl text-green-400"></i>
    //             <span className="text-sm text-gray-600 underline underline-offset-4 cursor-pointer hover:text-green-500">
    //               <a href="#">Set Your Bio</a>
    //             </span>
    //           </div>

    //           <div className="flex items-center justify-center md:justify-start space-x-2">
    //             <i className="fa-regular fa-circle-xmark text-xl text-red-500"></i>
    //             <span className="text-sm text-gray-600 underline underline-offset-4 cursor-pointer hover:text-green-500">
    //               <a href="/tutor/withdraw.html">Set Withdraw Method</a>
    //             </span>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 ">
    //         {tutorData.map((t, i) => (
    //           <div
    //             key={i}
    //             className="bg-white rounded-md p-6 flex flex-col items-center shadow-md border border-gray-600"
    //           >
    //             <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4 text-green-500">
    //               {t.icon}
    //             </div>
    //             <h4 className="text-3xl font-bold text-gray-600">{t.count}</h4>
    //             <span className="text-gray-500">{t.title}</span>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </main>

    <div>Hello</div>
  );
};

export default Layout;
