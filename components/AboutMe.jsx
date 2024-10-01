import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className=" py-4 px-5 bg-mainDark font-Quicksand">
      <div className="flex flex-col items-center justify-center container mx-auto max-w-md md:max-w-7xl md:flex-row">
        {/* Left */}
        <div className="flex md:w-2/4">
          <Image
            src="/images/profile2.jpg"
            alt="aboutMe"
            width={0}
            height={0}
            sizes="100vw"
            className=" w-96 h-96 rounded-2xl mb-4 object-cover  shadow-2xl max-md:mb-12"
          />
        </div>

        {/* Right */}
        <div className="flex max-md:justify-center max-md:items-center flex-col gap-6 md:w-2/4">
          <h2 className="text-textBlue text-4xl text-left font-bold">
            ABOUT ME
          </h2>
          <div className=" text-mainLight">
            <h3 className="text-2xl font-semibold mb-2 bg-titleBG p-1 max-md:text-center">
              Front-end
            </h3>
            <p className="text-lg max-md:text-center">
              Have hands-on experience with modern front-end technologies such
              as HTML, CSS, JavaScript ,Material UI, Tailwind, and frameworks
              like ReactJS, NextJS
            </p>
          </div>
          <div className="text-mainLight">
            <h3 className="text-2xl font-semibold mb-2 bg-titleBG p-1 max-md:text-center">
              Back-end
            </h3>
            <p className="text-lg max-md:text-center">
              Have been working on the server-side, handling databases, and
              building server logic using technologies like Next.js, Node.js and
              Express.js. Comfortable with RESTful API development and can work
              with databases like MongoDB and MySQL.
            </p>
          </div>
          <div className="text-mainLight">
            <h3 className="text-2xl font-semibold mb-2 bg-titleBG p-1 max-md:text-center">
              Full-Stack Proficiency
            </h3>
            <p className="text-lg max-md:text-center">
              The goal is to bridge the gap between front-end and back-end
              development, ensuring seamless data flow and a delightful user
              experience. Being excited about the challenges of full-stack
              development and strive to create robust, efficient, and scalable
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
