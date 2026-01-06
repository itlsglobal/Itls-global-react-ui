import React from 'react';
import { Trophy, RefreshCw, Home } from 'lucide-react';

export default function QuizResult({ score, totalQuestions, onRetry, onHome }) {
    const percentage = Math.round((score / totalQuestions) * 100);

    // Determine message based on score
    let message = "";
    let emoji = "";

    if (percentage >= 80) {
        message = "Outstanding Performance!";
        emoji = "🌟";
    } else if (percentage >= 60) {
        message = "Good Job! Keep it up!";
        emoji = "👍";
    } else {
        message = "Keep Practicing!";
        emoji = "📚";
    }

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform scale-100 transition-all">
                {/* Header */}
                <div className="bg-[#053361] p-6 text-center">
                    <div className="bg-[#FFD000] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
                        <Trophy className="w-10 h-10 text-[#053361]" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-1">
                        Quiz Completed!
                    </h2>
                    <p className="text-gray-300 text-sm">
                        Here is how you performed
                    </p>
                </div>

                {/* Content */}
                <div className="p-8 text-center">
                    <div className="text-6xl mb-4">{emoji}</div>
                    <h3 className="text-2xl font-bold text-[#053361] mb-2">
                        {message}
                    </h3>

                    <div className="my-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Your Score</div>
                        <div className="text-4xl font-extrabold text-[#053361] mt-1">
                            {score} <span className="text-2xl text-gray-400">/ {totalQuestions}</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <button
                            onClick={onRetry}
                            className="w-full py-3 px-6 rounded-xl font-bold text-[#053361] bg-[#FFD000] hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
                        >
                            <RefreshCw className="w-5 h-5" />
                            Try Again
                        </button>
                        <button
                            onClick={onHome}
                            className="w-full py-3 px-6 rounded-xl font-bold text-white bg-[#053361] hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                        >
                            <Home className="w-5 h-5" />
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
