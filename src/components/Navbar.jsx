import { Link } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* Navbar for moblie view */}
      <nav className="w-full flex-col  lg:hidden flex ">
        <div className="bg-[#1e1e1e] w-full h-14 flex justify-between items-center">
          <span className="text-xl font-medium text-slate-50 ml-7 flex items-center">
            MENU
          </span>
          <button
            className="text-slate-50 text-xl mr-5"
            onClick={() => {
              setShow((prev) => !prev);
            }}
          >
            {show ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
        </div>
        <ul className={show ? "show_menu" : "close_menu"}>
          <Link to={"/"} className="nav_link2 my-3">
            HOME
          </Link>
          <Link to={"/aboutUs"} className="nav_link2 my-3 ">
            ABOUT US
          </Link>
          <Link to={"/solution-offered"} className="nav_link2 my-3 ">
            SOLUTIONS OFFERED
          </Link>
          <Link to={"/enquiry"} className=" nav_link2 my-3 ">
            SEND ENQUIRY
          </Link>
          {/* <Link to={"/"} className="nav_link my-3 ">
            CARRER WITH US
          </Link> */}
          <Link to={"/contactUs"} className="nav_link2 my-3">
            CONTACT US
          </Link>
        </ul>
      </nav>

      {/* Navbar for dekstop view */}
      <nav className="w-full h-16 bg-[#1e1e1e]  lg:flex hidden items-center justify-between">
        <div className="text-white"></div>
        <ul className="flex flex-row w-2/3 justify-evenly mr-24 text-slate-50 font-medium  nav_list">
          <Link className="nav_link" to={"/"}>
            HOME
          </Link>
          <Link className="nav_link" to={"/aboutUs"}>
            ABOUT US
          </Link>
          <Link className="nav_link" to={"/solution-offered"}>
            SOLUTIONS OFFERED
          </Link>
          <Link className="nav_link" to={"/enquiry"}>
            SEND ENQUIRY
          </Link>
          {/* <Link className="nav_link" to={"/"}>
            CARRER WITH US
          </Link> */}
          <Link className="nav_link" to={"/contactUs"}>
            CONTACT US
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
