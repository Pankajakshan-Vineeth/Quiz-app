import React, { useState } from "react";
import "./Quiz.css";
import { data } from '../../assets/data';

const Quiz = () => {

let [qstnNo, setQstnNo] = useState(0);
let [question, setQuestion] = useState(data[qstnNo]);

const checkingAnser= (e, ans)=>{

  if (question.ans===ans) {
    e.target.classList.add('correct')
  }else{
    e.target.classList.add('wrong')
  }
}

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <div className="index">1 of 5 questions</div>
      <h2>{qstnNo+1}. {question.question}</h2>
      <ul>
        <li onClick={(e)=>{checkingAnser(e,1)}}>{question.option1}</li>
        <li onClick={(e)=>{checkingAnser(e,2)}}>{question.option2}</li>
        <li onClick={(e)=>{checkingAnser(e,3)}}>{question.option3}</li>
        <li onClick={(e)=>{checkingAnser(e,4)}}>{question.option4}</li>
      </ul>
      <button>Next</button>
    </div>
  );
};

export default Quiz;
