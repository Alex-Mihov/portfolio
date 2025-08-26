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
                      h-fit w-[100%] py-9 px-23 bg-[#1e293b]">
        <Link to={"/"}
          className="text-3xl font-[750] text-white 
         hover:text-sky-700 
          transition-colors duration-300 ease-in-out
          cursor-pointer">
          AM
        </Link>

        <div className="flex text-[#c5cedb] text-xl font-medium">
          {headerButtons.map((btn) => (
            <Link
              to={btn.path}
              className="mx-4 hover:text-sky-700 
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
