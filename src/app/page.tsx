import CounterCard from "../components/CounterCard";
import CourseCard from "../components/CourseCard";
import Image from "next/image";
import BlogCards from "@/components/BlogCard";
import { featuredCourses } from "@/data/mockdata";

const HomePage = () => {
  const partners = [
    "Amazon",
    "Apple",
    "Google",
    "Microsoft",
    "Puma",
    "Samsung",
  ];

  return (
    <div className="min-h-screen">
      <main>
        {/* Banner Section */}
        <section className="relative overflow-hidden">
          <div className="w-full h-[50vh] md:h-[60vh] lg:h-[70%]">
            <Image
              src="/images/banner.png"
              alt="Banner"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        {/* Featured Courses */}
        <section className="p-6">
          <div className="header">
            <h2 className="font-extrabold text-3xl">Featured Courses</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pt-10">
            {featuredCourses.map((course, index:number) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-500 to-blue-700">
          <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center px-4 py-16">
              <CounterCard target={5000} label="Students" />
              <CounterCard target={30} label="Courses" />
              <CounterCard target={20} label="Placements" />
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-center mb-8">
              Our Partners
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="flex justify-center items-center">
                  <Image
                    src={`/images/brand/${partner}.png`}
                    alt={partner}
                    width={96}
                    height={48}
                    className="hover:opacity-75 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="relative bg-blue-500">
          <div className="container mx-auto relative z-10">
            <h2 className="text-3xl font-bold text-white px-4 py-20 text-center">
              Latest Blogs
            </h2>
          </div>

          {/* Wave SVG * */}
          <svg
            className="w-full absolute bottom-0 left-0"
            viewBox="0 0 1000 100"
            preserveAspectRatio="xMinYMin meet"
          >
            <path
              fill="#ffffff"
              d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
            />
          </svg>

          {/* <div className="container mx-auto relative bottom-[-50px]">
            <div className="flex flex-nowrap justify-center gap-4 relative z-50">
              <BlogCard title="Reconnaissance for Bug Bounty Hunting" date="Jan 14, 2020"/>
              <BlogCard title="Reconnaissance for Bug Bounty Hunting" date="Jan 14, 2020"/>
            </div>
          </div> */}
          <BlogCards />
        </section>

        {/* Email Subscription */}
        <section className="bg-white py-16">
          <div className="container mx-auto text-center">
            <p className="text-2xl md:text-3xl font-bold text-blue-950 mb-8">
              Want to get special offers and Course updates?
            </p>
            <form className="flex flex-col md:flex-row justify-center items-center gap-4">
              <input
                type="email"
                placeholder="Your email address here"
                className="border border-gray-300 rounded-full px-6 py-3 w-full md:w-96"
              />
              <button
                type="submit"
                className="bg-blue-800 text-white rounded-full px-8 py-3 hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
