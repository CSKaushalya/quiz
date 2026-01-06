import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import qBank from './components/QuestionBank';
import Question from './components/Question';
import Score from './components/Score';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  const shuffleQuestions = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    setQuestions(shuffleQuestions(qBank));
  }, []);

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
    setQuestions(shuffleQuestions(qBank));
    setScore(0);
    setCurrentIdx(0);
    setShowScore(false);
    setTimeLeft(10);
  };

  if (questions.length === 0) return <div className="loader">Loading...</div>;

  const progress = ((currentIdx + 1) / questions.length) * 100;

  return (
    // min-vh-100 dammama mulu screen ekama gannawa. 
    // d-flex flex-column justify-content-center align-items-center classes walin madata gannawa.
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center py-4">
      <h1 className="app-title mb-4 text-center">QUIZ MASTER</h1>

      <div className="quiz-container w-100" style={{ maxWidth: '650px' }}>
        {!showScore && (
          <>
            <div className="progress mb-3 bg-secondary shadow-sm" style={{ height: "25px", borderRadius: "12px" }}>
              <div 
                className="progress-bar progress-bar-striped progress-bar-animated bg-primary" 
                style={{ width: `${progress}%`, borderRadius: "12px" }}
              >
                Question {currentIdx + 1} / {questions.length}
              </div>
            </div>

            <div className={`text-end mb-3 fw-bold ${timeLeft < 5 ? 'text-danger' : 'text-white'}`}>
              <span className="badge bg-warning text-dark p-2 shadow-sm">
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