import React, { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About3 = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 900, // animation duration in ms
      easing: "ease-in-out",
      once: true, // animate only once
    });
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="relative h-110 mt-10 w-full transform"
      data-aos="zoom-in"   // scale animation
    >
      {/* Video */}
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src="/videos/Luminex.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Bottom Overlay with Glass Effect */}
      <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-md shadow-lg text-transparent p-3 pl-35 pr-10 flex items-center justify-between">
        {/* Left Side: Title */}
        <div className="flex items-center gap-2">
          <span className="text-4xl text-white font-semibold">Luminex</span>
        </div>

        {/* Right Side: Pause/Play Icon */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="bg-black bg-opacity-40 p-3 rounded-full hover:bg-opacity-60 transition"
        >
          {isPlaying ? (
            /* Pause Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h-1.5v12h1.5V6zm4.5 0h-1.5v12h1.5V6z"
              />
            </svg>
          ) : (
            /* Play Icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 4l12 8-12 8V4z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default About3;
