"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
    {
      title: "Interactive Learning",
      description:
        "Engage with your classmates and instructor in real time. Collaborate on musical exercises, share ideas, and enhance your learning experience. Our platform allows you to actively participate in the music-making process, fostering creativity and musical growth.",
    },
    {
      title: "Live Feedback",
      description:
        "Receive feedback instantly as you practice and perform. With our platform, you can get real-time guidance from your instructor and peers, helping you improve your musical skills effectively. Say goodbye to delayed feedback and welcome immediate support to refine your technique and musicality.",
    },
    {
      title: "Resource Library",
      description:
        "Access a comprehensive library of musical resources at your fingertips. From sheet music to audio recordings, our platform provides a wealth of materials to enrich your learning journey. Never worry about running out of study materials again—explore, discover, and deepen your understanding of music with ease.",
    },
    {
      title: "Community Engagement",
      description:
        "Join a vibrant community of music enthusiasts and learners. Our platform connects you with like-minded individuals who share your passion for music. Collaborate on projects, exchange insights, and foster meaningful connections with fellow musicians from around the world. Experience the joy of learning music together!",
    },
  ];


const WhyChooseUs = () => {
  return (
    <div className="w-full h-[40rem]">
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs
