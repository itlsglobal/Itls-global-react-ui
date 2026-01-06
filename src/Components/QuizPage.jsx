import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Lightbulb, CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import QuizResult from './QuizResult';

// Mock Data to simulate your JSON file
const MOCK_QUESTIONS = [
    {
        id: 1,
        text: "How many fingers do you have on one hand?",
        question_type: 1, // MCQ
        answers: [
            { id: 'a', text: "3", is_correct: false },
            { id: 'b', text: "5", is_correct: true },
            { id: 'c', text: "7", is_correct: false },
            { id: 'd', text: "10", is_correct: false }
        ]
    },
    {
        id: 2,
        text: "Is the sun hot?",
        question_type: 2, // Yes/No
        answers: [
            { id: 'yes', text: "Yes", is_correct: true },
            { id: 'no', text: "No", is_correct: false }
        ]
    },
    {
        id: 3,
        text: "Select the primary colors (Check all that apply):",
        question_type: 5, // Checkbox
        answers: [
            { id: 'red', text: "Red", is_correct: true },
            { id: 'green', text: "Green", is_correct: false },
            { id: 'blue', text: "Blue", is_correct: true }
        ]
    },
    {
        id: 4,
        text: "What is 2 + 2?",
        question_type: 4, // Text Input
        answers: [
            { text: "4", is_correct: true }
        ]
    }
];

