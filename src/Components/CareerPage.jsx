import React from "react";
import { Link } from "react-router-dom";
import {
    Briefcase,
    Users,
    Zap,
    Target,
    Heart,
    Star,
    Quote,
    CheckCircle,
    TrendingUp,
    Lightbulb
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CareerPage = () => {
    const stats = [
        { value: "x+", label: "Team Members", icon: Users },
        { value: "x", label: "Years of Experience", icon: TrendingUp },
        { value: "100%", label: "Growth Mindset", icon: Zap },
        { value: "Global", label: "Reach & Impact", icon: Target }
    ];

    const values = [
        {
            icon: Heart,
            title: "Our Culture",
            description: "We foster a collaborative environment where innovation, creativity, and continuous learning are celebrated every day.",
            color: "from-rose-500 to-orange-500",
            bgColor: "bg-rose-500/10"
        },
        {
            icon: Lightbulb,
            title: "Innovation First",
            description: "We believe in pushing boundaries and challenging the status quo to create meaningful impact in education technology.",
            color: "from-yellow-500 to-amber-500",
            bgColor: "bg-yellow-500/10"
        },
        {
            icon: Briefcase,
            title: "Growth Opportunities",
            description: "Join a team dedicated to professional development, mentorship, and building rewarding careers in EdTech.",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-500/10"
        }
    ];

    const benefits = [
        {
            icon: CheckCircle,
            title: "Competitive Compensation",
            description: "Competitive salaries and comprehensive benefits package"
        },
        {
            icon: Users,
            title: "Team Building",
            description: "Regular team activities, workshops, and professional development opportunities"
        },
        {
            icon: Heart,
            title: "Work-Life Balance",
            description: "Flexible work arrangements to ensure you maintain a healthy life balance"
        },
        {
            icon: Star,
            title: "Impact-Driven Work",
            description: "Work on projects that directly impact education and student outcomes globally"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#053361] to-[#0a4a8a] overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-72 h-72 bg-[#FFD000]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                        <Briefcase className="w-5 h-5 text-[#FFD000]" />
                        <span className="text-white/90 font-medium">Page of Career</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Join Our Growing
                        <span className="block mt-2 text-[#FFD000]">Team at ITLS GLOBAL</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                        Be part of a mission to revolutionize education and inspire millions of young learners worldwide.
                        We're building the future of learning together.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-[#053361] to-[#0a4a8a] rounded-xl flex items-center justify-center">
                                        <IconComponent className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-[#053361] mb-1">{stat.value}</h3>
                                    <p className="text-gray-600 font-medium">{stat.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Join Our Team?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We're committed to creating a workplace where every team member can thrive and make a difference.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <div
                                    key={index}
                                    className={`${value.bgColor} rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                                >
                                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center shadow-lg`}>
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What We Offer
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive benefits designed to support your career and well-being.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex gap-6">
                                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-[#053361] to-[#0a4a8a] rounded-xl flex items-center justify-center shadow-lg">
                                            <IconComponent className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                            <p className="text-gray-600">{benefit.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#053361] to-[#0a4a8a] overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-72 h-72 bg-[#FFD000]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

                <div className="relative max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FFD000]/20 rounded-full mb-6">
                        <Quote className="w-10 h-10 text-[#FFD000]" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-relaxed">
                        "Great things in education are never done by one person. They're done by a team of people who share a vision and passion to transform lives."
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        While we're not hiring right now, we're always looking for passionate individuals to join us in shaping the future of education. Stay connected with us for exciting opportunities ahead!
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-2 bg-[#FFD000] text-[#053361] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-xl"
                        >
                            Back to Home
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 backdrop-blur-sm"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CareerPage;
