"use client";

import Home from "./components/Home";
import About from "./components/About";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import NavBar from './components/NavBar';
import Values from "./components/Values";

import Footer from "@/components/ui/footer";
import OurWork from "./components/OurWork";

export default function HomePage() {
  return (
    <div className="bg-pink-50">
      <NavBar />
      <div id='home'>
        <Home />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='mission'>
        <Mission />
      </div>
      <div id='values'>
        <Values />
      </div>
      <div id='work'>
        <OurWork />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}