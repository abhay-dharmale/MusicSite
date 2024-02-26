"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Joining this music class has been transformative for me. The interactive lessons and personalized feedback have tremendously improved my skills and understanding of music. I've gained confidence in my abilities and developed a deeper passion for playing. It's an experience I highly recommend to anyone passionate about music.",
    name: "Emily Johnson",
    title: "Piano Enthusiast",
  },
  {
    quote:
      "Discovering this class has been a game-changer for my musical journey. The live feedback sessions are incredibly valuable, providing immediate insights to enhance my playing. The instructors' support and guidance have helped me overcome challenges and reach new heights in my guitar playing. I'm grateful for this enriching experience.",
    name: "Michael Smith",
    title: "Aspiring Guitarist",
  },
  {
    quote:
      "I can't praise the resource library enough—it's a treasure trove for any musician. Exploring its vast collection has broadened my musical horizons and introduced me to new genres and pieces. Whether I'm seeking inspiration or refining my skills, the library never fails to deliver. It's an indispensable asset.",
    name: "Sophia Lee",
    title: "Violinist",
  },
  {
    quote:
      "Being part of this vibrant music community has been an absolute joy. The connections I've made and the friendships I've formed are invaluable. Interacting with fellow musicians, sharing experiences, and collaborating on projects have enriched my musical journey beyond measure. It's more than just a class—it's a supportive family.",
    name: "Daniel Brown",
    title: "Music Enthusiast",
  },
];

const Testimonial = () => {
  return (
    <div className="h-[100vh] w-full flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
