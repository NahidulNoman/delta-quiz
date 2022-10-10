import React from 'react';
import Quizzes from '../Quizzes/Quizzes';

const Questions = ({ques}) => {
    const {questions,name} = ques;
    console.log(questions)
    return (
        <div className='container'>
                <h3 className='text-center m-5'>Question of  {name}</h3>
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