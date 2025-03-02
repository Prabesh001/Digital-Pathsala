export const cardData = [
  {
    lecturer: "Brita",
    title: "Analog Circuit Design manager",
    price: 619,
    prevPrice: 914,
    noOfStudents: 40,
    genre: "Rosenstrasse",
    lectureHour: 2,
    thumbnail: "http://dummyimage.com/142x100.png/dddddd/000000",
    profilePhoto: "http://dummyimage.com/227x100.png/cc0000/ffffff",
    rating: 4,
  },
  {
    lecturer: "Salomi",
    title: "VP Sales",
    price: 310,
    prevPrice: 695,
    noOfStudents: 73,
    genre: "Treasure Island",
    lectureHour: 6,
    thumbnail: "http://dummyimage.com/171x100.png/cc0000/ffffff",
    profilePhoto: "http://dummyimage.com/141x100.png/ff4444/ffffff",
  },
  {
    lecturer: "Ericka",
    title: "Human Resources Manager",
    price: 1694,
    prevPrice: 132,
    noOfStudents: 90,
    genre: "Silent Wedding (Nunta Muta)",
    lectureHour: 2,
    thumbnail: "http://dummyimage.com/183x100.png/dddddd/000000",
    profilePhoto: "http://dummyimage.com/249x100.png/dddddd/000000",
    rating: 5,
  },
  {
    lecturer: "Estevan",
    title: "Community Outreach Specialist",
    price: 1584,
    prevPrice: 567,
    noOfStudents: 96,
    genre: "Resurrecting the Champ",
    lectureHour: 8,
    thumbnail: "http://dummyimage.com/192x100.png/cc0000/ffffff",
    profilePhoto: "http://dummyimage.com/189x100.png/dddddd/000000",
    rating: 5,
  },
  {
    lecturer: "Clayborn",
    title: "Environmental Tech",
    price: 1123,
    prevPrice: 1968,
    noOfStudents: 16,
    genre: "Intimate Enemies (L'ennemi intime)",
    lectureHour: 3,
    thumbnail: "http://dummyimage.com/149x100.png/dddddd/000000",
    profilePhoto: "http://dummyimage.com/223x100.png/cc0000/ffffff",
    rating: 5,
  },
  {
    lecturer: "Reinaldo",
    title: "Geological Engineer",
    price: 1202,
    prevPrice: 1810,
    noOfStudents: 12,
    genre: "Train Robbers, The",
    lectureHour: 6,
    thumbnail: "http://dummyimage.com/209x100.png/dddddd/000000",
    profilePhoto: "http://dummyimage.com/110x100.png/cc0000/ffffff",
    rating: 5,
  },
  {
    lecturer: "Myrtie",
    title: "Product Engineer",
    price: 130,
    prevPrice: 1587,
    noOfStudents: 1,
    genre: "You Will Meet a Tall Dark Stranger",
    lectureHour: 10,
    thumbnail: "http://dummyimage.com/173x100.png/ff4444/ffffff",
    profilePhoto: "http://dummyimage.com/240x100.png/ff4444/ffffff",
    rating: 5,
  },
  {
    lecturer: "Donielle",
    title: "Help Desk Operator",
    price: 420,
    prevPrice: 1982,
    noOfStudents: 45,
    genre: "Just Add Water",
    lectureHour: 1,
    thumbnail: "http://dummyimage.com/106x100.png/dddddd/000000",
    profilePhoto: "http://dummyimage.com/117x100.png/cc0000/ffffff",
    rating: 5,
  },
  {
    lecturer: "Enoch",
    title: "Paralegal",
    price: 1924,
    prevPrice: 914,
    noOfStudents: 96,
    genre:
      "Cahill U.S. Marshal (Cahill: United States Marshal) (Wednesday Morning)",
    lectureHour: 9,
    thumbnail: "http://dummyimage.com/221x100.png/ff4444/ffffff",
    profilePhoto: "http://dummyimage.com/215x100.png/ff4444/ffffff",
    rating: 5,
  },
  {
    lecturer: "Beatrix",
    title: "Desktop Support Technician",
    price: 1386,
    prevPrice: 1774,
    noOfStudents: 98,
    genre: "Fetching Cody",
    lectureHour: 8,
    thumbnail: "http://dummyimage.com/100x100.png/cc0000/ffffff",
    profilePhoto: "http://dummyimage.com/171x100.png/cc0000/ffffff",
    rating: 5,
  },
];

import {
  FaGraduationCap,
  FaWallet,
  FaBookOpenReader,
  FaTrophy,
  FaBook,
  FaBookOpen,
  FaClipboardList,
  FaBookmark,
  FaStar,
  FaCartShopping,
  FaQuestion,
} from "react-icons/fa6";

import { AiFillDashboard } from "react-icons/ai";
import { IoPerson, IoLogOut, IoSettingsSharp } from "react-icons/io5";
import { GrAnnounce } from "react-icons/gr";
import { PiHandWithdrawFill } from "react-icons/pi";

export const tutorData = [
  {
    icon: <FaBookOpen size={24} />,
    count: 0,
    title: "Enrolled Courses",
  },
  {
    icon: <FaGraduationCap size={24} />,
    count: 3,
    title: "Active Courses",
  },
  {
    icon: <FaTrophy size={24} />,
    count: 5,
    title: "Completed Courses",
  },
  {
    icon: <FaBookOpenReader size={24} />,
    count: 6,
    title: "Total Students",
  },
  {
    icon: <FaBook size={24} />,
    count: 2,
    title: "Total Courses",
  },
  {
    icon: <FaWallet size={24} />,
    count: 5666,
    title: "Toal Earnings",
  },
];

export const tutorNav = [
  {
    title: "Dashboard",
    icon: <AiFillDashboard size={20} />,
  },
  {
    title: "My Profile",
    icon: <IoPerson size={20} />,
  },
  {
    title: "Enrolled Courses",
    icon: <FaGraduationCap size={20} />,
  },
  {
    title: "Wishlist",
    icon: <FaBookmark size={20} />,
  },
  {
    title: "Reviews",
    icon: <FaStar size={20} />,
  },
  {
    title: "My Quiz Attempts",
    icon: <FaClipboardList size={20} />,
  },
  {
    title: "Order History",
    icon: <FaCartShopping size={20} />,
  },
  {
    title: "Question & Answer",
    icon: <FaQuestion size={20} />,
  },
  {
    title: "Settings",
    icon: <IoSettingsSharp size={20} />,
  },
  {
    title: "Logout",
    icon: <IoLogOut size={20} />,
  },
];
export const instructorNav = [
  {
    title: "My Courses",
    icon: <FaBookOpen size={20} />,
  },
  {
    title: "Announcements",
    icon: <GrAnnounce size={20} />,
  },
  {
    title: "Withdraw",
    icon: <PiHandWithdrawFill size={20} />,
  }
];
