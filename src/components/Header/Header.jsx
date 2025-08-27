import { Link } from "react-router-dom";

const headerButtons = [
  { label: "Home", path: "/" },
  { label: "About", path: "/aboutme" },
  { label: "Skills", path: "/myskills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center
                      h-fit w-[100%] py-9 px-23 bg-[#0f172a]">
        <Link to={"/"}
          className="text-3xl font-[750] text-[#d3cdcd] 
         hover:text-white 
          transition-colors duration-300 ease-in-out
          cursor-pointer">
          AM
        </Link>

        <div className="flex text-[#d3cdcd] text-xl font-medium">
          {headerButtons.map((btn) => (
            <Link
              to={btn.path}
              className="mx-4 hover:text-white 
               transition-colors duration-300 ease-in-out
               cursor-pointer"
              key={btn.label}
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
