import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Star,
  Users,
  Zap,
  Shield,
  ArrowRight,
} from "lucide-react";
import GradeSelection from "./GradeSelection";

const LandingPage = () => {
  // Reset body styles for full-width layout
  useEffect(() => {
    if (document.body) {
      document.body.style.margin = "0";
      document.body.style.padding = "0";
      document.body.style.display = "block";
      document.body.style.placeItems = "unset";
    }

    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.style.maxWidth = "none";
      rootElement.style.margin = "0";
      rootElement.style.padding = "0";
      rootElement.style.textAlign = "left";
    }

    return () => {
      if (document.body) {
        document.body.style.display = "";
        document.body.style.placeItems = "";
      }
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="w-full min-h-screen bg-gray-100 overflow-x-hidden"
      style={{ margin: 0, textAlign: "left" }}
    >
      {/* Navbar */}
      <nav className="w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-800">ViteApp</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Contact
              </a>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-200 transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white rounded-lg mt-2 py-4 px-6 shadow-md">
              <div className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#features"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-200 w-full">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700 border border-blue-200">
                <Star className="w-4 h-4 mr-2" />
                New: Lightning fast performance
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Build the Future
              <span className="text-blue-600"> Today</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the next generation of web development with
              lightning-fast Vite and powerful React. Create amazing
              applications that your users will love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 flex items-center">
                Start Building Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full font-semibold text-gray-700 border border-gray-300 hover:border-gray-500 transition-all duration-200 hover:bg-gray-100">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <GradeSelection />

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Everything you need to build modern, fast, and scalable
              applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-sm">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Lightning Fast
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Built with Vite for instant hot module replacement and blazing
                fast build times. Your development workflow has never been
                smoother.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-sm">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Rock Solid
              </h3>
              <p className="text-gray-700 leading-relaxed">
                TypeScript support, comprehensive testing, and battle-tested
                architecture ensure your applications are reliable and
                maintainable.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-sm">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Community Driven
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Join thousands of developers who are building the future. Get
                support, share ideas, and grow together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join thousands of developers who are already building amazing
            things.
          </p>
          <button className="group bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 flex items-center mx-auto">
            Get Started for Free
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">ViteApp</span>
              </div>
              <p className="text-gray-600 mb-4 max-w-md">
                Building the future of web development, one component at a time.
                Fast, modern, and developer-friendly.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Discord
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Examples
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-12 pt-8 text-center">
            <p className="text-gray-600">
              © 2025 ViteApp. All rights reserved. Built with ❤️ using React +
              Vite.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
