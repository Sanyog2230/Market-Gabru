import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight } from "lucide-react";

const Layout = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // animation lasts 1s
  }, []);

  return (
    <div className="min-h-[90vh] bg-white px-10 py-14 flex gap-10">
      {/* Left Side (Completed) */}
      <div
        className="w-2/3 rounded-4xl p-10 shadow-md flex justify-center items-center 
                      bg-gradient-to-tr from-white via-[#E8F3FF] to-[#B3D9FF]"
        data-aos="fade-up"
      >
        <div
          className="w-2/3 rounded-4xl shadow-lg p-10 flex flex-col gap-8 min-h-[60vh] 
                        bg-gradient-to-tr from-[#B3D9FF] via-[#E8F3FF] to-white relative"
        >
          {/* Revenue Growth */}
          <div className="text-left" data-aos="fade-up">
            <p className="text-gray-600 text-lg font-medium">Revenue Growth</p>
            <h2 className="text-5xl font-medium text-gray-900">
              99<span className="text-xl">%</span>
            </h2>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl font-bold leading-snug text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent tracking-tighter">
              Choose Sellmark
            </span>{" "}
            <span className="text-black whitespace-nowrap">
              <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent font-[Montserrat] tracking-tighter">
                Agency
              </span>{" "}
              <span className="instrument-serif-regular-italic tracking-tighter">
                for Digital Growth
              </span>
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-gray-600 text-md font-medium leading-normal text-center tracking-tighter"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We go beyond traditional marketing. We deliver value with <br />
            cutting-edge, data-driven strategies.
          </p>

          {/* Growth Image */}
          <img
            src="https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683970e766b2814fc9e5929a_growth.svg"
            alt="growth"
            className="absolute top-[20%] right-[-17px] w-20 h-20"
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </div>
      </div>

      {/* Right Side */}
      <div
        className="w-1/3 rounded-4xl shadow-md p-10 flex flex-col justify-center items-start min-h-[60vh] relative"
        style={{ backgroundColor: "#EDF2FF" }}
        data-aos="fade-up"
      >
        {/* Circle image in top-left corner */}
        <img
          src="https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683970e766b2814fc9e5929b_circle.svg"
          alt="circle decoration"
          className="absolute top-6 ml-2 left-6 w-16 h-16"
          data-aos="fade-up"
        />

        {/* Section Title */}
        <p
          className="text-gray-600 text-sm font-medium mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Who we are
        </p>

        {/* Heading */}
        <h2
          className="text-4xl tracking-tighter font-bold leading-snug text-gray-900 mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Become the{" "}
          <span className="instrument-serif-regular-italic tracking-tighter font-medium">
            B2B
          </span>{" "}
          <span className="instrument-serif-regular-italic tracking-tighter font-medium">
            Marketing
          </span>{" "}
          <span className="text-blue-600">squad</span>
        </h2>

        {/* Description */}
        <p
          className="text-gray-600 font-medium text-md tracking-tight leading-normal"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          We exist to fuel the growth of the world’s most influential B2B
          brands. Our mission is to be the strategic digital powerhouse behind
          our clients’ success—transforming complex challenges into scalable
          growth in today’s fast-moving, tech-driven world.
        </p>
      </div>
    </div>
  );
};

export default Layout;
