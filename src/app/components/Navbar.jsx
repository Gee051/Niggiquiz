"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import navBarList from "./NiggiLinks/navBarList";

const Navbar = () => {
  const [sidenav, setSidenav] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  const [show, setShow] = useState(false);


  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const handleOutsideClick = (event) => {
    if (!event.target.classList.contains("dropdown-open")) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, );



  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 768) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  return (
    <div 
    className={`w-full h-20 border-b-[1px] sticky top-0 border-b-purple-200 gap-2 px-4 shadow-lg z-50 ${
        scrolling ? "bg-[#fdfdfd] text-black" : "bg-[#140b1f] text-white" 
      }`}
    >
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <div className="flex items-center justify-between h-full">
          <Link href="/">
            <div>
              <Image
                className="object-cover "
                src="/assets/niggiquiz-.png"
                width={150}
                height={90}
                alt="Niggi quiz"
              />
            </div>
          </Link>
          <div>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-50 p-0 gap-2"
              >
                <ul className="flex space-x-3">
                  {navBarList.map(({ _id, title, link }) => (
                    <Link
                      key={_id}
                      className="flex font-normal font-serif hover:font-bold w-20 h-6 justify-center items-center px-12 text-base hover:underline underline-offset-[4px] decoration-[1px] hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 hoverEffect last:border-r-0 "
                      href={link}
                    >
                      <li>{title}</li>
                    </Link>
                  ))}
                </ul>
              </motion.ul>
            )}
            <FiMenu
              onClick={() => setSidenav(!sidenav)}
              className={`first-line:inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4  hover:text-purple-600
              ${
                scrolling ? " text-black" : " text-white" 
              }`}
            />

            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className="w-full h-full bg-primeColor p-6">
                    <Link href="/">
                      <Image
                        className="object-cover"
                        width={180}
                        height={70}
                        src="/assets/niggiquiz-.png"
                        alt="Niggi quiz"
                      />
                    </Link>
                    <ul className="text-gray-200 flex flex-col gap-2">
                    {navBarList.map(({ _id, title, link }) => (
                    <li
                     className="font-normal hover:font-bold font-serif items-center text-2xl text-gray-300 hover:underline underline-offset-[4px] decoration-[1px] hover:text-purple-500 md:border-r-[2px] border-blue-500 hoverEffect last:border-r-0"
                    key={_id}
                  >
                    <Link href={link} onClick={() => setSidenav(false)}>
                      {title}
                    </Link>
                  </li>
                   
                  ))}
                    </ul>
                    <span
                      onClick={() => setSidenav(false)}
                      className="w-8 h-8 border-[1px] border-gray-300 absolute top-24 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300 "
                    >
                      <MdClose />
                    </span>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

