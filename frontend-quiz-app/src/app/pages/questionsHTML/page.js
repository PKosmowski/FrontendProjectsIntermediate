let questions = require('../../data.json')

let i = 0
let actual_question = questions.quizzes[0].questions[i]

export default function HTMLQuestions() {

    return (
        <div className='flex gap-4'>
            <Question question={actual_question.question} />
            <Answers/>
        </div>
    )
}

function Answers() {
    actual_question.options.map((ans) => {
        <button>{ans}</button>
    });
    
    return (
        <div className='container-answers'>
            <ol className='flex flex-col'>
                {actual_question.options.map((ans, key) => {
                    return <button key={key}>{ans}</button>
                })}
            </ol>
            
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