"use client";

import NavLink from "next/link";

import useScroll from "@/utils/hooks/useScroll";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import Hero from "@/app/components/sections/Hero";
import Artists from "@/app/components/sections/Artists";
import About from "@/app/components/sections/About";
import Contact from "@/app/components/sections/Contact";
export default function Home() {
  const { isMenuOpen, handleScroll } = useScroll();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Artists Section */}
      <Artists />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 mt-30 animate-fade-in">
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center h-full">
              <NavLink
                href="#artists"
                className="p-5 text-lg"
                onClick={(e) => handleScroll(e, "artists")}
              >
                Artists
              </NavLink>
              <NavLink
                href="#about"
                className="p-5 text-lg"
                onClick={(e) => handleScroll(e, "about")}
              >
                About
              </NavLink>
              <NavLink
                href="#contact"
                className="p-5 text-lg"
                onClick={(e) => handleScroll(e, "contact")}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
