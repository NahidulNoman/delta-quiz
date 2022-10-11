import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'


const Quizzes = ({perQus}) => {
    const {question,correctAnswer,options} = perQus;
    
    const correctAns = (correct) => {
        alert(correct)
    }

    return (
        <div className='container'>
            <div className='shadow-lg m-5 p-3 rounded-3 bg-white'>
                <p className='text-center fw-semibold '>
                   {question}
                   <FontAwesomeIcon onClick={()=>correctAns(correctAnswer)} icon={faEye}></FontAwesomeIcon>
                </p>
                <div>
                    {
                        options.map(option => <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                          {option}
                        </label>
                      </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Quizzes;