import React from "react";

const Footer = () => {
  return (
    <footer className="p-6 bg-black text-gray-200">
      <div className="max-w-6xl_mx-auto grid grid-cols-1 text-left md:grid-cols-2 md:text-left lg:grid-cols-4 gap-8 md:gap-12 px-1 sm:px-6 lg:px-8">
        <div className="pl-0 md:pl-10 lg:pl-0 xl:pl-12">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">About Us</h3>
          <p className="text-xs md:text-sm mt-2">
            Music School is a premier institution dedicated to teaching the art
            and science of music. With a passion for nurturing musical talent
            and fostering creativity, we provide a dynamic learning environment
            where students of all ages and skill levels can explore their
            musical potential.
          </p>
        </div>
        <div className="lg:ml-10 pl-0 md:pl-10 lg:pl-0 xl:pl-12">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">Quick Links</h3>
          <div className="text-xs md:text-sm mt-2">
            <p>Home</p>
            <p>About</p>
            <p>Courses</p>
            <p>Contact</p>
          </div>
        </div>
        <div className=" pl-0 md:pl-10 lg:pl-0 xl:pl-12">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">Follow Us</h3>
          <div className="text-xs md:text-sm mt-2">
            <p className="inline-block mr-4">Facebook</p>
            <p className="inline-block mr-4">Instagram</p>
            <p className="inline-block mr-4">Twitter</p>
          </div>
        </div>
        <div className="pl-0 md:pl-10 lg:pl-0 xl:pl-12">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">Contact Us</h3>
          <div className="text-xs md:text-sm mt-2">
            <p>New Delhi, India</p>
            <p>Delhi, 4111012</p>
            <p>info@musicsite.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
