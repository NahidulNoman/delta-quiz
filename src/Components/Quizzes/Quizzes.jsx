import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import './Quizzes.css';


const Quizzes = ({perQus}) => {
    const {question,correctAnswer,options} = perQus;
    
    const correctAns = (correct) => {
        alert(correct)
    }

    const quizCorrect = (selectCorrect) => {
        if(selectCorrect === correctAnswer){
            alert('yes you selected right ans!!')
        }
        else{
            alert('wrong answer')
        }
    }

    return (
        <div className='container'>
            <div className='shadow-lg m-5 p-3 rounded-3 bg-white'>
                <div className='text-center fw-bold fs-4 d-flex justify-content-between p-3'>
                  <p className='color'> {question}</p>
                   <FontAwesomeIcon onClick={()=>correctAns(correctAnswer)} icon={faEye}></FontAwesomeIcon>
                </div>
                <div className='p-4'>
                    {
                        options.map(option => <div className="form-check bg-light fw-semibold mb-2 p-2 rounded-3 opacity-75">
                        <input onClick={()=>quizCorrect(option)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        
                          {option}
                        
                      </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Quizzes;