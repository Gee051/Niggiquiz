"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Scoreboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [userName, setUserName] = useState('');
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [scorePercentage, setScorePercentage] = useState(0);
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }

    const total = searchParams.get('totalQuestions');
    const correct = searchParams.get('correctAnswers');
    const hints = searchParams.get('hintsUsed');
    const cat = searchParams.get('category');
    const lvl = searchParams.get('level');

    if (total && correct && hints && cat && lvl) {
      const totalQues = parseInt(total);
      const correctAns = parseInt(correct);
      const wrongAns = totalQues - correctAns;
      const hintsUsed = parseInt(hints);

    
      const percentage = (correctAns / totalQues) * 100;
      setTotalQuestions(totalQues);
      setCorrectAnswers(correctAns);
      setWrongAnswers(wrongAns);
      setHintsUsed(hintsUsed);
      setScorePercentage(percentage.toFixed(2)); 
      setCategory(cat);
      setLevel(lvl);
    }
  }, [searchParams]);

  return (
    <main className="bg-gray-100">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-black p-4 text-6xl font-extrabold">Hey {userName}</h1>
        <div className="w-full max-w-3xl p-5 bg-white shadow-md rounded-xl flex flex-col justify-center h-[300px] border-[2px] border-[#967ed8]">
          <h2 className="text-3xl font-bold flex items-center justify-center mb-3">
            Your Results:
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              {scorePercentage}%
            </span>
          </h2>
          <ul>
            <li className="flex justify-between font-semibold">
              Category of Questions:
              <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {category}
              </span>
            </li>
            <li className="flex justify-between font-semibold">
              Level of Questions:
              <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {level}
              </span>
            </li>
            <li className="flex justify-between font-semibold">
              Total Number of Questions:
              <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {totalQuestions}
              </span>
            </li>
            <li className="flex justify-between font-semibold">
              Total Number of Correct Answers:
              <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {correctAnswers}
              </span>
            </li>
            <li className="flex justify-between font-semibold">
              Total Number of Wrong Answers:
              <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {wrongAnswers}
              </span>
            </li>
            <li className="flex justify-between font-semibold">
              Hints used:
              <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {hintsUsed}
              </span>
            </li>
          </ul>
        </div>
        <button
          type="button"
          onClick={() => router.push('/quiz')}
          className="bg-slate-300 text-black py-2 px-4 m-4 hover:bg-[#967ed8] transition mb-4 relative w-[200px] h-12 border-2 border-[#967ed8] bg-transparent rounded-full font-semibold text-lg cursor-pointer overflow-hidden duration-500 ease-in-out transform hover:text-white"
        >
          Play again
          <span className="absolute top-0 left-0 w-[200px] h-full bg-gradient-to-b from-transparent via-[#967ed8] to-transparent transition duration-500 ease-in-out transform scale-y-0 hover:scale-y-100"></span>
        </button>
      </div>
    </main>
  );
}
