import React from "react";
import { CardProps } from "@/ofType/CourseCard";
import Image from "next/image";
import photo from "@/../public/images/banner.png";
import thmp from "@/../public/images/Mr. Sulav Acharya.png";
import {
  FaEye,
  FaCartShopping,
  FaRegUser,
  FaRegClock,
  FaStar,
} from "react-icons/fa6";

const CourseCard: React.FC<CardProps> = ({
  price,
  isProfile,
  prevPrice,
  title,
  rating,
  noOfStudents,
  lectureHour,
  lecturer,
  genre,
  thumbnail = photo,
  profilePhoto = thmp,
}) => {
  return (
    <div className="rounded-xl bg-white text-black cursor-pointer overflow-hidden shadow-sm shadow-gray-500 flex flex-col w-full hover:scale-[1.03] transition-all duration-300">
      <Image src={thumbnail} alt="Photo" height={700} width={721} className="hover:opacity-65 transition duration-300"/>
      <div className="p-4">
        <div className="rating flex gap-[2px]">
          {Array.from({ length: rating }, (_, i) => (
            <FaStar color="#fde047" key={i}></FaStar>
          ))}
          {Array.from({ length: 5 - rating }, (_, i) => (
            <FaStar color="rgb(209 213 219)" key={i}></FaStar>
          ))}
        </div>

        <h3 className="text-xl font-bold inline hover:text-green-600">{title}</h3>

        <div className="flex items-center gap-4 mt-2">
          <span className="flex gap-1 items-center" title="Students">
            <FaRegUser color="gray" /> {noOfStudents}{" "}
          </span>
          <span className="flex gap-2 items-center">
            <FaRegClock color="gray" />
            {lectureHour}hr
          </span>
        </div>

        {!isProfile && (
          <div className="flex items-center gap-4 my-4">
            <div className="rounded-full h-8 w-8 overflow-hidden object-contain ">
              <Image
                src={profilePhoto}
                alt="Photo"
                className="h-full w-full"
                height={300}
                width={300}
              />
            </div>

            <div className="text-gray-500 text-sm">
              By{" "}
              <span className="text-black font-bold">
                {lecturer}
              </span>{" "}
              in
              <br />
              <span className="text-black font-bold">
                {genre}
              </span>
            </div>
          </div>
        )}
        <hr className="my-2" />

        <del className="text-gray-500 text-[0.8rem]">Rs. {prevPrice}</del>
        <p className="font-bold text-xl">Rs. {price}</p>

        {!isProfile ? (
          <button className="border-2 border-green-500 text-green-500 transition-all duration-100 hover:bg-blue-500 hover:border-blue-500 hover:text-white  w-full p-2 rounded-lg flex items-center justify-center gap-2">
            <span>
              <FaCartShopping size={20} />
            </span>
            <span>Add to Cart</span>
          </button>
        ) : (
          <button className="border-2 border-green-500 text-green-500 transition-all duration-100 hover:bg-blue-500 hover:border-blue-500 hover:text-white  w-full p-2 rounded-lg flex items-center justify-center gap-2">
            <span>
              <FaEye size={20} />
            </span>
            <span>View</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
