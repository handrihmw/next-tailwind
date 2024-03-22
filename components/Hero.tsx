"use client";

import { useState } from "react";
import Image from "next/image";

interface HeroData {
  image: string;
  alt: string;
}

const Hero: React.FC = () => {
  const heroData: HeroData[] = [
    {
      image: "/images/hero-1.jpg",
      alt: "Hero 1",
    },
    {
      image: "/images/hero-2.jpg",
      alt: "Hero 2",
    },
    {
      image: "/images/hero-3.jpg",
      alt: "Hero 3",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === heroData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? heroData.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative h-[552px] w-full">
      <button
        className="absolute h-9 w-9 flex items-center justify-center left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white text-slate-950 p-2 border border-1 border-red-500"
        onClick={prevSlide}
        aria-label="prev"
      >
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.03366 14L8.66699 12.3667L3.30033 7L8.66699 1.63333L7.03366 0L0.0336599 7L7.03366 14Z"
            fill="black"
          />
        </svg>
      </button>
      <button
        className="absolute h-9 w-9 flex items-center justify-center right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white text-slate-950 p-2 border border-1 border-red-500"
        onClick={nextSlide}
        aria-label="next"
      >
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.96634 14L0.333008 12.3667L5.69967 7L0.333008 1.63333L1.96634 0L8.96634 7L1.96634 14Z"
            fill="black"
          />
        </svg>
      </button>
      {heroData.map((data, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={data.image}
            className="w-screen h-[552px] object-cover"
            alt={data.alt}
            loading="lazy"
            width={350}
            height={200}
          />
        </div>
      ))}
    </div>
  );
};

export default Hero;
