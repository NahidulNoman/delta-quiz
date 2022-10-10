import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizzes = () => {
    const quizzes = useLoaderData();
    console.log(quizzes);
    return (
        <div>
            <h2>this is quizzes .</h2>
        </div>
    );
};

export default Quizzes;