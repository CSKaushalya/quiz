import React from 'react';

const Score = ({ score, total, handleRestart }) => {
    return (
        <div className="card bg-success text-white p-5 text-center shadow-lg">
            <h2 className="display-4">Quiz Finished!</h2>
            <hr />
            <h3 className="my-4">Your Score: {score} / {total}</h3>
            <p className="lead">
                {score === total ? "🏆 Perfect Score!" : "Good effort! Keep learning."}
            </p>
            <button className="btn btn-light btn-lg mt-3" onClick={handleRestart}>
                Play Again
            </button>
        </div>
    );
};

export default Score;