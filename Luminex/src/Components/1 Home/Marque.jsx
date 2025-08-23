import React, { useEffect, useRef, useState } from "react";

const logos = [
  "https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683970e766b2814fc9e59244_logo-55.svg",
  "https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683970e766b2814fc9e59243_Frame-1.svg",
  "https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683970e766b2814fc9e59241_Frame-2.svg",
  "https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683970e766b2814fc9e59247_Frame-2.svg",
  "https://cdn.prod.website-files.com/683970e766b2814fc9e591a4/683970e766b2814fc9e59245_logo-7.svg",
];
const Marque = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full py-12 bg-white flex flex-col items-center gap-5 transform transition-all duration-1000 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
      }`}
    >
      {/* Dynamic line break text */}
      <p className="text-center font-medium text-gray-700 mb-8 text-sm sm:text-base md:text-lg max-w-[90%]">
        Be part of the 100+ businesses transforming their digital presence.
      </p>

      {/* Marquee logos */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-8 sm:gap-12 md:gap-16 animate-marquee">
          {logos.concat(logos).map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`logo-${i}`}
              className="h-8 sm:h-10 md:h-12 object-contain"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          gap: 2rem;
          animation: marquee 25s linear infinite;
        }

        @media (min-width: 640px) {
          .animate-marquee {
            gap: 3rem;
          }
        }

        @media (min-width: 768px) {
          .animate-marquee {
            gap: 4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Marque;
