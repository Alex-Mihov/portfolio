import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const headerButtons = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full flex justify-between items-center
          py-9 px-23 transition-all duration-300 ease-in-out z-50
          ${scrolled
            ? "bg-[#0f172a]/60 border-b border-gray-500 backdrop-blur-md"
            : "bg-[#0f172a] border-b-0"
          }`}
      >
        <Link
          to={"/"}
          className="text-3xl font-[750] text-[#d3cdcd] hover:text-white transition-colors duration-300 ease-in-out cursor-pointer"
        >
          AM
        </Link>

        <div className="flex text-[#d3cdcd] text-xl font-medium">
          {headerButtons.map((btn) => (
            <div
              className="mx-4 hover:text-white transition-colors duration-300 ease-in-out cursor-pointer"
              key={btn}
            >
              {btn}
            </div>
          ))}
        </div>
      </div>
      <div />
    </>
  );
}
