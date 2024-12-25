import QuizButton from "./components/QuizButton";
let questions = require('./data.json')

export default function Home() {

  console.log(questions.quizzes[1].title);
  
  return (
    <div>
      <div className="left-section">
        <h1>Welcome to the <strong>Frontend Quiz!</strong></h1>
        <div>Pick a subject to get started.</div>
      </div>
      <div className="right-section">
        <QuizButton 
        title = {questions.quizzes[0].title}
        icon = {questions.quizzes[0].icon}
        />
        <QuizButton 
        title = {questions.quizzes[1].title}
        icon = {questions.quizzes[1].icon}
        />
        <QuizButton 
        title = {questions.quizzes[2].title}
        icon = {questions.quizzes[2].icon}
        />
        <QuizButton 
        title = {questions.quizzes[3].title}
        icon = {questions.quizzes[3].icon}
        />
      </div>
    </div>
  );
}
