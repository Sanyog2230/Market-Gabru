import React, { useState, useEffect, useRef } from "react";
import { MapPin, Mail } from "lucide-react";
import Contact1 from "./Contact1";

const HeroAndContact = () => {
  const [animate, setAnimate] = useState(false);
  const [inputsVisible, setInputsVisible] = useState(false);
  const formRef = useRef(null);

  // Hero animation on mount
  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  // Scroll-based animation for form
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInputsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // 30% visible
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }
  }, []);

  return (
    <>
    <div className="relative">
      {/* HERO SECTION */}
      <section
        className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683c04cccc75e24bfe6dc48a_banner%20bg-p-2000.webp")',
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div
          className={`relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-20 gap-6 text-center
            transition-all duration-[1800ms] ease-out
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"}`}
        >
          <h1
            className="text-white font-medium tracking-tighter leading-[1.1]
            text-[clamp(3rem,8vw,7rem)] sm:text-[clamp(3.5rem,7vw,8rem)] lg:text-[clamp(4.5rem,6vw,9rem)]
            break-words"
          >
            Talk to <br />
            <span className="instrument-serif-regular-italic">Real Humans</span>
          </h1>

          <p
            className="text-white font-normal leading-relaxed max-w-full whitespace-nowrap
            text-[clamp(0.7rem,2vw,0.85rem)] sm:text-[clamp(0.8rem,1.8vw,0.95rem)] lg:text-[clamp(0.9rem,1.5vw,1rem)]"
          >
            No bots, no scripts —{" "}
            <span className="font-medium">
              just real experts ready to help you grow.
            </span>
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative bg-white flex flex-col items-center py-10 px-4">
        <div
          ref={formRef}
          className={`relative z-10 w-full max-w-5xl -mt-[15vh] transition-transform duration-700 ease-out ${
            inputsVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="bg-white rounded-[2.5rem] shadow-xl p-12">
            <form className="flex flex-col gap-5">
              {[
                { label: "Full Name", type: "text", placeholder: "Enter your full name" },
                { label: "Email address", type: "email", placeholder: "Enter your email address" },
                { label: "Subject", type: "text", placeholder: "Enter your subject" },
              ].map((input, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col transition-all duration-700 ease-out ${
                    inputsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <label className="font-medium mb-2">
                    {input.label}
                    {input.label.includes("Email") || input.label.includes("Name") ? (
                      <span className="text-red-500">*</span>
                    ) : null}
                  </label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    className="p-4 rounded-md bg-blue-50 outline-none border border-transparent focus:border-blue-500 transition text-lg"
                  />
                </div>
              ))}

              {/* Notes textarea */}
              <div
                className={`flex flex-col transition-all duration-700 ease-out ${
                  inputsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${3 * 150}ms` }}
              >
                <label className="font-medium mb-2">
                  Notes<span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="5"
                  placeholder="Enter here"
                  className="p-4 rounded-md bg-blue-50 outline-none border border-transparent focus:border-blue-500 transition text-lg"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                className={`group relative overflow-hidden flex items-center justify-center bg-blue-600 text-white py-3 rounded-md font-medium text-lg w-full transition-all duration-700 ease-out ${
                  inputsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${4 * 150}ms` }}
              >
                <span className="absolute inset-0 bg-white/80 scale-x-0 origin-center transition-transform duration-700 ease-in-out group-hover:scale-x-100 z-0"></span>
                <span className="relative z-10 text-white group-hover:text-black transition-colors duration-700 block text-center w-full">
                  Send Now
                </span>
              </button>
            </form>
          </div>

          <div className="flex gap-16 mt-8 text-gray-700 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-0.5" />
              <div>
                <p className="font-semibold">Office</p>
                <p className="text-gray-500">11 Garden, Town Hills</p>
                <p className="text-gray-500">Dubai, UAE 13690</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Mail className="w-5 h-5 mt-0.5" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-500">example@sellmark.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <Contact1/>
  </>
  );
};

export default HeroAndContact;
