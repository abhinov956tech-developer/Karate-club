import { useState, useEffect, useCallback } from 'react';
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      url: "/slide_1.jpg",
      alt: "Slide 1"
    },
    {
      url: "/slide_2.jpg",
      alt: "Slide 2"
    },
    {
      url: "/slide_3.jpg",
      alt: "Slide 3"
    },
    {
      url: "/slide_4.jpg",
      alt: "Slide 3"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative bg-[#1a365d] text-white">
      <div className="h-[500px] sm:h-[90vh] relative overflow-hidden">
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
              Dibrugarh District Karate Association
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
              Empowering Martial Arts, Building Champions
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                to="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg font-medium inline-flex items-center gap-2 transition-colors"
              >
                Join Now <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link 
                to="/about"
                className="bg-white hover:bg-gray-100 text-gray-900 px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg font-medium transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div 
          className="slider h-full flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide min-w-full h-full relative group">
              <img
                src={slide.url}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt={slide.alt}
              />
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;