import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import qBank from './components/QuestionBank';
import Question from './components/Question';
import Score from './components/Score';

function App() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds per question

  // Timer logic using useEffect
  useEffect(() => {
    if (showScore) return;

    if (timeLeft === 0) {
      handleAnswerClick(null); // Automatically move to next if time runs out
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, showScore]);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === qBank[currentIdx].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentIdx + 1;
    if (nextQuestion < qBank.length) {
      setCurrentIdx(nextQuestion);
      setTimeLeft(10); // Reset timer for new question
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentIdx(0);
    setShowScore(false);
    setTimeLeft(10);
  };

  const progress = ((currentIdx + 1) / qBank.length) * 100;

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <h1 className="app-title mb-4">React Quiz Master</h1>

      <div className="quiz-container">
        {!showScore && (
          <>
            <div className="progress mb-3 bg-secondary" style={{ height: "25px" }}>
              <div 
                className="progress-bar progress-bar-striped progress-bar-animated bg-primary" 
                style={{ width: `${progress}%` }}
              >
                Question {currentIdx + 1} / {qBank.length}
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
          <Score score={score} total={qBank.length} handleRestart={restartQuiz} />
        ) : (
          <Question 
            question={qBank[currentIdx]} 
            handleAnswerClick={handleAnswerClick} 
          />
        )}
      </div>
    </div>
  );
}

export default App;