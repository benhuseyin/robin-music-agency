import NavLink from "next/link";
import useScroll from "@/utils/hooks/useScroll";

const MobileNavbar = () => {
  const { handleScroll } = useScroll();
  return (
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
  );
};

export default MobileNavbar;
