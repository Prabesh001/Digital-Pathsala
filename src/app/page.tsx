import React from "react";
import Card from "../components/CourseCard";
import photo from "../../public/images/banner.png";
import Image from "next/image";

const page = () => {
  const cards: number = 5;
  return (
    <div>
      <div>
        {" "}
        <Image src={photo} alt="Photo" />
      </div>

      <div className="featured-lectures-section">
        <h2 className="text-2xl p-4 pb-0 font-bold underline underline-offset-4">
          Featured Lectures
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-4">
          {Array(cards)
            .fill(0)
            .map((_, i) => (
              <Card key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default page;
