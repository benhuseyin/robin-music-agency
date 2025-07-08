"use client";
import { X } from "lucide-react";
import Image from "next/image";
import { Menu } from "lucide-react";
import NavLink from "next/link";
import { Button } from "@/app/components/ui/button";
import useScroll from "@/utils/hooks/useScroll";
import logo from "@/assets/images/image_robin_logo.webp";

const Header = () => {
  const { isMenuOpen, toggleMenu, handleScroll } = useScroll();

  return (
    <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src={logo}
              className="w-30 h-20 object-contain mt-2.5"
              alt="Robin Music Agency"
              priority
            />
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <NavLink
              href="#artists"
              className="hover:text-blue-400 transition-colors"
              onClick={(e) => handleScroll(e, "artists")}
            >
              Artists
            </NavLink>
            <NavLink
              href="#about"
              className="hover:text-blue-400 transition-colors"
              onClick={(e) => handleScroll(e, "about")}
            >
              About
            </NavLink>
            <NavLink
              href="#contact"
              className="hover:text-blue-400 transition-colors"
              onClick={(e) => handleScroll(e, "contact")}
            >
              Contact
            </NavLink>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500">
              Book Now
            </Button>
          </div>
          <div className="md:hidden">
            {isMenuOpen ? (
              <X
                className="h-6 w-6 text-white mr-5 animate-fade-in cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <Menu
                className="h-6 w-6 text-white mr-5 animate-fade-in cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
