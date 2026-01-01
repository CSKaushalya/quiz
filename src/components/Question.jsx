import React from 'react';
import Option from './Option';

const Question = ({ question, handleAnswerClick }) => {
    return (
        <div className="card bg-dark text-white p-4 shadow-lg border-secondary">
            <h3 className="mb-4 text-center">{question.question}</h3>
            <div className="d-flex flex-column align-items-center">
                {question.options.map((opt, index) => (
                    <Option 
                        key={index} 
                        option={opt} 
                        handleAnswerClick={handleAnswerClick} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Question;