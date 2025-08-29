import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About1 = () => {
  const [clientSatisfaction, setClientSatisfaction] = useState(0);
  const [visitors, setVisitors] = useState(0);
  const [brandsServed, setBrandsServed] = useState(0);
  const hasAnimated = useRef(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            startCascadingAnimations();
            hasAnimated.current = true;
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const startCascadingAnimations = () => {
    animateValue(setClientSatisfaction, 99, 1200, () => {
      animateValue(setVisitors, 6, 1200, () => {
        animateValue(setBrandsServed, 90, 1200);
      });
    });
  };

  const animateValue = (setter, end, duration, onComplete) => {
    let start = 0;
    const increment = end / (duration / 20);

    const interval = setInterval(() => {
      start += increment;

      if (start >= end) {
        setter(end);
        clearInterval(interval);
        if (onComplete) onComplete();
      } else {
        setter(Math.floor(start));
      }
    }, 20);
  };

  return (
    <div
      ref={sectionRef}
      className="flex flex-col md:flex-row gap-6 md:gap-10 px-15 md:px-30 py-10"
    >
      {/* Left Card with richer light blue-purple gradient */}
      <div
        className="flex-[2] bg-gradient-to-tr from-blue-200 via-blue-300 to-purple-300 text-black/80 p-6 rounded-3xl flex flex-col justify-start overflow-hidden shadow-lg min-h-[560px]"
        data-aos="fade-up"
      >
        <p className="text-2xl ml-3 font-medium leading-tight text-gray-800">
          Luminex was built by a <br /> collective of strategists, <br /> creatives, and data
          scientists <br /> who care deeply about <br /> outcomes.
        </p>

        <div className="mt-9 rounded-3xl overflow-hidden h-72">
          <img
            src="https://images.pexels.com/photos/7868966/pexels-photo-7868966.jpeg"
            alt="Team Meeting"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Card */}
      <div
        className="flex-[3] bg-[#EDF2FF] p-6 md:p-8 rounded-3xl flex flex-col relative shadow-lg min-h-[560px]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <span className="absolute top-6 left-6 ml-7 mt-5 text-sm font-semibold text-gray-500 tracking-wide">
          About
        </span>

        <div className="flex-1 flex items-center justify-center px-4">
          <p className="text-gray-800 text-2xl md:text-3xl font-semibold text-center leading-snug">
            Over the years, we've helped hundreds of brands—from tech innovators
            to bold B2B players—break through the noise and capture their
            audience’s attention.
          </p>
        </div>

        {/* Bottom stats */}
        <div className="flex justify-between px-4 mb-8">
          <div data-aos="fade-up" data-aos-delay="400">
            <p className="text-4xl font-bold text-black/80">{clientSatisfaction}%</p>
            <p className="text-sm mt-3 text-gray-600">Client Satisfaction</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="600">
            <p className="text-4xl font-bold text-black/80">{visitors}M+</p>
            <p className="text-sm mt-3 text-gray-600">Visitors in 2025</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="800">
            <p className="text-4xl font-bold text-black/80">{brandsServed}+</p>
            <p className="text-sm mt-3 text-gray-600">Brands Served</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
