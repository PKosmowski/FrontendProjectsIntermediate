let questions = require('../../data.json')

let i = 0
let actual_question = questions.quizzes[0].questions[i]

export default function HTMLQuestions() {

    return (
        <div>
            <Answers/>
        </div>
    )
}

function Answers() {
    console.log(actual_question);
    
    return (
        <div className='container-answers'>
            testss
        </div>
    )
}

function Answer({ text }) {
    return <button></button>
}

function Question({question}) {
    return (
        <div>{question}</div>
    )
}

function SubmitAnswer() {
    return (
        <button>SUBMIT</button>
    )
}