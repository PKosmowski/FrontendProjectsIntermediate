'use client';

import { useState } from 'react';

let questions = require('../../data.json')


function Answers({answers}) {
    return (
        <div className='container-answers flex flex-col gap-10'>
                {answers.options.map((ans, key) => {
                    return <Answer text={ans} key={key}/>
                })}        
        </div>
    )
}

function Answer({ text }) {
    return <button className='bg-red-400 p-6 w-answerWidth rounded' >{text}</button>
}

function Question({question, index}) {
    return (
        <div>
            <div>Question {index+1} of 10</div>
            <div>{question}</div>
        </div>
    )
}

function Submit() {
    return <button className='bg-red-400 p-8'>SUBMIT ANSWER</button>
}

export default function HTMLQuestions() {
    let [index, setIndex] = useState(0)
    let [chosenAnswer, setChosenAnswer] = useState("")
    let actual_question = questions.quizzes[0].questions[index]
    let correctAnswer = questions.quizzes[0].questions[index].answer
    console.log(correctAnswer);
    
    function onAnswerSubmit() {
        if (chosenAnswer == actual_question.answer) {
            setIndex(index+1)
        } else {
            console.log('wrong answer!!!!!');
        }
    }


    return (
        <div className='flex gap-20'>
            <div className='container-left'>
                <Question question={actual_question.question} index={index}/>
            </div>
            <div className='container-right flex flex-col gap-20'>
                <Answers answers={actual_question}/>
                <button onClick={onAnswerSubmit}>submit</button>
            </div>

        </div>
    )
}

