import { useState } from "react";
import questions from "../data.json";
import Question from "./Question";


export default function StartScreen() {
    const [subject, setSubject] = useState(null)
    const [questionIndex, setQuestionIndex] = useState(null)
    console.log(questions.quizzes[0].questions[0]);
    
    
    if (subject === null) {
        return (
            <div className="start-screen">
                <div className="start-right">
                    <h1>Welcome to the <strong>Frontend Quiz!</strong></h1>
                    <p>Pick a subject to get started.</p>
                </div>
                <div className="start-left">
                    <button className="HTML" onClick={() => setSubject(0)}>HTML</button>
                    <button className="CSS" onClick={() => setSubject(1)}>CSS</button>
                    <button className="JavaScript" onClick={() => setSubject(2)}>JavaScript</button>
                    <button className="accessibility" onClick={() => setSubject(3)}>Accessibility</button>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <Question 
                question={questions.quizzes[subject].questions[questionIndex].question}
                answers={questions.quizzes[subject].questions[questionIndex].options}
                correctAnswer={questions.quizzes[subject].questions[questionIndex].answer}
                />
            </div>
        )
    }

}