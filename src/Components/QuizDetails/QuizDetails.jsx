import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const QuizDetails = () => {
  const getQuizzes = useLoaderData();
  const ques = getQuizzes.data;
  
  return (
    <div>
      <Questions ques={ques}></Questions>
    </div>
  );
};

export default QuizDetails;
