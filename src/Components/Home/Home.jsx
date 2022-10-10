import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css';

const Home = () => {
    const allQuizData = useLoaderData();
    const quizData = allQuizData.data;
    return (
        <div className='container '>
            <div className='home-container'>
            </div>
            <div className='quiz-container mb-5'>
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

export default Home;