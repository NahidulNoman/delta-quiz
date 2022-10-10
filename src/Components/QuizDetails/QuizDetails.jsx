import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizDetails = () => {
    const getQuizzes = useLoaderData();
    const quizzes = getQuizzes.data.questions;
    return (
        <div>
            {
                quizzes.map(questions => <Questions
                questions={questions}
                key={questions.id}
                ></Questions>)
            }
        </div>
    );
};

export default QuizDetails;