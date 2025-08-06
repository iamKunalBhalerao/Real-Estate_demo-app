import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

  return (
    <section className="w-full max-w-full overflow-x-hidden md:flex md:justify-center z-[99] sticky top-0" style={{ background: headerColor }}>
      <div className="flex justify-between items-center px-6 sm:px-16 md:px-8 xl:px-16 w-full max-w-7xl mx-auto py-4 text-white text-opacity-78">
        {/* logo */}
        {/* <img src="./logo.png" alt="logo" width={100} className="flex-shrink-0" /> */}
        <h1 className="text-4xl font-black text-orange-500">Rent <span className="text-white">Pe</span></h1>
        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            className="hidden md:flex justify-center items-center gap-8"
            style={getMenuStyles(menuOpened)}
          >
            <a href="#residencies" className="hover:cursor-pointer whitespace-nowrap">Residencies</a>
            <a href="#value" className="hover:cursor-pointer whitespace-nowrap">Our Value</a>
            <a href="#contact-us" className="hover:cursor-pointer whitespace-nowrap">Contact Us</a>
            <a href="#get-started" className="hover:cursor-pointer whitespace-nowrap">Get Started</a>
            <button className="blue-gradient text-white font-medium px-6 py-2 rounded border-none transition-all duration-300 hover:cursor-pointer hover:scale-110 whitespace-nowrap">
              <a href="mailto:zainkeepscode@gmail.com">Contact</a>
            </button>
          </div>
          
          {/* Mobile menu */}
          <div
            className={`md:hidden ${menuOpened ? 'flex' : 'hidden'} absolute top-12 right-4 sm:right-16 bg-white text-black flex-col gap-8 font-medium p-6 sm:p-12 rounded-lg shadow-md transition-all duration-200 items-start min-w-[200px] max-w-[90vw]`}
            style={getMenuStyles(menuOpened)}
          >
            <a href="#residencies" className="hover:cursor-pointer">Residencies</a>
            <a href="#value" className="hover:cursor-pointer">Our Value</a>
            <a href="#contact-us" className="hover:cursor-pointer">Contact Us</a>
            <a href="#get-started" className="hover:cursor-pointer">Get Started</a>
            <button className="blue-gradient text-white font-medium px-6 py-2 rounded border-none transition-all duration-300 hover:cursor-pointer hover:scale-110">
              <a href="mailto:zainkeepscode@gmail.com">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="md:hidden block cursor-pointer"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
