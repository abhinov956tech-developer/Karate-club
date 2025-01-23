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
      <div className="h-64 sm:h-[90vh] relative overflow-hidden">
        {/* Fixed Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Dibrugarh District Karate Association
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in">
            Empowering Martial Arts, Building Champions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Link
              to="/contact"
              className="bg-karate-primary hover:bg-karate-primary/90 text-white px-8 py-3 rounded-md text-lg font-medium inline-flex items-center gap-2 transition-colors"
            >
              Join Now <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="bg-white hover:bg-gray-100 text-karate-dark px-8 py-3 rounded-md text-lg font-medium transition-colors"
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
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
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