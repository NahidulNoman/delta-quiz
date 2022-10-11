import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import './quiz.css';

const Quiz = ({quiz}) => {
    const {logo,name,total,id} = quiz;

    return (
            <div className="card shadow-lg" style={{width: '18rem'}}>
                <img src={logo} className="card-img-top cardColor" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title textColor fw-bold">{name}</h5>
                    <p className="card-text fw-semibold quizColor">Total Quiz : {total}</p>
                    <Link to={`/quiz/${id}`} className="btn btn-primary fw-semibold me-2">Start Quiz <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon> </Link>
                </div>
                </div>
       
    );
};

export default Quiz;