import QuizButton from "./components/QuizButton";
import './globals.css'
import Link from "next/link";
let questions = require('./data.json')

export default function Home() {
  return (
    <div className="flex gap-40">
      <div className="left-section flex flex-col gap-10">
        <h1 className="flex flex-col text-6xl">Welcome to the <strong>Frontend Quiz!</strong></h1>
        <div className="opacity-40">Pick a subject to get started.</div>
      </div>
      <div className="right-section flex flex-col gap-8">
        <Link href="pages/questionsHTML">
          <QuizButton 
          title = {questions.quizzes[0].title}
          icon = {questions.quizzes[0].icon}
          />
        </Link>
        <Link href="pages/questionsCSS">
          <QuizButton 
          title = {questions.quizzes[1].title}
          icon = {questions.quizzes[1].icon}
          />
        </Link>
        <Link href="pages/questionsJS">
          <QuizButton 
          title = {questions.quizzes[2].title}
          icon = {questions.quizzes[2].icon}
          />
        </Link>
        <Link href="pages/questionsAccessibility">
          <QuizButton 
          title = {questions.quizzes[3].title}
          icon = {questions.quizzes[3].icon}
          />
        </Link>
      </div>
    </div>
  );
}
