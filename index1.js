const questions = [
    {
        question: "What is the capital of France?",
        options: { A: "Berlin", B: "Madrid", C: "Paris", D: "Rome" },
        correct: "C"
    },
    {
        question: "What is 2 + 2?",
        options: { A: "3", B: "4", C: "5", D: "6" },
        correct: "B"
    }
];
import QRCode from 'qrcode.react';

function DesktopView() {
    const gameLink = "http://localhost:3000";
    return (
        <div>
            <h2>Scan to Join</h2>
            <QRCode value={gameLink} size={256} />
        </div>
    );
}
function MobileView({ setPlayers }) {
    const [name, setName] = useState("");

    const handleJoin = () => {
        setPlayers(prev => [...prev, name]);
    };

    return (
        <div>
            <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
            <button onClick={handleJoin}>Join Game</button>
        </div>
    );
}
function Question({ questionData }) {
    return (
        <div>
            <h3>{questionData.question}</h3>
            {Object.keys(questionData.options).map(option => (
                <button key={option}>{option}: {questionData.options[option]}</button>
            ))}
        </div>
    );
}
function MobileView({ submitAnswer }) {
    const [selectedAnswer, setSelectedAnswer] = useState("");

    const handleSubmit = () => {
        submitAnswer(selectedAnswer);
    };

    return (
        <div>
            <select onChange={(e) => setSelectedAnswer(e.target.value)}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
            <button onClick={handleSubmit}>Submit Answer</button>
        </div>
    );
}
const validateAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Wrong answer.");
    }
};
const [questionIndex, setQuestionIndex] = useState(0);

const handleNextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
};
if (questionIndex >= questions.length) {
    return <h2>Game Over!</h2>;
}
