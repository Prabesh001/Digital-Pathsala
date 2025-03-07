"use client";
import React, { useEffect, useState } from "react";

interface BlogCardProps {
  title: string;
  date: string;
}

const BlogCard = ({ title, date }: BlogCardProps) => {
  return (
    <div className="bg-white h-64 rounded-lg shadow-md p-6 w-80 max-w-[90vw] overflow-hidden border border-gray-200 transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
      <p className="text-gray-400 text-sm mb-2">{date}</p>
      <div className="t-data pt-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
        <a href="/blogdetails" className="hover:text-blue-600 text-gray-500">
          Continue Reading →
        </a>
      </div>
    </div>
  );
};

const BlogCards = () => {
  const [limit, setLimit] = useState(3);

  const posts = [
    { title: "Name", date: "xcvbnm" },
    { title: "Name", date: "xcvbnm" },
    { title: "Name", date: "xcvbnm" },
    { title: "Name", date: "xcvbnm" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setLimit(3);
      else if (window.innerWidth >= 768) setLimit(2);
      else setLimit(1);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container mx-auto relative bottom-[-50px]">
      <div className="flex flex-nowrap justify-center gap-4 relative z-50">
        {posts.slice(0, limit).map((post, i) => (
          <BlogCard
            key={i}
            title="Reconnaissance for Bug Bounty Hunting"
            date="Jan 14, 2020"
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
