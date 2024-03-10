"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import courseData from "@/data/music_courses.json";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Course } from "../../../../types/Course";
import Link from "next/link";

const CoursePage = () => {
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const slug = window.location.pathname.split("/").pop();
      const selectedCourse = courseData.courses.find(
        (course) => course.slug === slug
      );
      setCourse(selectedCourse || null);
    };
    fetchData();
  }, []);

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div className="min-h-fit bg-black py-12 px-6 md:px-0 pt-36">
      <CardContainer key={course.id} className="inter-var m-2">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {course.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {course.description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-5">
            <Image
              src={course.image}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={course.title}
            />
          </CardItem>
          <div className="flex justify-between items-center mt-10">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Price: ${course.price}
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              <Link href={`/courses/${course.slug}`}>Enroll Now</Link>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default CoursePage;
