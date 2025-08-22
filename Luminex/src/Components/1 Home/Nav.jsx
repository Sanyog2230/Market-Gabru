import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NavLink = ({ label, onClick }) => (
  <li
    className="hover:text-purple-300 cursor-pointer transition-colors duration-300"
    onClick={onClick}
  >
    {label}
  </li>
);

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed top-4 left-0 w-full flex justify-center items-center z-50 px-3 sm:px-4">
      <nav className="h-14 sm:h-16 w-full max-w-[900px] px-4 sm:px-6 rounded-full bg-[#1E2240] flex items-center justify-between shadow-lg relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 flex justify-center items-center text-white font-bold">
            +
          </div>
          <h1 className="text-white font-extrabold italic text-base sm:text-xl">
            Luminex
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex gap-6 text-white font-medium font-[Montserrat]">
          {["Home", "About", "Works", "Pricing", "Blog"].map((item) => (
            <NavLink key={item} label={item} />
          ))}
        </ul>

        {/* Send Inquiry Button (Visible on Desktop) */}
        <div className="hidden lg:flex items-center gap-6 h-full">
          <button className="relative flex items-center gap-3 bg-gray-500 hover:bg-gray-600 text-white font-medium px-4 sm:px-6 py-2 rounded-full overflow-hidden group">
            {/* Text Animation */}
            <span className="relative h-6 overflow-hidden flex items-center text-sm sm:text-base">
              <span className="block transform transition-transform duration-700 ease-in-out group-hover:-translate-y-full">
                Send Inquiry
              </span>
              <span className="block absolute left-0 top-full transition-transform duration-700 ease-in-out group-hover:-translate-y-full">
                Send Inquiry
              </span>
            </span>

            {/* Arrow Animation */}
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white flex justify-center items-center shadow-md relative overflow-hidden">
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-black transform transition-transform duration-700 ease-in-out group-hover:translate-x-12" />
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-black absolute left-[-40px] transition-all duration-700 ease-in-out group-hover:left-2" />
            </div>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div
            className="absolute top-14 sm:top-16 left-0 w-full rounded-b-2xl bg-[#1E2240] shadow-md lg:hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-white font-medium font-[Montserrat] text-lg">
              {["Home", "About", "Works", "Pricing", "Blog"].map((item) => (
                <NavLink
                  key={item}
                  label={item}
                  onClick={() => setIsMenuOpen(false)}
                />
              ))}
              <button className="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-medium px-6 py-2 rounded-full">
                Send Inquiry
              </button>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
