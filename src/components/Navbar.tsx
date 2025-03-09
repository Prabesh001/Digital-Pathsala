"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import logo from "@/../public/images/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);
  const [hover, setHover] = useState<"tutor" | "student" | "">("");

  const isLoggedIn = true;

  useEffect(() => {
    const handleResize = () => setIsOpen(window.innerWidth < 800);

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleCourseClick = () => {
    setShowMore(false);
  };

  return (
    <nav className="bg-white mb-4 p-4 flex items-center justify-between top-0 z-50 shadow-md shadow-gray-300">
      <Image
        src={logo}
        alt="Logo"
        height={48}
        priority={true}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />

      <div>
        {isOpen ? (
          <div className="relative">
            <button
              className="mt-2"
              onMouseOver={() => setShowMore(true)}
              onMouseLeave={() => setShowMore(false)}
            >
              <RxHamburgerMenu color="black" size={24} />
            </button>

            {showMore && (
              <div
                onMouseOver={() => setShowMore(true)}
                onMouseLeave={() => setShowMore(false)}
                className="absolute top-7 right-0 bg-white shadow-md shadow-gray-700 p-4 rounded-lg flex flex-col space-y-2 text-gray-600 z-50"
              >
                <div onClick={handleCourseClick}>
                  <NavField value="Course" redirect="/course"/>
                </div>
                {isLoggedIn ? (
                  <>
                    <MyCart />
                    <NavField value="Profile" redirect="/dashboard/my-profile"/>
                  </>
                ) : (
                  <>
                    <HoverMenu
                      label="Tutor"
                      hover={hover}
                      setHover={setHover}
                    />
                    <HoverMenu
                      label="Students"
                      hover={hover}
                      setHover={setHover}
                    />
                  </>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="flex space-x-4 text-gray-600">
            <div onClick={handleCourseClick}>
              <NavField value="Course" redirect="/course"/>
            </div>
            {isLoggedIn ? (
              <>
                <MyCart />
                <NavField value="Profile" redirect="/dashboard/my-profile"/>
              </>
            ) : (
              <>
                <HoverMenu label="Tutor" hover={hover} setHover={setHover} />
                <HoverMenu label="Students" hover={hover} setHover={setHover} />
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

interface HoverMenuProps {
  label: "Tutor" | "Students";
  hover: "tutor" | "student" | "";
  setHover: React.Dispatch<React.SetStateAction<"tutor" | "student" | "">>;
}

const HoverMenu: React.FC<HoverMenuProps> = ({ label, hover, setHover }) => {
  const key = label.toLowerCase() as "tutor" | "student";

  return (
    <span
      onMouseOver={() => setHover(key)}
      onMouseLeave={() => setHover("")}
      className="relative text-gray-600 font-semibold text-lg transition duration-300 hover:text-blue-600 w-max  group"
    >
      <span className="text-nowrap">{label} Zone</span>
      <span className="absolute left-0 bottom-[-5px] w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
      {hover === key && <LoginOption />}
    </span>
  );
};

const LoginOption: React.FC = () => {
  const router = useRouter();

  return (
    <div className="absolute top-4 z-50 left-0 mt-2 bg-white shadow-md shadow-gray-700 p-2 rounded-lg flex flex-col space-y-2 text-gray-600">
      <span
        onClick={() => router.push("/register")}
        className="hover:bg-gray-200 cursor-pointer hover:text-black px-3"
      >
        Register
      </span>
      <span
        onClick={() => router.push("/login")}
        className="hover:bg-gray-200 cursor-pointer hover:text-black px-3"
      >
        Login
      </span>
    </div>
  );
};

const NavField: React.FC<{ value: string; redirect: string }> = ({
  value,
  redirect,
}) => {
  return (
    <span className="relative group text-gray-600 font-semibold text-lg transition duration-300 hover:text-blue-600 w-max cursor-pointer">
      <Link href={redirect}>{value}</Link>
      <span className="absolute left-0 bottom-[-5px] w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
    </span>
  );
};

const MyCart = () => {
  return (
    <div className="relative hover:text-blue-600 group">
      <Link href="/dashboard/order-history">
        <div className="flex hover:text-blue-600 cursor-pointer items-center gap-1 font-semibold text-lg text-gray-600">
          <FaCartShopping /> <span>Cart</span>
        </div>
        <span
          className="absolute w-4 h-4 p-2 rounded-full -top-1 -right-3 text-[0.70em] bg-red-500 text-white overflow-hidden flex items-center justify-center"
        >
          9
        </span>
      </Link>
      <span className="absolute left-0 bottom-[-5px] w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
    </div>
  );
};

export default Navbar;
