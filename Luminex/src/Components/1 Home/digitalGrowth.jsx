import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight } from "lucide-react";

const DigitalGrowth = () => {
  const [activeCard, setActiveCard] = useState(1);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div
      className="h-[100vh] w-full p-10 flex relative"
      data-aos="fade-up"
    >
      {/* Inline animation style */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-40px) translateX(30px); }
          100% { transform: translateY(0) translateX(0); }
        }
        .float-anim {
          animation: float 2.8s ease-in-out infinite;
        }
      `}</style>

      {/* Left Section */}
      <div
        className="w-1/2 flex flex-col items-center justify-center relative bg-gradient-to-b from-[#adc3ff] to-[#e6edff] rounded-[40px] overflow-hidden"
        data-aos="fade-up"
      >
        <img
          src="https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683970e766b2814fc9e59296_flash-dynamic-gradient.svg"
          alt="Zap Icon"
          className="w-85 h-85 float-anim"
        />
        <div className="absolute bottom-20 bg-white shadow-md px-6 py-3 rounded-xl h-20 flex items-center gap-3">
          <img
            src="https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683cab9d4733bf5a43e6b81e_Frame%20149%20(1).svg"
            alt="Rated Badge"
            className="w-9 h-9"
          />
          <span className="font-semibold text-2xl tracking-tight text-gray-900">
            4.9
          </span>
          <span className="instrument-serif-regular-italic font-semibold text-2xl tracking-tighter text-black">
            Rated Agency
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-center px-16">
        {/* Heading */}
        <h2
          className="text-[3.6vw] font-medium text-gray-900 tracking-tighter leading-[4vw] mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Digital Growth in{" "}
          <span className="instrument-serif-regular-italic">quick 4</span> <br />
          <span className="instrument-serif-regular-italic">Simple</span> Steps
        </h2>

        {/* Steps */}
        <div className="space-y-5">
          <div
            className="bg-gray-100 rounded-2xl p-5 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="300"
            onClick={() => toggleCard(1)}
          >
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683cab9d4733bf5a43e6b81e_Frame%20149%20(1).svg"
                alt="Step 1"
                className="w-8 h-8"
              />
              <h3 className="font-semibold text-xl tracking-tighter text-gray-900/90">
                Start Your Digital Journey With Confidence
              </h3>
            </div>
            <div
              className={`transition-all duration-500 overflow-hidden ${
                activeCard === 1 ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-black/80 font-medium text-sm">
                Begin by completing our contact form and telling us about your
                business goals. This first step helps us understand your needs and how
                we can best support your growth.
              </p>
            </div>
          </div>

          <div
            className="bg-orange-50 rounded-2xl p-5 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="400"
            onClick={() => toggleCard(2)}
          >
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683cab9dd9c15be471dc366e_Frame%20149%20(2).svg"
                alt="Step 2"
                className="w-8 h-8"
              />
              <h3 className="font-semibold text-xl tracking-tighter text-gray-900/90">
                Connect For A Strategy Call That Sets Direction
              </h3>
            </div>
            <div
              className={`transition-all duration-500 overflow-hidden ${
                activeCard === 2 ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-black/80 font-medium text-sm">
                Our team will schedule a discovery call to dive deeper into your
                challenges and goals, allowing us to align on the best digital
                strategy for your business.
              </p>
            </div>
          </div>

          <div
            className="bg-purple-50 rounded-2xl p-5 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="500"
            onClick={() => toggleCard(3)}
          >
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683cab9af5908465c823c338_Frame%20149%20(3).svg"
                alt="Step 3"
                className="w-8 h-8"
              />
              <h3 className="font-semibold text-xl tracking-tighter text-gray-900/90">
                Receive A Tailored Plan Built For Your Success
              </h3>
            </div>
            <div
              className={`transition-all duration-500 overflow-hidden ${
                activeCard === 3 ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-black/80 font-medium text-sm">
                Based on our discussion, we’ll create a growth plan designed to meet
                your unique objectives, budget, and timeline, with clear steps and
                measurable goals.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          className="relative w-51 flex items-center gap-3 text-white font-medium px-6 py-3 bg-[#4555FD] rounded-full overflow-hidden group mt-8"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {/* Text Animation */}
          <span className="relative h-6 overflow-hidden flex items-center">
            <span className="block transform transition-transform duration-700 ease-in-out group-hover:-translate-y-full">
              Send Inquiry
            </span>
            <span className="block absolute left-0 top-full transition-transform duration-700 ease-in-out group-hover:-translate-y-full">
              Send Inquiry
            </span>
          </span>

          {/* ArrowUpRight Icon Animation */}
          <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center shadow-md relative overflow-hidden">
            <ArrowUpRight className="w-6 h-6 text-black transform transition-transform duration-700 ease-in-out group-hover:translate-x-12" />
            <ArrowUpRight className="w-6 h-6 text-black absolute left-[-40px] transition-all duration-700 ease-in-out group-hover:left-2" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default DigitalGrowth;
