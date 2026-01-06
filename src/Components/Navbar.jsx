import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import img from "../assets/LOGOITLS.png";
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full z-50 bg-white shadow-md border-b border-gray-200">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-2">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img
                            src={img}
                            alt="ITLS GLOBAL Logo"
                            className="h-16 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 mr-[50px]">
                        <Link
                            to="/"
                            className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
                        >
                            Home
                        </Link>

                        {/* Grades Dropdown */}
                        <div className="relative group">
                            <Link
                                to=""
                                className="text-gray-700 hover:text-purple-600 transition-colors duration-200 flex items-center cursor-pointer"
                            >
                                Grades
                                <svg
                                    className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </Link>

                            <div
                                className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50
                                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                            transition-all duration-200"
                                                        >
                                <div className="py-2">
                                    <Link
                                        to="/topics"
                                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                                    >
                                        Grade 1
                                    </Link>
                                    <Link
                                        to="/topics"
                                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                                    >
                                        Grade 2
                                    </Link>
                                    <Link
                                        to="/topics"
                                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                                    >
                                        Grade 3
                                    </Link>
                                    <Link
                                        to="/topics"
                                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                                    >
                                        Grade 4
                                    </Link>
                                    <Link
                                        to="/topics"
                                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                                    >
                                        Grade 5
                                    </Link>
                                    <Link
                                        to="/topics"
                                        className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 border-t border-gray-200"
                                    >
                                        Advanced Levels
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <a
                            href="#about"
                            className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-gray-900"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white rounded-lg mt-2 py-4 px-6 border border-gray-200 shadow-lg">
                        <div className="flex flex-col space-y-4">
                            <Link
                                to="/"
                                className="text-gray-700 hover:text-purple-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                to="/topics"
                                className="text-gray-700 hover:text-purple-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Grades
                            </Link>
                            <a
                                href="#about"
                                className="text-gray-700 hover:text-purple-600 transition-colors"
                            >
                                About
                            </a>
                            <a
                                href="#contact"
                                className="text-gray-700 hover:text-purple-600 transition-colors"
                            >
                                Contact
                            </a>
                            <Link
                                to="/login"
                                className="border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-6 py-2 rounded-full transition-all duration-200 w-full text-center"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 w-full text-center"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