export default function QuizPage() {
    const navigate = useNavigate();

    // State
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null); // Single value or array for checkboxes
    const [score, setScore] = useState(0);
    const [showExitModal, setShowExitModal] = useState(false);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    // Feedback State

    // Feedback State
    const [feedback, setFeedback] = useState({ show: false, isCorrect: false, message: "" });

    useEffect(() => {
        // Simulate fetching data
        setQuestions(MOCK_QUESTIONS);
    }, []);

    const currentQuestion = questions[currentQuestionIndex];

    // Handlers
    const handleOptionSelect = (value, type) => {
        if (type === 5) { // Checkbox logic
            setSelectedAnswer(prev => {
                const current = Array.isArray(prev) ? prev : [];
                if (current.includes(value)) {
                    return current.filter(item => item !== value);
                } else {
                    return [...current, value];
                }
            });
        } else {
            setSelectedAnswer(value);
        }
    };

    const handleTextChange = (e) => {
        setSelectedAnswer(e.target.value);
    };

    const handleSubmit = () => {
        if (selectedAnswer === null || (Array.isArray(selectedAnswer) && selectedAnswer.length === 0) || selectedAnswer === "") {
            setFeedback({
                show: true,
                isCorrect: false,
                message: "Please select an answer!",
                type: 'warning'
            });
            return;
        }

        let isCorrect = false;
        const type = currentQuestion.question_type;

        if (type === 5) { // Checkbox
            const correctIds = currentQuestion.answers.filter(a => a.is_correct).map(a => a.id);
            // Check if arrays match
            const isMatch = selectedAnswer.length === correctIds.length &&
                selectedAnswer.every(val => correctIds.includes(val));
            isCorrect = isMatch;
        } else if (type === 4) { // Text
            const correctText = currentQuestion.answers[0].text;
            isCorrect = selectedAnswer.toString().trim().toLowerCase() === correctText.trim().toLowerCase();
        } else { // MCQ / YesNo / Radio
            const correctOption = currentQuestion.answers.find(a => a.is_correct);
            isCorrect = selectedAnswer === correctOption.id;
        }

        // Update Score
        if (isCorrect) setScore(prev => prev + 1);

        // Show Feedback
        const correctTextDisplay = type === 4
            ? currentQuestion.answers[0].text
            : type === 5
                ? currentQuestion.answers.filter(a => a.is_correct).map(a => a.text).join(", ")
                : currentQuestion.answers.find(a => a.is_correct)?.text;

        setFeedback({
            show: true,
            isCorrect: isCorrect,
            message: isCorrect
                ? `Great job! Correct answer: ${correctTextDisplay}`
                : `Oops! Correct answer: ${correctTextDisplay}`,
            type: isCorrect ? 'success' : 'error'
        });

        // Auto Advance
        setTimeout(() => {
            setFeedback({ show: false, isCorrect: false, message: "" });
            setSelectedAnswer(null);
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
            } else {
                // Quiz Finished - Show Result Component
                setIsQuizFinished(true);
            }
        }, 2000);
    };

    const handleRetry = () => {
        setIsQuizFinished(false);
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setFeedback({ show: false, isCorrect: false, message: "" });
    };

    // Render different input types
    const renderOptions = () => {
        if (!currentQuestion) return null;
        const { question_type, answers } = currentQuestion;

        switch (question_type) {
            case 1: // MCQ
            case 2: // Yes/No
                return (
                    <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mt-6">
                        {answers.map((answer) => (
                            <button
                                key={answer.id}
                                onClick={() => handleOptionSelect(answer.id, question_type)}
                                className={`p-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-md border-2
                  ${selectedAnswer === answer.id
                                        ? 'bg-[#FFD000] text-[#053361] border-[#FFD000]'
                                        : 'bg-[#053361] text-white border-transparent hover:opacity-90'
                                    }`}
                            >
                                {answer.text}
                            </button>
                        ))}
                    </div>
                );

            case 3: // Radio
                return (
                    <div className="flex flex-col gap-3 mt-4">
                        {answers.map((answer) => (
                            <label key={answer.id} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50">
                                <input
                                    type="radio"
                                    name="quiz-option"
                                    className="w-5 h-5 text-[#053361]"
                                    checked={selectedAnswer === answer.id}
                                    onChange={() => handleOptionSelect(answer.id, question_type)}
                                />
                                <span className="text-gray-800 font-medium">{answer.text}</span>
                            </label>
                        ))}
                    </div>
                );

            case 5: // Checkbox
                return (
                    <div className="flex flex-col gap-3 mt-4">
                        {answers.map((answer) => (
                            <label key={answer.id} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 text-[#053361]"
                                    checked={Array.isArray(selectedAnswer) && selectedAnswer.includes(answer.id)}
                                    onChange={() => handleOptionSelect(answer.id, question_type)}
                                />
                                <span className="text-gray-800 font-medium">{answer.text}</span>
                            </label>
                        ))}
                    </div>
                );

            case 4: // Text
                return (
                    <div className="flex justify-center mt-6">
                        <input
                            type="text"
                            className="border-2 border-gray-300 p-3 rounded-lg  text-black text-xl text-center w-48 focus:border-[#053361] focus:outline-none"
                            placeholder="Your answer..."
                            value={selectedAnswer || ""}
                            onChange={handleTextChange}
                        />
                    </div>
                );

            default:
                return <div>Unsupported question type</div>;
        }
    };

    if (questions.length === 0) return <div>Loading...</div>;

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex flex-col overflow-x-hidden">
            <Navbar />

            {/* Main Content Wrapper */}
            <div className="flex-1 flex items-center justify-center p-4">
                {/* Main Card Container */}
                <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[95%] lg:max-w-[90%] overflow-hidden flex flex-col min-h-[75vh] relative">

                    {/* Blue Header */}
                    <div className="bg-[#053361] text-white p-4 flex items-center relative z-20">
                        {/* Home Icon/Exit Button */}
                        <button
                            onClick={() => setShowExitModal(true)}
                            className="w-10 h-10 bg-[#FFD000] rounded-full flex items-center justify-center text-[#053361] shadow-lg hover:scale-110 transition-transform absolute left-4"
                        >
                            <Home size={20} strokeWidth={2.5} />
                        </button>

                        {/* Greeting */}
                        <div className="w-full text-center">
                            <span className="text-lg">
                                Hello, Keep exploring <span className="font-bold">ITLS</span> for a brighter tomorrow!!
                            </span>
                        </div>
                    </div>

                    {/* Yellow Sub-header - Category */}
                    <div className="bg-[#FFD000] px-6 py-2">
                        <h5 className="text-[#053361] font-bold text-sm uppercase tracking-wide">
                            Grade – 1 Math – Addition & Subtraction
                        </h5>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex flex-1 relative">

                        {/* Left Side: Question */}
                        <div className="flex-1 p-8 pb-32"> {/* Added padding bottom for feedback area */}
                            <div className="flex items-start gap-4 mb-8">
                                <HelpCircle className="w-10 h-10 text-green-600 flex-shrink-0" />
                                <div className="flex items-baseline gap-2">
                                    <span className="text-xl font-bold text-gray-500">Q{currentQuestionIndex + 1}.</span>
                                    <h2 className="text-2xl font-bold text-[#053361]">
                                        {currentQuestion.text}
                                    </h2>
                                </div>
                            </div>

                            {/* Options Container */}
                            <div className="mb-8">
                                {renderOptions()}
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <button
                                    onClick={handleSubmit}
                                    className="bg-[#FFD000] text-[#053361] px-10 py-3 rounded-xl font-bold text-lg shadow-md hover:bg-yellow-400 hover:scale-105 transition-all"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Sidebar */}
                        <div className="w-48 border-l border-gray-200 p-6 flex flex-col items-center bg-gray-50">
                            <h3 className="text-[#053361] font-bold mb-6">Your Progress</h3>

                            {/* Attempt Circle */}
                            <div className="bg-[#053361] w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-[#FFD000] mb-6">
                                <span className="text-[#FFD000] text-xs font-bold uppercase tracking-wider">Attempt</span>
                                <span className="text-white text-2xl font-bold">
                                    {currentQuestionIndex}/{questions.length}
                                </span>
                            </div>

                            {/* Score Circle */}
                            <div className="bg-[#FFD000] w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-white">
                                <span className="text-[#053361] text-xs font-bold uppercase tracking-wider">Score</span>
                                <span className="text-[#053361] text-2xl font-bold">
                                    {score}/{questions.length}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Feedback Section (Bottom) */}
                    <div className="absolute bottom-0 left-0 right-48 z-10 bg-white border-t-4 border-[#FFD000] rounded-tr-xl">
                        {/* Hint Header */}
                        {!feedback.show && (
                            <div className="bg-yellow-50 px-6 py-3 flex items-center gap-3">
                                <Lightbulb className="text-yellow-600 w-5 h-5" />
                                <span className="text-[#053361] font-medium">Tip: Read the question carefully!</span>
                            </div>
                        )}

                        {/* Result Header */}
                        {feedback.show && (
                            <div className={`px-6 py-4 flex items-center gap-4 ${feedback.isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                                {feedback.isCorrect ? <CheckCircle className="text-green-600 w-8 h-8" /> : <XCircle className="text-red-600 w-8 h-8" />}

                                <div>
                                    <p className={`text-xl font-bold ${feedback.isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                                        {feedback.message}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                </div>

            </div>
            <Footer />

            {/* Exit Modal */}
            {showExitModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl transform scale-100 transition-all">
                        <h3 className="text-2xl font-bold text-[#053361] mb-6">
                            Are you sure you want to exit?
                        </h3>
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => navigate('/')}
                                className="bg-[#FFD000] text-[#053361] px-6 py-2 rounded-lg font-bold hover:bg-yellow-400"
                            >
                                Yes, Exit
                            </button>
                            <button
                                onClick={() => setShowExitModal(false)}
                                className="bg-[#053361] text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-900"
                            >
                                No, Continue
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Quiz Result Modal */}
            {isQuizFinished && (
                <QuizResult
                    score={score}
                    totalQuestions={questions.length}
                    onRetry={handleRetry}
                    onHome={() => navigate('/topics')}
                />
            )}

        </div>
    );
}
