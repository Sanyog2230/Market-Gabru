import React, { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const SmartService = () => {
  const services = [
    {
      icon: "https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683ca488317af4d1a9e1ddc2_sheild-iso-gradient.svg",
      title: ["Search engine", "optimization"],
      desc: "We optimize your website structure, content, and backlink profile to improve rankings, boost traffic.",
      highlight: false,
    },
    {
      icon: "https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683ca488ca0a0ddd3d32f550_thumb-up-iso-gradient.svg",
      title: ["Pay-per-click", "advertising"],
      desc: "Google Ads to Facebook, we manage your budget efficiently, craft compelling ads, and continuously test.",
      highlight: true,
    },
    {
      icon: "https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683ca6525b0230cea9644851_bell-dynamic-gradient.svg",
      title: ["Social media", "marketing"],
      desc: "We create scroll-stopping content, manage your platforms, and engage your community to grow.",
      highlight: false,
    },
    {
      icon: "https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683ca488ea2531459069c112_copy-dynamic-gradient.svg",
      title: ["Content", "Marketing"],
      desc: "We optimize your website structure, content, and backlink profile to improve rankings, boost traffic.",
      highlight: true,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full h-[90vh] py-16 px-10 bg-white">
      {/* Top Heading */}
      <div
        className="flex justify-between px-5 items-end mb-14"
        data-aos="fade-up"
      >
        <h2 className="text-6xl font-semibold text-gray-900 tracking-tighter">
          Smart <span className="instrument-serif-regular-italic">Service</span>
          <br />
          <span className="instrument-serif-regular-italic">That</span> Real
          Impact.
        </h2>

        {/* Animated Contact Button */}
        <button className="relative flex items-center gap-3 text-white font-medium px-6 py-3 bg-[#4555FD] rounded-full overflow-hidden group">
          {/* Text Animation */}
          <span className="relative h-6 overflow-hidden flex items-center">
            <span className="block transform transition-transform duration-700 ease-in-out group-hover:-translate-y-full">
              Let’s Contact
            </span>
            <span className="block absolute left-0 top-full transition-transform duration-700 ease-in-out group-hover:-translate-y-full">
              Let’s Contact
            </span>
          </span>

          {/* ArrowUpRight Icon Animation */}
          <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center shadow-md relative overflow-hidden">
            <ArrowUpRight className="w-6 h-6 text-black transform transition-transform duration-700 ease-in-out group-hover:translate-x-12" />
            <ArrowUpRight className="w-6 h-6 text-black absolute left-[-40px] transition-all duration-700 ease-in-out group-hover:left-2" />
          </div>
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-3xl shadow-md text-center transition  ${
              service.highlight ? "bg-blue-50" : "bg-white"
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 200} // slight delay for staggered effect
          >
            <img
              src={service.icon}
              alt={service.title.join(" ")}
              className="w-25 h-25 mx-auto mb-6"
            />
            <h3 className="text-2xl tracking-tighter leading-7 font-semibold text-gray-900 mb-3">
              {service.title[0]} <br /> {service.title[1]}
            </h3>
            <p className="text-black text-[1vw] font-[400] leading-snug tracking-tight">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartService;
