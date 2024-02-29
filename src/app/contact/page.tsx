"use client";
import { Meteors } from "@/components/ui/meteors";
import { MdSend } from "react-icons/md";

const page = () => {
  return (
    <div className="h-screen w-screen">
      <div className="h-full w-full flex-col sm:flex-row flex items-center justify-center">
        <div className="h-full md:h-[80%] w-full md:w-1/2 flex flex-col pl-0 md:pl-[12%] items-center md:items-start justify-center">
          <h1 className="text-5xl md:text-7xl text-center md:text-left md:-mt-[60px] lg:-mt-[100px]">LET&apos;S TALK</h1>
          <p className="text-xs py-3 sm:py-0 sm:p-3 md:py-4 md:px-0 lg:px-2">Ask us anything or just say hi..</p>
        </div>
        <div className="relative h-full md:h-[80%] w-full md:w-1/2 flex flex-col justify-center p-[4vw]">
          <div className="flex gap-4">
            <p className="absolute top-[16%] left-6 sm:top-[26%] sm:left-[12%] lg:top-[22%] lg:left-[10%] text-zinc-300 text-sm font-semibold">NAME</p>
            <input
              type="text"
              placeholder="enter your name"
              className="relative px-2 py-2 w-full bg-transparent border-b outline-none border-b-zinc-300 mx-3 text-xs md:text-sm"
            />

            <p className="absolute top-[16%] left-[56%] sm:top-[26%] sm:left-[55%] lg:top-[22%] lg:left-[53%] text-zinc-300 text-sm font-semibold">EMAIL</p>
            <input
              type="email"
              placeholder="enter your email"
              className="relative px-2 py-2 w-full bg-transparent border-b outline-none border-b-zinc-300 mx-3 text-xs md:text-sm"
            />
          </div>
          <div className="w-full px-[1vw] mt-[4vw] flex items-center justify-center sm:items-start sm:px-0">
          <p className="absolute top-[40%] left-6 sm:top-[46%] sm:left-[11%] lg:top-[44.5%] lg:left-[10%] text-zinc-300 text-sm font-semibold">LEAVE A MESSAGE</p>
            <input
              type="textarea"
              placeholder="your message"
              className="relative px-2 py-2 w-full bg-transparent border-b outline-none border-b-zinc-300 mx-3 my-10 text-xs md:text-sm"
            />
          </div>
          <div className="btn bg-white text-black text-sm flex items-center justify-center w-[50%] mx-auto lg:mx-4 md:w-[60%] lg:w-[20%] lg:mt-10 gap-4 py-2 rounded-md">
            <button className="font-semibold">Send</button>
            <MdSend />
          </div>
        </div>
      </div>
      {/* <Meteors number={200} /> */}
    </div>
  );
};

export default page;
