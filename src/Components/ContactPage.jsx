import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    MessageCircle,
    Clock,
    HelpCircle,
    Sparkles,
    Instagram,
    Facebook,
    Twitter,
    Linkedin,
    CheckCircle,
    Users,
    BookOpen
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general"
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log("Contact Form Data:", formData);
        setIsSubmitted(true);
        setIsSubmitting(false);
    };

    // const contactInfo = [
    //     {
    //         icon: Mail,
    //         title: "Email Us",
    //         details: "support@itlsglobal.com",
    //         subtitle: "We'll respond within 24 hours",
    //         color: "from-blue-500 to-cyan-500"
    //     },
    //     {
    //         icon: Phone,
    //         title: "Call Us",
    //         details: "+1 (555) 123-4567",
    //         subtitle: "Mon-Fri, 9AM-6PM EST",
    //         color: "from-green-500 to-emerald-500"
    //     },
    //     {
    //         icon: MapPin,
    //         title: "Visit Us",
    //         details: "123 Education Lane",
    //         subtitle: "New York, NY 10001",
    //         color: "from-purple-500 to-pink-500"
    //     }
    // ];

    const inquiryTypes = [
        { value: "general", label: "General Inquiry" },
        { value: "support", label: "Technical Support" },
        { value: "curriculum", label: "Curriculum Questions" },
        { value: "partnership", label: "Partnership Opportunities" },
        { value: "billing", label: "Billing & Subscriptions" },
        { value: "feedback", label: "Feedback & Suggestions" }
    ];

    const faqs = [
        {
            question: "What grades does ITLS GLOBAL cover?",
            answer: "We offer comprehensive content from Kindergarten through Class 5, with age-appropriate lessons and interactive quizzes for each grade level."
        },
        {
            question: "How do I track my child's progress?",
            answer: "Parents can access detailed progress reports through the parent dashboard, showing completed lessons, quiz scores, and areas for improvement."
        },
        {
            question: "Is there a free trial available?",
            answer: "Yes! We offer a 7-day free trial with full access to all features. No credit card required to start."
        },
        {
            question: "Can multiple children use one account?",
            answer: "Absolutely! Our family plans allow you to add multiple student profiles under one parent account for easy management."
        }
    ];

    const socialLinks = [
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Linkedin, href: "#", label: "LinkedIn" }
    ];

    if (isSubmitted) {
        return (
            <div className="min-h-screen flex flex-col bg-white">
                <Navbar />
                <div className="flex-1 flex items-center justify-center p-4">
                    <div className="text-center max-w-lg">
                        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                            <CheckCircle className="w-12 h-12 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
                        <p className="text-gray-600 mb-8">
                            Thank you for reaching out to us. Our team will review your message and get back to you within 24 hours.
                        </p>
                        <div className="space-x-4">
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 bg-[#053361] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#053361]/90 transition-colors"
                            >
                                Back to Home
                            </Link>
                            <button
                                onClick={() => {
                                    setIsSubmitted(false);
                                    setFormData({
                                        name: "",
                                        email: "",
                                        phone: "",
                                        subject: "",
                                        message: "",
                                        inquiryType: "general"
                                    });
                                }}
                                className="inline-flex items-center gap-2 border-2 border-[#053361] text-[#053361] px-6 py-3 rounded-full font-semibold hover:bg-[#053361] hover:text-white transition-colors"
                            >
                                Send Another Message
                            </button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#053361] to-[#0a4a8a] overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-72 h-72 bg-[#FFD000]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                        <MessageCircle className="w-5 h-5 text-[#FFD000]" />
                        <span className="text-white/90 font-medium">Get in Touch</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        We'd Love to
                        <span className="block mt-2 text-[#FFD000]">Hear From You</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                        Have questions about our courses or need help getting started?
                        Our friendly team is here to help you every step of the way.
                    </p>
                </div>
            </section>

            {/* Contact Cards */}
            {/* <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 -mt-10 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                        {contactInfo.map((contact, index) => {
                            const IconComponent = contact.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center`}>
                                        <IconComponent className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{contact.title}</h3>
                                    <p className="text-[#053361] font-semibold mb-1">{contact.details}</p>
                                    <p className="text-gray-500 text-sm">{contact.subtitle}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section> */}

            {/* Contact Form & Info */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-gradient-to-b from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-xl">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Send className="w-6 h-6 text-[#053361]" />
                                Send Us a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#053361] focus:border-transparent transition-all outline-none bg-white"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#053361] focus:border-transparent transition-all outline-none bg-white"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#053361] focus:border-transparent transition-all outline-none bg-white"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Inquiry Type *
                                        </label>
                                        <select
                                            name="inquiryType"
                                            value={formData.inquiryType}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#053361] focus:border-transparent transition-all outline-none bg-white"
                                        >
                                            {inquiryTypes.map((type) => (
                                                <option key={type.value} value={type.value}>
                                                    {type.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#053361] focus:border-transparent transition-all outline-none bg-white"
                                        placeholder="How can we help?"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#053361] focus:border-transparent transition-all outline-none bg-white resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-[#053361] to-[#0a4a8a] text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Additional Info */}
                        <div className="space-y-8">
                            {/* Business Hours */}
                            <div className="bg-gradient-to-br from-[#053361] to-[#0a4a8a] rounded-3xl p-8 text-white">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-[#FFD000] rounded-xl flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-[#053361]" />
                                    </div>
                                    <h3 className="text-xl font-bold">Business Hours</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">Monday - Friday</span>
                                        <span className="font-semibold">9:00 AM - 6:00 PM EST</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">Saturday</span>
                                        <span className="font-semibold">10:00 AM - 4:00 PM EST</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-300">Sunday</span>
                                        <span className="font-semibold">Closed</span>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-white/20">
                                    <p className="text-gray-300 text-sm">
                                        <Sparkles className="w-4 h-4 inline mr-2 text-[#FFD000]" />
                                        Live chat available during business hours
                                    </p>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Us</h3>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => {
                                        const IconComponent = social.icon;
                                        return (
                                            <a
                                                key={index}
                                                href={social.href}
                                                aria-label={social.label}
                                                className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-[#053361] hover:text-white hover:border-[#053361] transition-all duration-300 shadow-sm"
                                            >
                                                <IconComponent className="w-5 h-5" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="bg-gradient-to-b from-gray-50 to-white rounded-3xl p-8 border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <HelpCircle className="w-6 h-6 text-[#053361]" />
                                    Need Help?
                                </h3>
                                <div className="space-y-4">
                                    <Link
                                        to="/topics"
                                        className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all text-gray-700 hover:text-[#053361]"
                                    >
                                        <BookOpen className="w-5 h-5" />
                                        Browse Our Courses
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all text-gray-700 hover:text-[#053361]"
                                    >
                                        <Users className="w-5 h-5" />
                                        Create an Account
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD000]/20 rounded-full mb-6">
                            <HelpCircle className="w-5 h-5 text-[#053361]" />
                            <span className="text-[#053361] font-medium">Frequently Asked Questions</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Quick Answers to Common Questions
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-3">
                                    <span className="flex-shrink-0 w-8 h-8 bg-[#053361] text-white rounded-lg flex items-center justify-center text-sm font-bold">
                                        {index + 1}
                                    </span>
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600 ml-11">{faq.answer}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-600 mb-4">Still have questions?</p>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="inline-flex items-center gap-2 bg-[#053361] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#053361]/90 transition-colors"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Contact Our Team
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;
