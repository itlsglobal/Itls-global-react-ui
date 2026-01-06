import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, CheckCircle2, GraduationCap, Sparkles } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function TopicSelection() {
    const navigate = useNavigate();
    const [selectedGrade, setSelectedGrade] = useState("Kindergarten");
    const [selectedSubject, setSelectedSubject] = useState("Mathematics");
    const [checkedTopics, setCheckedTopics] = useState({});

    const grades = [
        "Kindergarten",
        "Grade 1",
        "Grade 2",
        "Grade 3",
        "Grade 4",
        "Grade 5",
    ];

    const subjects = ["Mathematics"];

    const topicsData = {
        Kindergarten: {
            Mathematics: [
                {
                    title: "Counting",
                    icon: "🔢",
                    subtopics: [
                        "Counting to 10",
                        "Counting to 20",
                        "Counting to 50",
                        "Counting to 100",
                        "Counting Objects",
                    ],
                },
                {
                    title: "Shapes",
                    icon: "⭐",
                    subtopics: ["Circle", "Square", "Triangle", "Rectangle", "Polygon"],
                },
            ],
            // Science: [
            //     {
            //         title: "Animals",
            //         icon: "🐾",
            //         subtopics: [
            //             "Domestic Animals",
            //             "Wild Animals",
            //             "Birds",
            //             "Insects",
            //             "Aquatic Animals",
            //         ],
            //     },
            //     {
            //         title: "Plants",
            //         icon: "🌱",
            //         subtopics: [
            //             "Parts of Plants",
            //             "Types of Plants",
            //             "Plant Growth",
            //             "Fruits and Vegetables",
            //         ],
            //     },
            // ],
        },
        "Grade 1": {
            Mathematics: [
                {
                    title: "Addition",
                    icon: "➕",
                    subtopics: [
                        "Single Digit Addition",
                        "Double Digit Addition",
                        "Addition Word Problems",
                        "Adding with Pictures",
                    ],
                },
                {
                    title: "Subtraction",
                    icon: "➖",
                    subtopics: [
                        "Single Digit Subtraction",
                        "Double Digit Subtraction",
                        "Subtraction Word Problems",
                    ],
                },
            ],
            // Science: [
            //     {
            //         title: "Human Body",
            //         icon: "🧑",
            //         subtopics: [
            //             "Body Parts",
            //             "Five Senses",
            //             "Healthy Habits",
            //             "Exercise",
            //         ],
            //     },
            //     {
            //         title: "Weather",
            //         icon: "☀️",
            //         subtopics: ["Sunny Day", "Rainy Day", "Windy Day", "Seasons"],
            //     },
            // ],
        },
    };

    const handleCheckboxChange = (topic, subtopic) => {
        const key = `${topic}-${subtopic}`;
        setCheckedTopics((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const handleTopicClick = () => {
        navigate('/quiz');
    };

    const currentTopics = topicsData[selectedGrade]?.[selectedSubject] || [];

    const checkedCount = Object.values(checkedTopics).filter(Boolean).length;

    return (
        <div className="w-full min-h-screen bg-white flex flex-col overflow-x-hidden">
            <Navbar />

            <div className="flex-1 flex">
                {/* Left Sidebar - Grade Selection */}
                <aside className="w-64 bg-white border-r border-gray-200 shadow-sm flex-shrink-0">
                    <div className="sticky top-0 p-6">
                        <div className="flex items-center gap-2 mb-6">
                            <GraduationCap className="w-6 h-6 text-purple-600" />
                            <h2 className="text-lg font-bold text-gray-800">Select Grade</h2>
                        </div>
                        <div className="space-y-3">
                            {grades.map((grade) => (
                                <button
                                    key={grade}
                                    onClick={() => setSelectedGrade(grade)}
                                    style={{
                                        backgroundColor: selectedGrade === grade ? '#FFD000' : undefined,
                                        color: selectedGrade === grade ? '#053361' : undefined
                                    }}
                                    className={`w-full px-4 py-3 rounded-xl font-semibold text-left transition-all duration-300 transform ${selectedGrade === grade
                                        ? "shadow-lg scale-105"
                                        : "bg-gray-50 text-gray-700 hover:bg-gray-100 hover:scale-102"
                                        }`}
                                >
                                    {grade}
                                </button>
                            ))}
                        </div>

                        {/* Progress Indicator */}
                        {checkedCount > 0 && (
                            <div className="mt-8 p-4 border border-[#FFD000] bg-[#FFD000]/10 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#053361]" />
                                    <p className="text-sm font-semibold text-gray-800">
                                        Your Progress
                                    </p>
                                </div>
                                <p className="text-2xl font-bold text-[#053361]">
                                    {checkedCount}
                                </p>
                                <p className="text-xs text-gray-600">topics completed</p>
                            </div>
                        )}
                    </div>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col">
                    {/* Top Subject Selector */}
                    <div className="bg-white border-b border-gray-200 shadow-sm">
                        <div className="px-6 py-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Sparkles className="w-5 h-5 text-yellow-500" />
                                <h2 className="text-lg font-bold text-gray-800">
                                    Choose Your Subject
                                </h2>
                            </div>
                            <div className="flex gap-4">
                                {subjects.map((subject) => (
                                    <button
                                        key={subject}
                                        onClick={() => setSelectedSubject(subject)}
                                        style={{
                                            backgroundColor: selectedSubject === subject ? '#FFD000' : '#053361',
                                            color: selectedSubject === subject ? '#053361' : '#ffffff'
                                        }}
                                        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform ${selectedSubject === subject
                                            ? "shadow-lg scale-105"
                                            : "hover:opacity-90 hover:scale-105"
                                            }`}
                                    >
                                        {subject}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Topic Cards Section */}
                    <div className="flex-1 py-6 overflow-y-auto">
                        <div className="px-6">
                            <div className="bg-[#053361] text-white px-6 py-4 rounded-xl shadow-lg mb-6">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <BookOpen className="w-6 h-6" />
                                    You have selected {selectedGrade} - {selectedSubject}
                                </h3>
                            </div>

                            {/* Topic Cards Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                                {currentTopics.map((topic, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        {/* Card Header */}
                                        <div className="bg-[#053361] px-5 py-4 flex items-center gap-3">
                                            <div className="text-3xl">{topic.icon}</div>
                                            <h4 className="text-xl font-bold text-white">
                                                {topic.title}
                                            </h4>
                                        </div>

                                        {/* Subtopics List */}
                                        <div className="p-5 space-y-3">
                                            {topic.subtopics.map((subtopic, subIndex) => {
                                                const isChecked =
                                                    checkedTopics[`${topic.title}-${subtopic}`] || false;
                                                return (
                                                    <div
                                                        key={subIndex}
                                                        className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${isChecked
                                                            ? "bg-[#FFD000]/10 border-2 border-[#FFD000]"
                                                            : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                                                            }`}
                                                    >
                                                        <div
                                                            onClick={handleTopicClick}
                                                            className={`font-medium cursor-pointer flex-1 ${isChecked ? "text-[#053361] font-bold" : "text-gray-800"
                                                                }`}
                                                        >
                                                            {subtopic}
                                                        </div>
                                                        <input
                                                            type="checkbox"
                                                            id={`${topic.title}-${subtopic}`}
                                                            checked={isChecked}
                                                            onChange={() =>
                                                                handleCheckboxChange(topic.title, subtopic)
                                                            }
                                                            className="w-5 h-5 text-[#053361] border-gray-300 rounded focus:ring-[#053361] cursor-pointer"
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {currentTopics.length === 0 && (
                                <div className="text-center py-16 bg-white rounded-2xl shadow-md">
                                    <div className="text-6xl mb-4">📚</div>
                                    <p className="text-gray-500 text-lg font-medium">
                                        No topics available for this selection.
                                    </p>
                                    <p className="text-gray-400 text-sm mt-2">
                                        Please select a different grade or subject.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
