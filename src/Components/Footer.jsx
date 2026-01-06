import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Linkedin, Zap } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2">
                        <div className="flex items-center text-black font-bold space-x-2 mb-4">
                          ITLS GLOBAL
                        </div>
                        <p className="text-gray-600 mb-4 max-w-md">
                            Empowering students with quality education from Grade 1 to
                            Advanced Levels.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-600 hover:text-purple-600 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-purple-600 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-purple-600 transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-purple-600 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-purple-600 transition-colors"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-purple-600 transition-colors"
                                >
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-purple-600 transition-colors"
                                >
                                    Examples
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-purple-600 transition-colors"
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
                                    className="text-gray-600 hover:text-purple-600 transition-colors"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-purple-600 transition-colors"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-purple-600 transition-colors"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-purple-600 transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-12 pt-8 text-center">
                    <p className="text-gray-600">
                        © 2025 ITLS GLOBAL. All rights reserved. Built with ❤️ using React.
                    </p>
                </div>
            </div>
        </footer>
    );
}
