import React from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
// carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GradeSelection from "./GradeSelection";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "../assets/generated-image5.png";
import img2 from "../assets/generated-image7.png";
import img3 from "../assets/generated-image9.png";

export default function LandingPage() {
  const carouselImages = [
    img1,
    img2,
    img3
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    adaptiveHeight: true
  };

  return (
    <div className="landing-page w-full min-h-screen bg-white overflow-x-hidden">
      <div
        className="w-full min-h-screen bg-white overflow-x-hidden"
        style={{ margin: 0, textAlign: "left" }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Hero Section - Carousel */}
        <section id="home" className="w-screen h-[60vh] relative overflow-hidden">
          <Slider {...sliderSettings}>
            {carouselImages.map((image, index) => (
              <div key={index} className="relative w-full h-[60vh]">
                <img
                  src={image}
                  alt={`Hero Banner ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
              </div>
            ))}
          </Slider>

          {/* Centered content overlay */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Learn Smarter with ITLS GLOBAL
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Structured learning paths from Kindergarten to Advanced Levels
              </p>
              {/* <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform">
                Get Started
              </button> */}
            </div>
          </div>
        </section>
        <GradeSelection />

        {/* Footer */}
        <Footer />
      </div>
    </div>);
}
