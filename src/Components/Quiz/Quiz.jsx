import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
    const {logo,name,total,id} = quiz;
    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src={logo} className="card-img-top bg-black" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Total Quiz : {total}</p>
                    <Link to={`/quiz/${id}`} className="btn btn-primary">Start Quiz</Link>
                </div>
                </div>
        </div>
    );
};

export default Quiz;