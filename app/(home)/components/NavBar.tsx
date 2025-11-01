"use client";

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { JSX, SVGProps } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-rose-400 text-rose-50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <ScrollLink className="flex items-center cursor-pointer gap-3" to="home" smooth duration={800}>
            <img src="/girlup-logo.jpg" alt="Girl Up FOJ" className="w-8 h-8 rounded-lg" />
            <span className="text-lg font-semibold">Girl Up: FOJ</span>
          </ScrollLink>

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
          
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <ScrollLink className="hover:text-rose-200 cursor-pointer transition duration-300" to="home" smooth duration={1000}>
              Home
            </ScrollLink>
            <ScrollLink className="hover:text-rose-200 cursor-pointer transition duration-300" to="about" smooth duration={1000}>
              About
            </ScrollLink>
            <ScrollLink className="hover:text-rose-200 cursor-pointer transition duration-300" to="mission" smooth duration={1000}>
              Mission
            </ScrollLink>
            <ScrollLink className="hover:text-rose-200 cursor-pointer transition duration-300" to="values" smooth duration={1000}>
              Values
            </ScrollLink>
            <ScrollLink className="hover:text-rose-200 cursor-pointer transition duration-300" to="work" smooth duration={1000}>
              Our Work
</ScrollLink>
            <ScrollLink className="hover:text-rose-200 cursor-pointer transition duration-300" to="contact" smooth duration={1000}>
              Join Us
            </ScrollLink>
          </nav>
        </div>
      </div>
      
      <div 
        className={`md:hidden absolute left-0 w-full bg-rose-700 shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center text-center py-4">
          {["home", "about", "mission", "values", "our work", "contact"].map((item) => (
            <ScrollLink 
              key={item}
              className="w-full p-3 hover:text-rose-200 cursor-pointer capitalize transition duration-300 border-b border-rose-600" 
              to={item} 
              smooth 
              duration={1000} 
              onClick={() => setIsOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </ScrollLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}