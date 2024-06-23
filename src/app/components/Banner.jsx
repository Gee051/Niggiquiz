"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative bg-black">
      <div className="relative w-full h-[550px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[700px] rounded-md">
        <Image
          src="/assets/quiz1.jpg"
          alt="nggiquiz"
          layout="fill"
          objectFit="cover"
          className="opacity-25 "
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-6xl justify-center text-center sm:text-left grid grid-cols-1 sm:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
              <h1 className="text-white mb-4 text-4xl mt-2 sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  NIGGI-QUIZ
                </span>
              </h1>
              <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                An engaging kids quiz app offering educational challenges across
                different subjects, designed to make learning fun and
                interactive through stimulating questions and a user-friendly
                interface.
              </p>
              <div>
                <Link
                  href="/quiz"
                  className="px-6 inline-block py-3  hover:scale-105 hover:transition cursor-pointer sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-slate-200 text-white"
                >
                  Play Now
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-4 place-self-center mt-9 lg:mt-2"
            >
              <div className=" w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
                <Image
                  src="/assets/kids1.png"
                  alt="Nggquiz"
                  className="absolute transform -translate-x-1/2 -translate-y-1/2  p-2 top-1/2 left-1/2"
                  width={300}
                  height={300}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

{
        
}

