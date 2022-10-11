import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import HomeQuiz from '../homeQuiz/HomeQuiz';

const Home = () => {
    const quizzes = useLoaderData();
    const homeQuiz = quizzes.data;
    console.log(homeQuiz);

    return (
        <div className='container '>
            <div className='home-container mt-5'>
            <p className='d-flex justify-content-center  align-items-center text-white h-100 fw-bold fs-2 w-50 mx-auto flex-column'>
           <span className='practice'> Practice makes perfect. Meaning – Doing something again and again is the best way to learn it.</span> <br />
           <Link to='/topics'>
           <button className='btn btn-primary fw-semibold me-2'>Start Quiz <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon></button>
           </Link>
            </p>
            </div>
            <div className='homeQuiz mb-5'>
                {
                    homeQuiz.map(quiz => <HomeQuiz
                    quiz={quiz}
                    key={quiz.id}
                    ></HomeQuiz>)
                }
            </div>
        </div>
    );
};

export default Home;