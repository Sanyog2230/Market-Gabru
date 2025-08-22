import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    logo: "https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683970e766b2814fc9e59292_logo-2.svg",
    text: "One step ahead. They’ve become an essential part of our growth.",
    bg: "bg-blue-100",
  },
  {
    logo: "https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683970e766b2814fc9e59292_logo-2.svg",
    text: "Incredible results and a team that truly cares. Our leads have never looked better",
    bg: "bg-gray-100",
  },
  {
    logo: "https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683970e766b2814fc9e59292_logo-2.svg",
    text: "They understood our goals and delivered beyond expectations. Highly recommend",
    bg: "bg-blue-100",
  },
  {
    logo: "https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683970e766b2814fc9e59292_logo-2.svg",
    text: "Clear communication, and real results. Everything you want in a marketing partner.",
    bg: "bg-gray-100",
  },
];

const Feedback = () => {
  return (
    <section className="h-[95vh] flex flex-col justify-center items-center text-center px-6 md:px-12 overflow-hidden">
      {/* Title Animation */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} // triggers when 30% is visible
      >
        <h1 className="text-6xl tracking-tighter font-semibold text-gray-900">
          Client{" "}
          <span className="instrument-serif-regular-italic font-normal">
            take some
          </span>{" "}
          <br />
          lovely words
        </h1>
        <p className="mt-6 font-medium text-black/80 text-md">
          Heartfelt Feedback from a Happy Client
        </p>
      </motion.div>

      {/* Cards Animation */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }} // triggers when 30% is visible
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full h-65 max-w-8xl"
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} relative rounded-2xl p-6 shadow-sm flex flex-col`}
          >
            {/* Dotted background with centered logo */}
            <div className="relative flex justify-center items-center h-42">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,#000_1px,transparent_1px)] bg-[length:12px_12px] rounded-2xl"></div>
              <img
                src={item.logo}
                alt="Logo"
                className="relative z-10 h-6"
              />
            </div>

            {/* Text below background */}
            <div className="mt-3">
              <p className="text-gray-800 font-medium tracking-tighter leading-5 text-md">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Feedback;
