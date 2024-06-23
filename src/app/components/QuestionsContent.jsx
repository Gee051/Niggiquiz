"use client";
import React, { useState, useEffect, useCallback, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import questionList from "../components/NiggiLinks/questionList";
import { FaEye } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";

export default function QuestionsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [subject, setSubject] = useState('');
  const [level, setLevel] = useState('');

  useEffect(() => {
    const params = Object.fromEntries(searchParams);
    setSubject(params.subject);
    setLevel(params.level);
  }, [searchParams]);

  const filteredQuestions = questionList.filter(
    (question) => question.subject === subject && question.level === level.toLowerCase()
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [feedback, setFeedback] = useState({});
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [hintsRemaining, setHintsRemaining] = useState(2);
  const [visibleOptions, setVisibleOptions] = useState([0, 1, 2, 3]);
  const [timeLeft, setTimeLeft] = useState(1 * 60 + 20); 
  const [showWarning, setShowWarning] = useState(false);



  useEffect(() => {
    const savedAnswers = localStorage.getItem("selectedAnswers");
    if (savedAnswers) {
      setSelectedAnswers(JSON.parse(savedAnswers));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
  }, [selectedAnswers]);



const handleQuit = useCallback(() => {
  router.push(
    `/scoreboard?totalQuestions=${filteredQuestions.length}&correctAnswers=${score.correct}&wrongAnswers=${score.incorrect}&hintsUsed=${2 - hintsRemaining}&category=${subject}&level=${level}`
  );
}, [router, score.correct, score.incorrect, filteredQuestions.length, hintsRemaining, subject, level]);





  useEffect(() => {
    if (timeLeft === 0) {
      handleQuit(); 
    } else {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      if (timeLeft === 30) {
        setShowWarning(true);
      } else if (timeLeft < 30) {
        setShowWarning(false);
      }

      return () => clearInterval(timer);
    }
  }, [timeLeft, handleQuit]);

  const handleAnswerClick = (answer) => {
    if (!selectedAnswers[currentQuestionIndex]) {
      const isCorrect =
        answer === filteredQuestions[currentQuestionIndex].correct_answer;
      setSelectedAnswers((prevAnswers) => ({
        ...prevAnswers,
        [currentQuestionIndex]: answer,
      }));
      setFeedback((prevFeedback) => ({
        ...prevFeedback,
        [currentQuestionIndex]: isCorrect ? "correct" : "wrong",
      }));
      setScore((prevScore) => ({
        correct: isCorrect ? prevScore.correct + 1 : prevScore.correct,
        incorrect: !isCorrect ? prevScore.incorrect + 1 : prevScore.incorrect,
      }));
    }
  };


  const handleNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setVisibleOptions([0, 1, 2, 3]); 
    }
  };


  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setVisibleOptions([0, 1, 2, 3]); 
  };


  const handleHintClick = () => {
    if (
      hintsRemaining > 0 &&
      visibleOptions.length > 2 &&
      !selectedAnswers[currentQuestionIndex]
    ) {
      const incorrectOptions = [0, 1, 2, 3].filter(
        (index) =>
          filteredQuestions[currentQuestionIndex][`op${index + 1}`] !==
          filteredQuestions[currentQuestionIndex].correct_answer
      );
      const optionsToHide = incorrectOptions
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);

      setVisibleOptions((prevOptions) =>
        prevOptions.filter((option) => !optionsToHide.includes(option))
      );
      setHintsRemaining((prevHints) => prevHints - 1);
    }
  };

  const handleSubmit = () => {
    handleQuit(); 
  };


  if (filteredQuestions.length === 0) return <div>Loading...</div>;

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];
  const feedbackStatus = feedback[currentQuestionIndex];

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  return (
    <main className="bg-gray-100  ">
      <div className="flex flex-col items-center justify-center min-h-screen p-2 m-2">
        <div className="text-3xl font-extrabold  items-center text-center flex flex-col uppercase pb-2">
          <h1 className="text-black">SUBJECT: {currentQuestion.subject}</h1>
          <h3 className="flex items-center justify-center">
            LEVEL: {currentQuestion.level}
          </h3>
        </div>
        <div className="w-full max-w-3xl p-5 bg-white shadow-md rounded-xl flex flex-col justify-center h-[600px] border-[2px] border-[#967ed8]">
          <div className="flex p-2 m-2 justify-between pb-16">
            <div className="flex gap-2">
              <FaEye
                className={`text-2xl font-bold ${
                  hintsRemaining > 0 && !selectedAnswer
                    ? "hover:text-[#9f88dd] cursor-pointer"
                    : "text-gray-500 cursor-not-allowed"
                }`}
                onClick={handleHintClick}
                disabled={hintsRemaining === 0 || !!selectedAnswer}
              />
              <h4 className="text-md">{hintsRemaining}</h4>
            </div>
            <div>
              <h6 className="text-gray-500 text-sm">
                {currentQuestionIndex + 1} out of {filteredQuestions.length}
              </h6>
            </div>
            <div className="flex items-center">
              <FaRegClock className="text-2xl font-extrabold hover:text-[#967ed8]" />
              <h4 className="text-sm ml-1">{formattedTime}</h4>
            </div>
          </div>
          {showWarning && (
            <div className="text-red-500  font-semibold text-center mb-2">
              You have 30 seconds left
            </div>
          )}
          <h1 className="text-2xl font-bold mb-4 pb-8 flex justify-center">
            {currentQuestion.question}
          </h1>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 w-[550px] items-center justify-center">
              {visibleOptions.map((optionIndex) => (
                <button
                  key={optionIndex}
                  className={`w-full p-3 rounded-full border-[2px]  text-black font-medium ${
                    selectedAnswer === currentQuestion[`op${optionIndex + 1}`]
                      ? feedbackStatus === "correct"
                        ? "bg-green-500"
                        : "bg-red-500"
                      : "bg-white"
                  } text-black`}
                  onClick={() =>
                    handleAnswerClick(currentQuestion[`op${optionIndex + 1}`])
                  }
                  disabled={!!selectedAnswer}
                >
                  {currentQuestion[`op${optionIndex + 1}`]}
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center mt-5">
            <button
              onClick={handlePrevious}
              className={`px-4 py-2 rounded-md ${
                currentQuestionIndex === 0
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-purple-500 text-white"
              }`}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={handleQuit}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Quit
            </button>
            {currentQuestionIndex === filteredQuestions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-md bg-green-500"
                disabled={!selectedAnswer}
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-md bg-green-500"
                disabled={!selectedAnswer}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
