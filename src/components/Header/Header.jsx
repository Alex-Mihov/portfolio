const headerButtons = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Header() {
  return (
    <>
    
      <div className="flex justify-between items-center h-fit w-[100%] p-9">
        <div className="text-3xl font-[750]">
          AM
        </div>

        <div className="flex">
          {headerButtons.map((btn) => (
            <div className="px-4" key={btn}>{btn}</div>
          ))}
        </div>
      </div>
    </>
  );
}
