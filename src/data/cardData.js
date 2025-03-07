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
