import React from 'react';
import Quizzes from '../Quizzes/Quizzes';

const Questions = ({ques}) => {
    const {questions,name} = ques;
    
    return (
        <div className='container'>
                <h3 className='text-center m-5 text-decoration-underline fs-2 fw-bold'>Quiz of <span className='text-primary'> {name}</span></h3>
            <div>
                {
                    questions.map(perQus => <Quizzes
                    perQus={perQus}
                    key={perQus.id}
                    ></Quizzes>)
                }
            </div>
        </div>
    );
};

export default Questions;