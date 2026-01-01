import React from 'react';

const Option = ({ option, handleAnswerClick }) => {
    return (
        <button 
            className="btn btn-outline-light m-2 w-100 py-2 shadow-sm"
            onClick={() => handleAnswerClick(option)}
        >
            {option}
        </button>
    );
};

export default Option;