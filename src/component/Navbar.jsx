import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 80) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <nav
      className={
        !shadow
          ? "fixed top-0 left-0 w-full "
          : " fixed top-0 left-0 w-full bg-[#4a5965] shadow-xl"
      }
    >
      <div className="flex justify-between md:justify-between items-center px-16 py-4">
        <div className="bg-red-500 rounded-full w-[50px] h-[50px] flex justify-center items-center shadow-lg ">
          <p className="font-extrabold text-3xl p-3 text-white ">OlA</p>
        </div>

        <ul className="hidden md:flex justify-between uppercase font-bold ">
          <li className="p-4 hover:scale-105 active:text-red-600">
            <a href="/#home">Home </a>
          </li>
          <li className="p-4 hover:scale-105 active:text-red-600">
            <a href="/#about">about</a>
          </li>
          <li className="p-4 hover:scale-105 active:text-red-600">
            <a href="/#skills">skills </a>
          </li>
          <li className="p-4 hover:scale-105 active:text-red-600">
            <a href="/#projects">projects </a>
          </li>
          <li className="p-4 hover:scale-105 active:text-red-600">
            <a href="/#contact">contact </a>
          </li>
        </ul>

        <ul
          className={
            nav
              ? "z-50 uppercase fixed left-0 top-0 bg-black  w-[50%] h-full text-white flex flex-col justify-center items-center md:hidden"
              : "hidden"
          }
        >
          <a
            onClick={() => setNav(false)}
            href="/#home"
            className="p-5 font-bold m-3 bg-red-500 rounded-full w-[50%] text-center cursor-pointer"
          >
            Home
          </a>

          <a
            onClick={() => setNav(false)}
            href="/#about"
            className="p-5 font-bold m-3 bg-red-500 rounded-full w-[50%] text-center cursor-pointer"
          >
            about
          </a>

          <a
            onClick={() => setNav(false)}
            href="/#skills"
            className="p-5 font-bold m-3 bg-red-500 rounded-full w-[50%] text-center cursor-pointer"
          >
            skills
          </a>

          <a
            onClick={() => setNav(false)}
            href="/#projects"
            className="p-5 font-bold m-3 bg-red-500 rounded-full w-[50%] text-center cursor-pointer"
          >
            projects
          </a>

          <a
            onClick={() => setNav(false)}
            href="/#contact"
            className="p-5 font-bold m-3 bg-red-500 rounded-full w-[50%] text-center cursor-pointer"
          >
            contact
          </a>
        </ul>

        <div className="font-bold flex md:hidden" onClick={() => setNav(!nav)}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>
    </nav>
  );
}
