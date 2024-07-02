import React from "react";

import Image from "next/image";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import Link from "next/link";
import TechStack from "./TechStack";
const Hero = () => {
  return (
    <section className="pt-40 bg-mainDark " id="#hero">
      <div className=" flex flex-col-reverse container mx-auto max-w-md md:max-w-7xl md:flex-row">
        {/* Left */}
        <div className=" flex flex-1 flex-col items-center justify-center my-2">
          <h1 className=" text-5xl  text-mainLight font-bold text-center mb-6 font-Quicksand lg:text-7xl lg:text-left">
            Full-stack / Web Developer
          </h1>
          <p className="text-xl text-mainLight text-center mb-6 font-Quicksand lg:text-left ">
            A web developer with a focus on the MERN stack, but still exploring
            other technologies and frameworks that catch my interest! if you're
            looking for a developer to add to your team, I'd love to hear from
            you!
          </p>
          {/* Social Media */}
          <div className="flex lg:self-start">
            <Link href="https://github.com/SerkanS26" target="_blank">
              <FaGithub className="text-4xl text-mainLight  hover:text-gray-500  rounded-sm cursor-pointer mx-2 ease-in duration-300" />
            </Link>
            <Link
              href="https://linkedin.com/in/serkan-safran-82aa821ab"
              target="_blank"
            >
              <FaLinkedin className="text-4xl text-mainLight  hover:text-gray-500 rounded-sm cursor-pointer mx-2 ease-in duration-300" />
            </Link>
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-1 items-center justify-center mb-4">
          <Image
            src="/images/profile.jpg"
            alt="profile picture"
            className="object-cover rounded-full shadow-2xl my-6 "
            width={340}
            height={340}
          />
        </div>
      </div>
      <TechStack />
    </section>
  );
};

export default Hero;
