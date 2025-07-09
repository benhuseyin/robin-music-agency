import useScroll from "@/utils/hooks/useScroll";
import logo from "@/assets/images/image_robin_logo.webp";
import Image from "next/image";
import NavLink from "next/link";
import { Button } from "@/app/components/ui/button";

const DesktopNavbar = () => {
  const { handleScroll } = useScroll();
  return (
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
  );
};

export default DesktopNavbar;
