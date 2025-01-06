
import PropTypes from 'prop-types';

export default function Question({ question, answers, correctAnswer }) {
    return (
        <div>
            <h2>{question}</h2>
            <ul>
                {answers.map((answer, index) => (
                    <li key={index}>{answer}</li>
                ))}
            </ul>
        </div>
    );
}

Question.propTypes = {
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    correctAnswer: PropTypes.string.isRequired,
};