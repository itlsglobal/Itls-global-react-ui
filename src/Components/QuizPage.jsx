import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Lightbulb, CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import QuizResult from './QuizResult';
import quizzesData from '../data/quizzes.json';

export default function QuizPage() {
    const navigate = useNavigate();

    // State
    const [quizSets, setQuizSets] = useState([]);
    const [selectedQuizId, setSelectedQuizId] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null); // Single value or array for checkboxes
    const [score, setScore] = useState(0);
    const [showExitModal, setShowExitModal] = useState(false);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    // Feedback State

    // Feedback State
    const [feedback, setFeedback] = useState({ show: false, isCorrect: false, message: "" });

    const location = useLocation();

    useEffect(() => {
        const sets = quizzesData.quizSets || [];
        setQuizSets(sets);

        // If navigation passed a quizId, prefer that
        const passedQuizId = location?.state?.quizId;
        if (passedQuizId) {
            setSelectedQuizId(passedQuizId);
            const sel = sets.find(q => q.id === passedQuizId);
            if (sel) {
                setQuestions(sel.questions || []);
            }
            setIsLoading(false);
        } else if (sets.length > 0) {
            setSelectedQuizId(sets[0].id);
            setQuestions(sets[0].questions || []);
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    }, [location]);

    // When selectedQuizId changes via selector, load corresponding questions and reset state
    useEffect(() => {
        if (!selectedQuizId) return;
        const sel = quizSets.find(q => q.id === selectedQuizId);
        setQuestions(sel?.questions || []);
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setIsQuizFinished(false);
        setIsLoading(false);
            setFeedback({ show: false, isCorrect: false, message: "" });
        
    }, [selectedQuizId, quizSets]);

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

    const handleSelectQuiz = (id) => {
        setSelectedQuizId(id);
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

    if (isLoading || questions.length === 0) {
        if (isLoading) {
            return (
                <div className="min-h-screen flex flex-col bg-white">
                    <Navbar />
                    <div className="flex-1 flex items-center justify-center p-4 bg-gradient-to-br from-white via-gray-50 to-blue-50">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#053361] rounded-full mb-6 animate-spin border-4 border-[#FFD000] border-t-[#053361]"></div>
                            <h2 className="text-2xl font-bold text-[#053361]">Loading Quiz...</h2>
                            <p className="text-gray-600 mt-2">Please wait while we prepare your questions</p>
                        </div>
                    </div>
                    <Footer />
                </div>
            );
        }
        return (
            <div className="min-h-screen flex flex-col bg-white">
                <Navbar />
                <div className="flex-1 flex items-center justify-center p-4 bg-gradient-to-br from-white via-gray-50 to-blue-50">
                    <div className="text-center max-w-lg">
                        <div className="text-8xl mb-6">🎯</div>
                        <h2 className="text-4xl font-bold text-[#053361] mb-4">No Questions Available</h2>
                        <p className="text-xl text-gray-600 mb-2">This topic doesn't have any questions yet.</p>
                        <p className="text-gray-500 mb-8">But don't worry! More content is coming soon. Check back later for exciting quizzes and challenges.</p>
                        <div className="space-x-4">
                            <button
                                onClick={() => navigate('/topics')}
                                className="inline-flex items-center gap-2 bg-[#053361] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#053361]/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                <Home className="w-5 h-5" />
                                Back to Topics
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

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
                    <div className="bg-[#FFD000] px-6 py-2 flex items-center justify-between">
                        <h5 className="text-[#053361] font-bold text-sm uppercase tracking-wide">
                            {quizSets.find(q => q.id === selectedQuizId)?.title || 'Select Quiz'}
                        </h5>
                        <select
                            value={selectedQuizId || ''}
                            onChange={(e) => handleSelectQuiz(e.target.value)}
                            className="bg-white text-sm px-3 py-1 rounded-md"
                        >
                            {quizSets.map((set) => (
                                <option key={set.id} value={set.id}>{set.title}</option>
                            ))}
                        </select>
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
                                onClick={() => navigate('/topics')}
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
