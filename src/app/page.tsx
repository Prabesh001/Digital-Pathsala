import React from "react";
import Card from "../components/CourseCard";

const page = () => {
  const cards: number = 5;
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-4 pt-10">
      {Array(cards)
        .fill(0)
        .map((_, i) => (
          <Card key={i} />
        ))}
    </div>
  );
};

export default page;
