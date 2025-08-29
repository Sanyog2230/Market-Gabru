import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const Contact1 = () => {
  const [inView, setInView] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <div className="relative h-[80vh] w-full bg-cover bg-center bg-[url('https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683c04cccc75e24bfe6dc48a_banner%20bg-p-2000.webp')]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D33]/70 to-[#7B59FF]/50"></div>

      {/* Content */}
      <div
        ref={contentRef}
        className={`relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-20 gap-4 text-center transition-all duration-[1500ms] ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        {/* Headings */}
        <h1 className="text-white text-7xl md:text-8xl font-medium tracking-tighter leading-[7.5vw]">
          <span className="block">
            Ready to <span className="instrument-serif-regular-italic ">see</span>
          </span>
          <span className="font-semibold">
            <span className="instrument-serif-regular-italic ">real</span> Results
          </span>
        </h1>

        {/* Buttons */}
        <div className="flex items-center gap-6 mt-6 relative translate-x-[-2rem]">
          {/* Let’s Contact Animated Button */}
          <button className="ml-5 relative flex items-center gap-3 bg-white text-black font-medium px-6 py-3 rounded-full overflow-hidden group">
            <span className="relative h-6 overflow-hidden flex items-center">
              <span className="block transform transition-transform duration-700 ease-in-out group-hover:-translate-y-full">
                Let’s Contact
              </span>
              <span className="block absolute left-0 top-full transition-transform duration-700 ease-in-out group-hover:-translate-y-full">
                Let’s Contact
              </span>
            </span>
            <div className="h-10 w-10 rounded-full bg-black/85 flex justify-center items-center shadow-md relative overflow-hidden">
              <ArrowUpRight className="w-6 h-6 text-white transform transition-transform duration-700 ease-in-out group-hover:translate-x-12" />
              <ArrowUpRight className="w-6 h-6 text-white absolute left-[-40px] transition-all duration-700 ease-in-out group-hover:left-2" />
            </div>
          </button>

          {/* Book a Call Animated Link */}
          <a
            href="#"
            className="relative flex items-center gap-3 text-white font-medium overflow-hidden group"
          >
            <span className="relative h-6 overflow-hidden flex items-center">
              <span className="block transform transition-transform duration-700 ease-in-out group-hover:-translate-y-full">
                Book a Call
              </span>
              <span className="block absolute left-0 top-full transition-transform duration-700 ease-in-out group-hover:-translate-y-full">
                Book a Call
              </span>
            </span>
            <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center shadow-md relative overflow-hidden">
              <ArrowUpRight className="w-6 h-6 text-black transform transition-transform duration-700 ease-in-out group-hover:translate-x-12" />
              <ArrowUpRight className="w-6 h-6 text-black absolute left-[-40px] transition-all duration-700 ease-in-out group-hover:left-2" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact1;
