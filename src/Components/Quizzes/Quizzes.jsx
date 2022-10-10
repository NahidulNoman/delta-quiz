import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Quizzes = ({perQus}) => {
    console.log(perQus)
    const {question,correctAnswer,options} = perQus;
    return (
        <div className='container'>
            <div className='shadow-lg m-5 p-3 rounded-3 bg-white'>
                <p className='text-center fw-semibold '>
                   {question}
                   <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                </p>
                <div>
                    {
                        options.map(option => <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label class="form-check-label" for="flexRadioDefault1">
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