import { StaticImageData } from "next/image";

export interface CardProps {
  price: number;
  prevPrice: number;
  title: string;
  rating: number;
  noOfStudents: number;
  lectureHour: number;
  lecturer: string;
  genre: string;
  isProfile: boolean;
  thumbnail?: StaticImageData | string;
  profilePhoto: StaticImageData | string;
}