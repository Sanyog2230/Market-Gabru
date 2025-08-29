import React, { useEffect } from "react";
import { Infinity, Percent, BarChart2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const About2 = () => {
  const values = [
    {
      icon: <Infinity className="w-15 h-15 text-blue-600" />,
      title: "Bold work wins",
      description:
        "We challenge conventions, push creative boundaries, and build campaigns that stand out—because safe ideas don’t spark real growth.",
    },
    {
      icon: <Percent className="w-15 h-15 text-blue-600" />,
      title: "Performance over promises",
      description:
        "We don’t rely on buzzwords or empty claims—every strategy is tracked, measured, and optimized for results you can actually see.",
    },
    {
      icon: <BarChart2 className="w-15 h-15 text-blue-600" />,
      title: "Think smart, act fast",
      description:
        "In a fast-moving digital world, we combine agile execution with intelligent planning to stay ahead of trends and ahead of your competitors.",
    },
  ];

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full py-16 px-6 md:px-20 lg:px-32 bg-white">
      {/* Heading */}
      <p
        className="text-gray-500 text-sm font-semibold text-center mb-2"
        data-aos="fade-up"
      >
        Values
      </p>
      <h2
        className="text-3xl md:text-5xl text-center tracking-tight leading-tight font-bold text-gray-900"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Bold Values{" "}
        <span className="instrument-serif-regular-italic">Behind</span> <br />
        <span className="instrument-serif-regular-italic">Every</span>{" "}
        Breakthrough
      </h2>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5 pt-10 justify-items-center">
        {values.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-left px-8 py-6 w-full max-w-sm border border-gray-200 rounded-xl shadow-sm"
            data-aos="fade-up"
            data-aos-delay={300 + index * 200} // stagger animation for each card
          >
            {/* Icon */}
            <div className="mb-4">{item.icon}</div>
            {/* Title */}
            <h3 className="text-lg font-semibold tracking-tighter text-gray-900">
              {item.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 font-medium text-sm mt-3 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About2;
