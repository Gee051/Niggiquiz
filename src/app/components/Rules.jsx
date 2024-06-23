"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Rules() {
  return (
    <section className="px-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="sm:w-1/2 text-center sm:text-left "
      >
        <div className="px-7">
          <h1 className="text-white mt-9 text-2xl sm:text-3xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-black">How To Play</span>
          </h1>
          <p className="text-black mb-3 text-lg sm:text-xl lg:text-2xl">
            Read carefully till the end
          </p>
        </div>
      </motion.div>

      <div className="flex flex-col sm:flex-row  px-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="sm:w-1/2 flex justify-center lg:mt-0"
        >
          <div className="w-[450px] h-[350px] lg:w-[400px] lg:h-[300px] relative">
            <Image
              src="/assets/cat1.png"
              alt="Niggquiz"
              className=" absolute object-contain w-[650px] h-[350px]"
              width={2300}
              height={1300}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="sm:w-1/2 text-center sm:text-left px-3 "
        >
          <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Input your name and Click Enter
            </span>
          </h1>
          <p className="text-black text-lg sm:text-xl lg:text-2xl mt-2">
            Select your preferred Category of Questions
          </p>

          <p className="text-black text-lg sm:text-xl lg:text-2xl mt-2">
            Then Scroll down
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col sm:flex-row  px-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="sm:w-1/2 flex justify-center mt-16 lg:mt-0"
        >
          <div className="w-[450px] h-[350px] lg:w-[400px] lg:h-[300px] relative">
            <Image
              src="/assets/shot11.png"
              alt="Nggquiz"
              className="object-contain w-[650px] h-[350px]"
              width={2700}
              height={1300}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="sm:w-1/2 text-center sm:text-left "
        >
          <h1 className="text-white text-xl sm:text-3xl lg:text-4xl lg:leading-normal font-extrabold pt-28">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 ">
              Select your preferred Level of Questions
            </span>
          </h1>
          <p className="text-black text-lg sm:text-xl lg:text-2xl mt-4">
            Then Click Start Quiz
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col sm:flex-row  px-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="sm:w-1/2 flex justify-center mt-16 lg:mt-0"
        >
          <div className="w-[450px] h-[350px] lg:w-[400px] lg:h-[300px] relative">
            <Image
              src="/assets/shot1.png"
              alt="Niggquiz"
              className=" object-contain w-[650px] h-[350px]"
              width={2300}
              height={1300}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="sm:w-1/2 text-center sm:text-left "
        >
          <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Start Quiz
            </span>
          </h1>
          <p className="text-black text-lg sm:text-xl lg:text-2xl mt-4">
            You are given 10 questions to be answered in 80 seconds and 4
            options each
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col sm:flex-row  px-3 pt-24 pb-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="sm:w-1/2 flex justify-center lg:mt-0 mt-5"
        >
          <div className="w-[450px] h-[350px] lg:w-[400px] lg:h-[300px] relative">
            <Image
              src="/assets/hint1.png"
              alt="Niggquiz"
              className="[650px] h-[350px]"
              width={1500}
              height={1000}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="sm:w-1/2 text-center sm:text-left "
        >
          <h1 className="text-white text-2xl  sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              You are given two hints
            </span>
          </h1>
          <p className="text-black text-lg mt-2 sm:text-xl lg:text-2xl">
            Hints help you by removing two of the wrong options and leaving you
            with one right and one wrong option
          </p>
        </motion.div>
      </div>

      <div className="place-self-center px-6 mx-2 left-1/2">
        <h1 className="text-white font-semibold text-3xl py-4">
          click here to play
        </h1>
        <Link href="/quiz">
          <button className="bg-[#967ed8] text-black py-2 px-4  hover:bg-[#967ed8] transition  mb-4 relative w-[200px] h-12 border-2 border-[#967ed8] bg-transparent rounded-full font-semibold text-lg cursor-pointer overflow-hidden duration-500 ease-in-out transform hover:text-black">
            Play Now
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#967ed8] to-transparent transition duration-500 ease-in-out transform scale-y-0 hover:scale-y-100"></span>
          </button>
        </Link>
      </div>
    </section>
  );
}
