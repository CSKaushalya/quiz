import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import qBank from './components/QuestionBank';
import Question from './components/Question';
import Score from './components/Score';

function App() {
  const [questions, setQuestions] = useState([]); // Holds the shuffled list
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  // Function to shuffle the question bank
  const shuffleQuestions = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Initialize shuffled questions on first load
  useEffect(() => {
    setQuestions(shuffleQuestions(qBank));
  }, []);

  // Timer logic
  useEffect(() => {
    if (showScore || questions.length === 0) return;

    if (timeLeft === 0) {
      handleAnswerClick(null);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, showScore, questions]);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentIdx].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentIdx + 1;
    if (nextQuestion < questions.length) {
      setCurrentIdx(nextQuestion);
      setTimeLeft(10);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setQuestions(shuffleQuestions(qBank)); // Reshuffle for new attempt
    setScore(0);
    setCurrentIdx(0);
    setShowScore(false);
    setTimeLeft(10);
  };

  // Prevent rendering before questions are shuffled
  if (questions.length === 0) return <div className="text-white text-center mt-5">Loading Quiz...</div>;

  const progress = ((currentIdx + 1) / questions.length) * 100;

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <h1 className="app-title mb-4">React Quiz Master</h1>

      <div className="quiz-container w-100" style={{ maxWidth: '600px' }}>
        {!showScore && (
          <>
            <div className="progress mb-3 bg-secondary" style={{ height: "25px" }}>
              <div 
                className="progress-bar progress-bar-striped progress-bar-animated bg-primary" 
                style={{ width: `${progress}%` }}
              >
                Question {currentIdx + 1} / {questions.length}
              </div>
            </div>

            <div className={`text-end mb-3 fw-bold ${timeLeft < 5 ? 'text-danger' : 'text-white'}`}>
              <span className="badge bg-warning text-dark p-2">
                ⏳ Time Left: {timeLeft}s
              </span>
            </div>
          </>
        )}

        {showScore ? (
          <Score score={score} total={questions.length} handleRestart={restartQuiz} />
        ) : (
          <Question 
            question={questions[currentIdx]} 
            handleAnswerClick={handleAnswerClick} 
          />
        )}
      </div>
    </div>
  );
}

export default App;