import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
    BookOpen,
    Calendar,
    User,
    ArrowRight,
    Search,
    Tag,
    Eye,
    Heart,
    CheckCircle,
    X,
    Share2
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BlogPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Posts");
    const [postsPerPage, setPostsPerPage] = useState(6);
    const [subscriptionEmail, setSubscriptionEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const blogPosts = [
        {
            id: 1,
            title: "How Gamification Transforms Learning",
            excerpt: "Discover how game-based learning elements can boost student engagement and retention rates significantly.",
            category: "Education",
            author: "Dr. Sarah Johnson",
            date: "January 15, 2026",
            readTime: "5 min read",
            image: "from-blue-500 to-cyan-500",
            views: 2543,
            likes: 342
        },
        {
            id: 2,
            title: "The Future of Digital Education",
            excerpt: "Explore how AI and machine learning are revolutionizing personalized learning experiences for students worldwide.",
            category: "Technology",
            author: "Michael Chen",
            date: "January 12, 2026",
            readTime: "7 min read",
            image: "from-purple-500 to-pink-500",
            views: 1876,
            likes: 298
        },
        {
            id: 3,
            title: "Tips for Parents to Support Online Learning",
            excerpt: "Essential strategies for parents to create a supportive environment for their children's online education journey.",
            category: "Parenting",
            author: "Priya Sharma",
            date: "January 10, 2026",
            readTime: "6 min read",
            image: "from-rose-500 to-orange-500",
            views: 3102,
            likes: 456
        },
        {
            id: 4,
            title: "Building Critical Thinking Skills in Early Education",
            excerpt: "Learn how to develop critical thinking abilities in young learners through interactive exercises and real-world scenarios.",
            category: "Learning",
            author: "David Williams",
            date: "January 8, 2026",
            readTime: "8 min read",
            image: "from-green-500 to-emerald-500",
            views: 2234,
            likes: 389
        },
        {
            id: 5,
            title: "Success Stories: Students Who Transformed Their Learning",
            excerpt: "Inspiring tales of students who discovered their potential and achieved remarkable academic success with our platform.",
            category: "Success Stories",
            author: "Emily Rodriguez",
            date: "January 5, 2026",
            readTime: "10 min read",
            image: "from-yellow-500 to-amber-500",
            views: 4567,
            likes: 721
        },
        {
            id: 6,
            title: "Why Curiosity Matters in Child Development",
            excerpt: "Understanding the importance of fostering curiosity and its impact on cognitive development and academic performance.",
            category: "Development",
            author: "James Wilson",
            date: "January 2, 2026",
            readTime: "6 min read",
            image: "from-indigo-500 to-blue-500",
            views: 1945,
            likes: 267
        }
    ];

    // Calculate dynamic categories and counts
    const calculateCategories = () => {
        const categoryCounts = {};
        blogPosts.forEach(post => {
            categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1;
        });

        const categories = [
            { name: "All Posts", count: blogPosts.length }
        ];

        Object.keys(categoryCounts).sort().forEach(category => {
            categories.push({ name: category, count: categoryCounts[category] });
        });

        return categories;
    };

    const categories = calculateCategories();

    // Filter and search posts
    const filteredPosts = useMemo(() => {
        let filtered = blogPosts;

        // Filter by category
        if (selectedCategory !== "All Posts") {
            filtered = filtered.filter(post => post.category === selectedCategory);
        }

        // Filter by search query
        if (searchQuery.trim()) {
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.author.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return filtered;
    }, [searchQuery, selectedCategory]);

    // Display posts based on pagination
    const displayedPosts = filteredPosts.slice(0, postsPerPage);

    const handleLoadMore = () => {
        setPostsPerPage(prev => prev + 3);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (subscriptionEmail.trim()) {
            setIsSubscribed(true);
            setSubscriptionEmail("");
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    const handlePostClick = (post) => {
        setSelectedPost(post);
        document.body.style.overflow = 'hidden';
    };

    const closePostDetail = () => {
        setSelectedPost(null);
        document.body.style.overflow = 'auto';
    };

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
                        <BookOpen className="w-5 h-5 text-[#FFD000]" />
                        <span className="text-white/90 font-medium">ITLS GLOBAL Blog</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Learning Insights &
                        <span className="block mt-2 text-[#FFD000]">Educational Excellence</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                        Discover articles, tips, and insights about education, technology, and student success.
                        Stay informed and inspired with our latest blog posts.
                    </p>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Search */}
                            <div className="mb-8">
                                <div className="relative">
                                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search posts..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#053361] focus:border-transparent outline-none text-gray-900 placeholder-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Tag className="w-5 h-5 text-[#053361]" />
                                    Categories
                                </h3>
                                <ul className="space-y-3">
                                    {categories.map((category, index) => (
                                        <li key={index}>
                                            <button 
                                                onClick={() => setSelectedCategory(category.name)}
                                                className={`w-full text-left px-4 py-2 rounded-lg transition-all flex justify-between items-center font-medium ${
                                                    selectedCategory === category.name
                                                        ? "bg-[#053361] text-white border border-[#053361]"
                                                        : "hover:bg-white hover:border hover:border-[#053361] text-gray-700 hover:text-[#053361]"
                                                }`}
                                            >
                                                {category.name}
                                                <span className={`text-sm px-2 py-1 rounded ${
                                                    selectedCategory === category.name
                                                        ? "bg-[#FFD000] text-[#053361]"
                                                        : "bg-[#053361]/10 text-[#053361]"
                                                }`}>
                                                    {category.count}
                                                </span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Blog Posts Grid */}
                        <div className="lg:col-span-3">
                            {filteredPosts.length > 0 ? (
                                <>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {displayedPosts.map((post) => (
                                            <article
                                                key={post.id}
                                                onClick={() => handlePostClick(post)}
                                                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col cursor-pointer"
                                            >
                                                {/* Post Image */}
                                                <div className={`h-48 bg-gradient-to-br ${post.image} relative overflow-hidden group`}>
                                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                                                    <div className="absolute top-4 left-4">
                                                        <span className="bg-[#FFD000] text-[#053361] px-3 py-1 rounded-full text-sm font-semibold">
                                                            {post.category}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Post Content */}
                                                <div className="p-6 flex flex-col flex-grow">
                                                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-[#053361] transition-colors cursor-pointer">
                                                        {post.title}
                                                    </h2>
                                                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                                                        {post.excerpt}
                                                    </p>

                                                    {/* Meta Info */}
                                                    <div className="space-y-3 mb-4 pb-4 border-b border-gray-100">
                                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                                            <User className="w-4 h-4" />
                                                            {post.author}
                                                        </div>
                                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                                            <span className="flex items-center gap-1">
                                                                <Calendar className="w-4 h-4" />
                                                                {post.date}
                                                            </span>
                                                            <span>{post.readTime}</span>
                                                        </div>
                                                    </div>

                                                    {/* Stats & Action */}
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                                            <span className="flex items-center gap-1">
                                                                <Eye className="w-4 h-4" />
                                                                {post.views}
                                                            </span>
                                                            <span className="flex items-center gap-1">
                                                                <Heart className="w-4 h-4" />
                                                                {post.likes}
                                                            </span>
                                                        </div>
                                                        <button className="text-[#053361] hover:text-[#FFD000] transition-colors">
                                                            <ArrowRight className="w-5 h-5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </article>
                                        ))}
                                    </div>

                                    {/* Load More Button */}
                                    {displayedPosts.length < filteredPosts.length && (
                                        <div className="mt-12 text-center">
                                            <button 
                                                onClick={handleLoadMore}
                                                className="inline-flex items-center gap-2 bg-[#053361] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#053361]/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                            >
                                                Load More Articles
                                                <ArrowRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-gray-600 text-lg">No posts found. Try adjusting your search or category filter.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#053361] to-[#0a4a8a] overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-72 h-72 bg-[#FFD000]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

                <div className="relative max-w-3xl mx-auto text-center">
                    {isSubscribed ? (
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                                <CheckCircle className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Thank You!</h2>
                            <p className="text-xl text-gray-200">You've been subscribed to our newsletter.</p>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Subscribe to Our Newsletter
                            </h2>
                            <p className="text-xl text-gray-200 mb-8">
                                Get the latest articles and insights delivered to your inbox every week.
                            </p>
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={subscriptionEmail}
                                    onChange={(e) => setSubscriptionEmail(e.target.value)}
                                    required
                                    className="flex-1 px-6 py-3 rounded-full outline-none focus:ring-2 focus:ring-[#FFD000] text-gray-900 placeholder-gray-400 bg-white"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#FFD000] text-[#053361] px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </section>

            <Footer />

            {/* Post Detail Modal */}
            {selectedPost && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closePostDetail}>
                    <div 
                        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className={`h-64 bg-gradient-to-br ${selectedPost.image} relative`}>
                            <button
                                onClick={closePostDetail}
                                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors z-10"
                            >
                                <X className="w-6 h-6 text-[#053361]" />
                            </button>
                            <div className="absolute bottom-4 left-6">
                                <span className="bg-[#FFD000] text-[#053361] px-4 py-2 rounded-full font-semibold">
                                    {selectedPost.category}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {selectedPost.title}
                            </h1>

                            {/* Meta Info */}
                            <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-gray-200">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <User className="w-5 h-5 text-[#053361]" />
                                    <div>
                                        <p className="text-sm text-gray-500">Author</p>
                                        <p className="font-semibold">{selectedPost.author}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Calendar className="w-5 h-5 text-[#053361]" />
                                    <div>
                                        <p className="text-sm text-gray-500">Published</p>
                                        <p className="font-semibold">{selectedPost.date}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <BookOpen className="w-5 h-5 text-[#053361]" />
                                    <div>
                                        <p className="text-sm text-gray-500">Read Time</p>
                                        <p className="font-semibold">{selectedPost.readTime}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Excerpt as content */}
                            <div className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Overview</h2>
                                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                                    {selectedPost.excerpt}
                                </p>
                                {/* <p className="text-gray-600 leading-relaxed">
                                    This article provides comprehensive insights into {selectedPost.title.toLowerCase()}. 
                                    Whether you're an educator, parent, or student, you'll find valuable takeaways and practical 
                                    tips that can be applied to enhance your learning journey or teaching methodology.
                                </p> */}
                            </div>

                            {/* Stats and Actions */}
                            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-[#053361] flex items-center justify-center gap-2">
                                            <Eye className="w-5 h-5" />
                                            {selectedPost.views}
                                        </p>
                                        <p className="text-gray-600 text-sm">Views</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-red-500 flex items-center justify-center gap-2">
                                            <Heart className="w-5 h-5" />
                                            {selectedPost.likes}
                                        </p>
                                        <p className="text-gray-600 text-sm">Likes</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-[#053361] flex items-center justify-center gap-2">
                                            <Share2 className="w-5 h-5" />
                                            Share
                                        </p>
                                        <p className="text-gray-600 text-sm">Article</p>
                                    </div>
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={closePostDetail}
                                className="w-full bg-[#053361] text-white py-3 rounded-xl font-semibold hover:bg-[#053361]/90 transition-colors"
                            >
                                Close Article
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogPage;
