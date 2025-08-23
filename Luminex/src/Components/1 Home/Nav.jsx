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
    <div className="fixed top-4 left-0 w-full flex justify-center items-center z-50 px-2">
      <nav className="h-16 w-full max-w-[900px] px-4 rounded-full bg-[#1E2240] flex items-center shadow-lg relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 flex justify-center items-center text-white font-bold text-lg">
            +
          </div>
          <h1 className="text-white font-extrabold italic text-lg">Luminex</h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-white font-medium absolute left-1/2 transform -translate-x-1/2">
          {["Home", "About", "Works", "Pricing", "Blog"].map((item) => (
            <NavLink key={item} label={item} />
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center h-full absolute right-[3px]">
          <button className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white font-medium px-5 py-2 rounded-full text-sm overflow-hidden group">
            <span className="relative h-5 overflow-hidden flex items-center">
              <span className="block transition-transform duration-700 group-hover:-translate-y-full">
                Send Inquiry
              </span>
              <span className="block absolute left-0 top-full transition-transform duration-700 group-hover:-translate-y-full">
                Send Inquiry
              </span>
            </span>
            <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center shadow-md relative overflow-hidden">
              <ArrowUpRight className="w-5 h-5 text-black transform transition-transform duration-700 group-hover:translate-x-12" />
              <ArrowUpRight className="w-5 h-5 text-black absolute left-[-40px] transition-all duration-700 group-hover:left-2" />
            </div>
          </button>
        </div>

        {/* Menu Icon */}
        <div className="flex md:hidden items-center absolute right-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none transition-transform duration-500"
            style={{
              transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`absolute left-0 w-full rounded-2xl bg-[#1E2240] shadow-md transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "top-20 opacity-100 translate-y-0 pointer-events-auto"
              : "top-14 opacity-0 -translate-y-2 pointer-events-none"
          } md:hidden`}
        >
          <ul className="flex flex-col items-center gap-5 py-5 text-white font-medium">
            {["Home", "About", "Works", "Pricing", "Blog"].map((item) => (
              <NavLink
                key={item}
                label={item}
                onClick={() => setIsMenuOpen(false)}
              />
            ))}
            <button className="bg-gray-500 h-12 hover:bg-gray-600 text-white font-medium px-6 py-2 rounded-full">
              Send Inquiry
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
