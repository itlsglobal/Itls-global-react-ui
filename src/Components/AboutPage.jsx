import React from "react";
import { Link } from "react-router-dom";
import {
    Target,
    Eye,
    Heart,
    Users,
    BookOpen,
    Award,
    Sparkles,
    GraduationCap,
    Globe,
    CheckCircle,
    Star,
    Lightbulb,
    TrendingUp
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutPage = () => {
    const stats = [
        { value: "10K+", label: "Active Students", icon: Users },
        { value: "500+", label: "Interactive Lessons", icon: BookOpen },
        { value: "50+", label: "Expert Educators", icon: GraduationCap },
        { value: "15+", label: "Countries", icon: Globe }
    ];

    const values = [
        {
            icon: Target,
            title: "Our Mission",
            description: "To provide accessible, engaging, and high-quality education that empowers young learners to reach their full potential through innovative digital learning experiences.",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-500/10"
        },
        {
            icon: Eye,
            title: "Our Vision",
            description: "To become the world's leading platform for primary education, making learning joyful and effective for every child, regardless of their background or location.",
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-purple-500/10"
        },
        {
            icon: Heart,
            title: "Our Values",
            description: "We believe in fostering curiosity, celebrating creativity, building confidence, and creating a safe space where every child can learn at their own pace.",
            color: "from-rose-500 to-orange-500",
            bgColor: "bg-rose-500/10"
        }
    ];

    const features = [
        {
            icon: Sparkles,
            title: "Interactive Learning",
            description: "Engaging quizzes, games, and activities that make learning fun and memorable."
        },
        {
            icon: GraduationCap,
            title: "Grade-Specific Curriculum",
            description: "Carefully designed content from Kindergarten to Class 5, aligned with educational standards."
        },
        {
            icon: TrendingUp,
            title: "Progress Tracking",
            description: "Monitor your child's learning journey with detailed progress reports and insights."
        },
        {
            icon: Lightbulb,
            title: "Adaptive Learning",
            description: "Personalized learning paths that adapt to each student's pace and learning style."
        }
    ];

    const team = [
        {
            name: "Dr. Sarah Johnson",
            role: "Founder & CEO",
            description: "20+ years in education technology"
        },
        {
            name: "Michael Chen",
            role: "Head of Curriculum",
            description: "Former elementary school principal"
        },
        {
            name: "Priya Sharma",
            role: "Chief Technology Officer",
            description: "EdTech innovation specialist"
        },
        {
            name: "David Williams",
            role: "Head of Student Success",
            description: "Child psychology expert"
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
                        <Star className="w-5 h-5 text-[#FFD000]" />
                        <span className="text-white/90 font-medium">About ITLS GLOBAL</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Transforming Education,
                        <span className="block mt-2 text-[#FFD000]">One Child at a Time</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                        We're on a mission to make quality education accessible and enjoyable for every young learner.
                        Founded by passionate educators and technologists, ITLS GLOBAL is revolutionizing how children learn.
                    </p>
                    <Link
                        to="/register"
                        className="inline-flex items-center gap-2 bg-[#FFD000] text-[#053361] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-xl"
                    >
                        Join Our Community
                        <Sparkles className="w-5 h-5" />
                    </Link>
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

            {/* Mission, Vision, Values */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What Drives Us
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Our commitment to excellence in education is guided by our core beliefs
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

            {/* Our Story */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD000]/20 rounded-full mb-6">
                                <BookOpen className="w-5 h-5 text-[#053361]" />
                                <span className="text-[#053361] font-medium">Our Story</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                From a Vision to a Global Learning Platform
                            </h2>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    ITLS GLOBAL was born from a simple observation: children learn best when they're having fun.
                                    Founded by educators who saw the potential of technology to transform early education,
                                    we set out to create a platform that would make learning irresistible for young minds.
                                </p>
                                <p>
                                    Starting with a small team and a big dream, we've grown into a comprehensive learning
                                    platform serving students from Kindergarten to Class 5. Our interactive quizzes,
                                    engaging content, and structured curriculum have helped thousands of children
                                    develop a genuine love for learning.
                                </p>
                                <p>
                                    Today, ITLS GLOBAL continues to innovate, always putting the needs of our young
                                    learners first. We believe every child deserves access to quality education
                                    that inspires curiosity and builds confidence.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-[#053361] to-[#0a4a8a] rounded-3xl p-8 shadow-2xl">
                                <div className="space-y-6">
                                    {features.map((feature, index) => {
                                        const IconComponent = feature.icon;
                                        return (
                                            <div key={index} className="flex gap-4">
                                                <div className="flex-shrink-0 w-12 h-12 bg-[#FFD000] rounded-xl flex items-center justify-center">
                                                    <IconComponent className="w-6 h-6 text-[#053361]" />
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                                                    <p className="text-gray-300 text-sm">{feature.description}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FFD000] rounded-2xl flex items-center justify-center shadow-xl">
                                <Award className="w-12 h-12 text-[#053361]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                            <Users className="w-5 h-5 text-purple-600" />
                            <span className="text-purple-600 font-medium">Our Leadership</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Meet the Team Behind ITLS GLOBAL
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Passionate educators and technologists dedicated to transforming education
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-[#053361] to-[#0a4a8a] rounded-full flex items-center justify-center">
                                    <span className="text-3xl font-bold text-white">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-[#053361] font-medium mb-2">{member.role}</p>
                                <p className="text-gray-500 text-sm">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#053361] to-[#0a4a8a]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Why Parents & Students Love Us
                        </h2>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            Join thousands of families who have made ITLS GLOBAL their learning partner
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Age-appropriate content designed by experts",
                            "Fun and engaging interactive quizzes",
                            "Safe and ad-free learning environment",
                            "Progress tracking for parents",
                            "Self-paced learning flexibility",
                            "Comprehensive grade-based curriculum"
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                            >
                                <div className="flex-shrink-0 w-10 h-10 bg-[#FFD000] rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-5 h-5 text-[#053361]" />
                                </div>
                                <span className="text-white font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            to="/register"
                            className="inline-flex items-center gap-2 bg-[#FFD000] text-[#053361] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-xl"
                        >
                            Start Learning Today
                            <GraduationCap className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;
