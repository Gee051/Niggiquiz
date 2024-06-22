"use client"
import React, { useState } from "react";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

const subjects = [
  { image: "/assets/math.jpeg", heading: "Mathematics" },
  { image: "/assets/english.jpg", heading: "English" },
  { image: "/assets/science.avif", heading: "Sciences" },
  { image: "/assets/gs.png", heading: "General Studies" },
  { image: "/assets/pe.png", heading: "Physical Education" },
  { image: "/assets/arts.jpg", heading: "Arts" },
];

const difficultyLevels = [
  { image: "/assets/low.webp", heading: "Easy" },
  { image: "/assets/medium.webp", heading: "Medium" },
  { image: "/assets/high.jpg", heading: "Hard" },
];

export default function Quiz() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 3) {
      setError("Name must be at least 3 characters long.");
      return;
    }
    setSubmitted(true); 
    localStorage.setItem('userName', name);
    
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
  };

  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-extrabold">Welcome</h1>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col">
          <label htmlFor="name">
            Enter your name:
          </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error && e.target.value.length >= 3) {
                  setError('');
                }
              }}
              required
              className="border-2 border-[#967ed8] rounded-lg p-2"
            />
          {error && (
            <div className="text-red-500 text-sm mt-2 ml-4">{error}</div>
          )}
             <button
          type="submit"
          className=" text-black py-2 px-4 m-4 hover:bg-[#967ed8]  transition  mb-4 relative w-[200px] h-12 border-2 border-[#967ed8]  bg-transparent rounded-full font-semibold text-lg cursor-pointer overflow-hidden duration-500 ease-in-out transform hover:text-white"
        >
          Enter
          <span className="absolute top-0 left-0 w-[200px] h-full bg-gradient-to-b from-transparent via-[#967ed8]  to-transparent transition duration-500 ease-in-out transform scale-y-0 hover:scale-y-100"></span>
        </button>
        </form>
      </div>
      
      <div>
        <h1 className="text-black text-4xl font-extrabold p-3 px-4">Select Category</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subject, index) => (
            <div key={index} className="p-4">
              <Image
                src={subject.image}
                alt={subject.heading}
                width={350}
                height={250}
                className={`object-contain w-full h-72 cursor-pointer rounded-t-lg hover:scale-105 transition ${selectedCategory === subject.heading ? 'border-4 border-[#967ed8]' : ''}`}
                onClick={() => handleCategorySelect(subject.heading)}
              />
              <h2 className="text-center text-xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {subject.heading}
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3">
        <h1 className="text-black text-4xl font-extrabold p-3 px-4">Select Level</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {difficultyLevels.map((level, index) => (
            <div key={index} className="p-4">
              <Image
                src={level.image}
                alt={level.heading}
                width={350}
                height={250}
                className={`object-contain w-full h-72 cursor-pointer rounded-t-lg hover:scale-105 transition ${selectedLevel === level.heading ? 'border-4 border-[#967ed8]' : ''}`}
                onClick={() => handleLevelSelect(level.heading)}
              />
              <h2 className="text-center text-xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {level.heading}
              </h2>
            </div>
          ))}
        </div>
      </div>

      <Link href={{
        pathname: "/questions",
        query: { subject: selectedCategory, level: selectedLevel }
      }}>
        <button
          disabled={name.length < 3 || !selectedCategory || !selectedLevel || !submitted}
          className={`text-black py-2 px-4 m-4 items-end hover:bg-[#967ed8] transition mb-4 relative w-[200px] h-12 border-2 border-[#967ed8] bg-transparent rounded-full font-semibold text-lg cursor-pointer overflow-hidden duration-500 ease-in-out transform hover:text-white ${name.length < 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Start Quiz
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#967ed8] to-transparent transition duration-500 ease-in-out transform scale-y-0 hover:scale-y-100"></span>
        </button>
      </Link>
      <Footer />
    </main>
  );
}
