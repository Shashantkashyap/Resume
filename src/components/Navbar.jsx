import React, { useState } from "react";
import alma from "../assets/alma.png";
import { useNavigate } from "react-router-dom";
import { IoReorderFourOutline } from "react-icons/io5";
import "./Nav.css"
function Navbar() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate()

  const resumeTemplate = ()=>{
    setActive(1);
    navigate("/")
  }

  const myResume = ()=>{
    setActive(2);
    navigate("/myResume")
  }

  const aboutUs = ()=>{
    setActive(3);
    navigate("/about")
  }

  return (
    <div className=" bg-white rounded-md">
      <div className="flex items-center justify-between w-full h-full p-3 lg:px-5  ">
        <div className=" lg:w-[180px] w-[100px] bg-contain">
          <img src={alma} alt="Logo"/>
        </div>

        <div className=" mr-4 lg:hidden md:hidden nav-icon cursor-pointer">
          <IoReorderFourOutline fontSize={25}/>
         <div className="hidden">
         <div className="w-3 h-3 rotate-45 absolute top-[6%] bg-white hidden ">
            <div></div>
          </div>
          <div className=" bg-white absolute w-[100px] h-[100px] right-[10%] top-[7%] text-sm gap-3 flex flex-col items-center justify-center ">
          <p
            className={`flex gap-10 lg:text-xl sm:text-sm font-semibold ${
              active === 1 ? "text-blue-600" : "text-black"
            }`}
            onClick={resumeTemplate}
          >
            Templates
          </p>
          <p
            className={`flex lg:gap-10 sm:gap-5 lg:text-xl sm:text-sm font-semibold ${
              active === 2 ? "text-blue-600" : "text-black"
            }`}
            onClick={myResume}
          >
            My Resume
          </p>
          <p
            className={`flex lg:gap-10 sm:gap-5 lg:text-xl sm:text-sm font-semibold ${
              active === 3 ? "text-blue-600" : "text-black"
            }`}
            onClick={aboutUs}
          >
            About Us
          </p>
          </div>
         </div>
        </div>

        <div className="flex gap-10 max-md:hidden cursor-pointer mr-5">
          <p
            className={`flex gap-10 lg:text-xl sm:text-sm font-semibold ${
              active === 1 ? "text-blue-600" : "text-black"
            }`}
            onClick={resumeTemplate}
          >
            Resume Templates
          </p>
          <p
            className={`flex lg:gap-10 sm:gap-5 lg:text-xl sm:text-sm font-semibold ${
              active === 2 ? "text-blue-600" : "text-black"
            }`}
            onClick={myResume}
          >
            My Resume
          </p>
          <p
            className={`flex lg:gap-10 sm:gap-5 lg:text-xl sm:text-sm font-semibold ${
              active === 3 ? "text-blue-600" : "text-black"
            }`}
            onClick={aboutUs}
          >
            About Us
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
