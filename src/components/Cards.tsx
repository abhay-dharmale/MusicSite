"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const upcomingWebinars = [
  {
    title: "Exploring Jazz Improvisation",
    description:
      "Join us for an in-depth exploration of jazz improvisation techniques. Learn how to navigate chord changes, develop melodic ideas, and improvise with confidence.",
    link: "Register Now",
  },
  {
    title: "Mastering Rhythm: From Basics to Polyrhythms",
    description:
      "Delve into the world of rhythm and master its intricacies. From understanding basic rhythmic patterns to exploring complex polyrhythms, this webinar will equip you with essential skills to enhance your musicality.",
    link: "Register Now",
  },
  {
    title: "Songwriting Secrets: Crafting Memorable Melodies",
    description:
      "Uncover the secrets behind crafting memorable melodies that captivate listeners. Explore melody structure, contour, and development techniques to enhance your songwriting skills.",
    link: "Register Now",
  },
  {
    title: "The Art of Solo Performance",
    description:
      "Discover the art of solo performance and learn how to captivate audiences with your musical expression. Explore techniques for building dynamic solos, storytelling through music, and engaging your audience.",
    link: "Register Now",
  },
  {
    title: "Exploring World Music Traditions",
    description:
      "Embark on a journey through diverse world music traditions. Explore the rich tapestry of musical cultures, from African rhythms to Asian melodies. Expand your musical horizons and deepen your appreciation for global music.",
    link: "Register Now",
  },
  {
    title: "Effective Practice Strategies for Musicians",
    description:
      "Learn effective practice strategies to maximize your musical progress. Discover techniques for focused practice, goal setting, and overcoming practice challenges. Elevate your practice sessions and achieve your musical goals.",
    link: "Register Now",
  },
];

const Cards = () => {
  return (
    <div className="w-full min-h-[100vh] relative bg-black flex flex-col items-center justify-center p-4 sm:p-10">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide">
          FEATURED Webinars
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Enhance Your Musical Journey
        </p>
      </div>
      <div className=" mx-auto">
        <HoverEffect items={upcomingWebinars} />
      </div>
    </div>
  );
};

export default Cards;
