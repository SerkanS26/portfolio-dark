import React from "react";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaLinux } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiMongodb, SiJsonwebtokens } from "react-icons/si";
import { BsBootstrapFill, BsFiletypeScss } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";

const TechStack = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center container mx-auto max-w-md md:max-w-7xl md:flex-row">
        <div className="w-full flex items-center justify-center mt-4 mb-2  md:w-1/5 md:justify-start">
          <h2 className="text-mainLight text-3xl rotate-0 md:-ml-14 md:-rotate-90 ">
            Tech Stack
          </h2>
        </div>

        <div className=" w-4/5 flex flex-wrap items-center justify-center lg:justify-start ">
          <div className="p-4 flex justify-center items-center flex-col">
            <TbBrandNextjs className="w-14 h-14 text-white" />
            <span className="text-white">Next.js</span>
          </div>
          <div className=" p-4 flex justify-center items-center flex-col">
            <FaReact className="w-14 h-14 text-white" />
            <span className="text-white">React</span>
          </div>
          <div className=" p-4 flex justify-center items-center flex-col">
            <DiJavascript className="w-14 h-14 text-white" />
            <span className="text-white">Javascript</span>
          </div>
          <div className=" p-4 flex justify-center items-center flex-col">
            <FaHtml5 className="w-14 h-14 text-white" />
            <span className="text-white">Html</span>
          </div>
          <div className=" p-4 flex justify-center items-center flex-col">
            <FaCss3Alt className="w-14 h-14 text-white" />
            <span className="text-white">Css</span>
          </div>
          <div className="p-4 flex justify-center items-center flex-col">
            <TbBrandRedux className="w-14 h-14 text-white" />
            <span className="text-white">Redux</span>
          </div>
          <div className=" p-4 flex justify-center items-center flex-col">
            <SiMongodb className="w-14 h-14 text-white" />
            <span className="text-white">MongoDB</span>
          </div>
          <div className=" p-4 flex justify-center items-center flex-col">
            <FaNodeJs className="w-14 h-14 text-white" />
            <span className="text-white">Node.js</span>
          </div>
          <div className=" p-4 flex justify-center items-center flex-col">
            <SiJsonwebtokens className="w-14 h-14 text-white" />
            <span className="text-white">JWT</span>
          </div>
          <div className=" p-4 flex justify-center items-center flex-col">
            <BsBootstrapFill className="w-14 h-14 text-white" />
            <span className="text-white">Bootstrap</span>
          </div>
          <div className=" p-4 flex justify-center items-center flex-col">
            <RiTailwindCssFill className="w-14 h-14 text-white" />
            <span className="text-white">Tailwind</span>
          </div>
          <div className=" p-4 flex justify-center items-center flex-col">
            <BsFiletypeScss className="w-14 h-14 text-white" />
          </div>

          <div className=" p-4 flex justify-center items-center flex-col">
            <FaLinux className="w-14 h-14 text-white" />
            <span className="text-white">Linux</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
