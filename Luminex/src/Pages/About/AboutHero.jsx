
import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import About1 from "./About1";
import About2 from "./About2";
import About3 from "./About3";
import About4 from "./About4";

const AboutHero = () => {
    const [animate, setAnimate] = useState(false);
    
      useEffect(() => {
        setAnimate(true);
      }, []);

  return (

    <>

    <div className="relative h-[110vh] w-full bg-cover bg-center bg-[url('https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683c04cccc75e24bfe6dc48a_banner%20bg-p-2000.webp')]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D33]/70 to-[#7B59FF]/50"></div>

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-20 gap-6 text-center
        transition-all duration-[1800ms] ease-out
        ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"}`}
      >
        {/* Headline */}
        <h1
          className="text-white font-medium tracking-tighter leading-[1.2]
          text-[clamp(2.5rem,7vw,6rem)] sm:text-[clamp(3rem,6vw,6.5rem)] lg:text-[clamp(4rem,5vw,8rem)]
          break-words"
        >
          <span className="block">We are <span className='instrument-serif-regular-italic tracking-tighter'>super</span></span>
          <span className="block">
            <span className="instrument-serif-regular-italic tracking-tighter">
              growth
            </span>{" "}
            <span className="font-semibold">Team</span>
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-white/80 font-normal leading-relaxed max-w-[90%]
          text-[clamp(0.8rem,2.5vw,1.1rem)] sm:text-[clamp(0.9rem,2vw,1.2rem)] lg:text-[clamp(1rem,1.8vw,1.3rem)]
          break-words"
        >
          All projects are designed to deliver impact —
          <span className="font-medium"> not just impressions</span>.
        </p>

        {/* Buttons */}
        <div
          className="
            flex items-center gap-6 mt-6 md:mt-10 
            flex-wrap justify-center relative
            md:translate-x-[-2rem]
          "
        >
        

          {/* Let's Contact Button */}
          <button className="relative flex items-center gap-3 bg-white text-black font-medium px-5 py-3 md:px-6 rounded-full overflow-hidden group">
            <span className="relative h-6 overflow-hidden flex items-center">
              <span className="block transform transition-transform duration-700 ease-in-out group-hover:-translate-y-full">
                Let’s Contact
              </span>
              <span className="block absolute left-0 top-full transition-transform duration-700 ease-in-out group-hover:-translate-y-full">
                Let’s Contact
              </span>
            </span>

            <div className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-black/85 flex justify-center items-center shadow-md relative overflow-hidden">
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white transform transition-transform duration-700 ease-in-out group-hover:translate-x-12" />
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white absolute left-[-40px] transition-all duration-700 ease-in-out group-hover:left-2" />
            </div>
          </button>

          {/* Book a Call Button */}
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

            <div className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-white flex justify-center items-center shadow-md relative overflow-hidden">
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-black transform transition-transform duration-700 ease-in-out group-hover:translate-x-12" />
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-black absolute left-[-40px] transition-all duration-700 ease-in-out group-hover:left-2" />
            </div>
          </a>
        </div>
      </div>

    </div>

          {/* Other Sections */}

          <About1/>
          <About2/>
          <About3/>
          <About4/>
    </>
  )
}

export default AboutHero