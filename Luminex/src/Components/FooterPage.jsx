import React, { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const FooterPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <footer className="relative bg-white px-6 md:px-16 py-24 min-h-[80vh] overflow-hidden">
      {/* Main content with animation */}
      <div
        className="relative grid grid-cols-1 md:grid-cols-4 gap-10 text-sm z-10"
        data-aos="fade-up"
      >
        {/* Column 1: Gradient Logo + Info */}
        <div>
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-300 text-transparent bg-clip-text mb-4">
            LUMINEX
          </h1>
          <p className="text-gray-900 mb-2">
            <strong>Office</strong>
            <br />
            11 Garden, Town Hills
            <br />
            Dubai, UAE 13690
          </p>
          <p className="text-gray-900">
            <strong>Email</strong>
            <br />
            example@luminex.com
          </p>
        </div>

        {/* Column 2: Main Links */}
        <div>
          <h3 className="text-blue-600 mt-5 font-medium leading-0 mb-3">Main</h3>
          <ul className="space-y-1 text-gray-900">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Utility Links */}
        <div>
          <h3 className="text-blue-600 mt-5 leading-0 font-medium mb-3">Utility</h3>
          <ul className="space-y-2 text-gray-900">
            <li><a href="#">404</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-gray-900 mt-3 font-semibold text-lg mb-3">
            Newsletter for updates
          </h3>
          <p className="text-black/90 mb-4">Subscribe to get more updates</p>
          <div className="flex items-center w-90 bg-blue-50 rounded-full p-1 -ml-2 md:-ml-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent px-4 py-2 text-sm text-gray-900 focus:outline-none"
            />
            <div className="h-10 w-10 rounded-full bg-[#4555FD] flex justify-center items-center shadow-md relative overflow-hidden group cursor-pointer">
              <ArrowUpRight className="w-6 h-6 text-white transform transition-transform duration-700 ease-in-out group-hover:translate-x-12" />
              <ArrowUpRight className="w-6 h-6 text-white absolute left-[-40px] transition-all duration-700 ease-in-out group-hover:left-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Background LUMINEX Logo - bottom with glow */}
      <div className="absolute bottom-[-110px] left-0 w-full flex justify-center items-end z-0 pointer-events-none">
        <h1 className="text-[20vw] font-extrabold bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent animate-gradient-glow">
          LUMINEX
        </h1>
      </div>

      {/* Custom animation */}
      <style>{`
        @keyframes gradientGlow {
          0% {
            background-position: 0% 50%;
            filter: drop-shadow(0 0 20px rgba(59,130,246,0.3));
          }
          50% {
            background-position: 100% 50%;
            filter: drop-shadow(0 0 50px rgba(255,255,255,0.6));
          }
          100% {
            background-position: 0% 50%;
            filter: drop-shadow(0 0 20px rgba(59,130,246,0.3));
          }
        }
        .animate-gradient-glow {
          background-size: 200% 200%;
          animation: gradientGlow 5s infinite ease-in-out;
        }
      `}</style>
    </footer>
  );
};

export default function App() {
  return <FooterPage />;
}
