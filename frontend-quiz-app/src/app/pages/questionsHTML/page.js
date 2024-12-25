'use client';

let questions = require('../../data.json')

let i = 0
let actual_question = questions.quizzes[0].questions[i]


function Submit() {
    const next = () => {
        i+=1
        console.log(i);
        
    }
    return (
        <button onClick={next}>CLICK ME!</button>
    )
}

function Answers() {
    return (
        <div className='container-answers flex flex-col gap-10'>
                {actual_question.options.map((ans, key) => {
                    return <Answer text={ans} key={key} />
                })}        
        </div>
    )
}

function Answer({ text }) {
    return <button className='bg-red-600 p-6 rounded'>{text}</button>
}

function Question({question}) {
    return (
        <div>
            <div>Question {i+1} of 10</div>
            <div>{question}</div>
        </div>
    )
}


export default function HTMLQuestions() {
    return (
        <div className='flex gap-20'>
            <div className='container-left'>
                <Question question={actual_question.question} />
            </div>
            <div className='container-right flex flex-col gap-20'>
                <Answers/>
                <Submit />
            </div>

        </div>
    )
}