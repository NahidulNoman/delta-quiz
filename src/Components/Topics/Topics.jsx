import React from 'react';
import Quiz from '../Quiz/Quiz';
import { useLoaderData } from 'react-router-dom';
import './topics.css';

const Topics = () => {
    const allQuizData = useLoaderData();
    const quizData = allQuizData.data;
    return (
        <div>
            <div className='container mt-5 quiz-container mb-5'>
                {
                    quizData.map(quiz=> <Quiz
                    key={quiz.id}
                    quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Topics;