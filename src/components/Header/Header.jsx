const headerButtons = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Header() {
  return (
    <>

      <div className="flex justify-between items-center
                      h-fit w-[100%] py-9 px-23 bg-[#1e293b]">
        <div className="text-3xl font-[750] text-white">
          AM
        </div>

        <div className="flex text-[#c5cedb] text-xl font-medium">
          {headerButtons.map((btn) => (
            <div className="mx-4 hover:text-blue-600 
                       transition-colors duration-300 ease-in-out
                       cursor-pointer" key={btn}>
              {btn}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
