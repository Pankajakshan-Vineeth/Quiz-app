import React, { useRef, useState } from "react";
import "./Quiz.css";
import { data } from '../../assets/data';

const Quiz = () => {

let [qstnNo, setQstnNo] = useState(0);
let [question, setQuestion] = useState(data[qstnNo]);
let [lockOption, setLockOption] = useState(false);
let [score, setScore] = useState(0);
let [result, setResult] = useState(false)

let Option1 = useRef(null)
let Option2 = useRef(null)
let Option3 = useRef(null)
let Option4 = useRef(null)

let OptionArray = [Option1,Option2,Option3,Option4]     

const checkingAnser= (e, ans)=>{

    if (lockOption===false) {
        if (question.ans===ans) {
            e.target.classList.add('correct')   //correct answer
            setLockOption(true)       //if answer is wrong or correct lock the option
            setScore(prev=>prev+1)    //setting score
          }else{
            e.target.classList.add('wrong')   //wrong answer
            setLockOption(true)     //if answer is wrong or correct lock the option
            OptionArray[question.ans-1].current.classList.add('correct') //show the correct answer if user chooses wrong
          }
    }
}

//next button 

const nextButton = () =>{
   if(lockOption===true){
    if (qstnNo + 1 === data.length) {
        setResult(true);
        return ;
    }

    setQstnNo(++qstnNo);
    setQuestion(data[qstnNo]);
    setLockOption(false);

    OptionArray.forEach((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      });
   }
}

const resetbutton = ()=>{
    setQstnNo(0);
    setQuestion(data[0]);
    setScore(0);
    setLockOption(0);
    setResult(false);
}

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <div className="index"> {qstnNo+1} of {data.length}</div>
      {!result && <>
  <h2>{qstnNo+1}. {question.question}</h2>      
  <ul>
    <li ref={Option1} onClick={(e)=>{checkingAnser(e,1)}}>{question.option1}</li>
    <li ref={Option2} onClick={(e)=>{checkingAnser(e,2)}}>{question.option2}</li>
    <li ref={Option3} onClick={(e)=>{checkingAnser(e,3)}}>{question.option3}</li>
    <li ref={Option4} onClick={(e)=>{checkingAnser(e,4)}}>{question.option4}</li>
  </ul>
  <button onClick={nextButton}>Next</button>
</>}

{result && <>
  <h2>You Score {score} Out of {data.length}</h2>
  <button onClick={resetbutton}>Reset</button>
</>}
</div>
  );
};

export default Quiz;
