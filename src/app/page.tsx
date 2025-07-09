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

      {/* Footer */}
      <Footer />
    </div>
  );
}
