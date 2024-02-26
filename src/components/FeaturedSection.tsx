"use client";
import Link from "next/link";
import data from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const FeaturedSection = () => {
  const featuredCourses = data.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 px-6 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course, index) => (
            <div key={index} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[20px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <img
                    src={course.image}
                    className="rounded-[20px] object-cover w-full"
                  />
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="bg-zinc-900 text-white px-6 py-2 rounded-lg mt-6 font-semibold dark:bg-white dark:text-black"
                  >
                    Learn more
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="bg-white text-black px-6 py-3 rounded-lg mt-4 font-semibold"
        >
          View all Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedSection;
