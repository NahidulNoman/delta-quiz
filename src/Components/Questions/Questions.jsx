import React from 'react';

const Questions = ({questions}) => {
    console.log(questions)
    const {question,correctAnswer,options} = questions;
    return (
        <div className='container'>
            <div>
                <h3>Question : {question}</h3>
            </div>
        </div>
    );
};

export default Questions;