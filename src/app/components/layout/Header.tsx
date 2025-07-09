"use client";

import DesktopNavbar from "./DesktopNavbar";
import Image from "next/image";
import logo from "@/assets/images/image_robin_logo.webp";

const Header = () => {
  return (
    <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between space-x-2">
          <Image
            src={logo}
            className="w-30 h-20 object-contain mt-2.5"
            alt="Robin Music Agency"
            priority
          />
          <nav className="flex items-center justify-between">
            <DesktopNavbar />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
