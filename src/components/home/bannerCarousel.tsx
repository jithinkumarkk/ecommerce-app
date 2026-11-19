"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { carousel } from "@/data/carousel";

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);
  const BANNERS = carousel;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BANNERS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % BANNERS.length);

  const slide = BANNERS[current];

  return (
    <section className="relative h-[360px] w-full overflow-hidden md:h-[480px]">
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        loading="eager"
        priority={current === 0}
        sizes="100vw"
        className="object-cover transition-opacity duration-500"
      />

      {/* Dark Overlay & Text */}
      <div className="absolute inset-0 bg-black/45 flex flex-col justify-center px-6 md:px-16 text-white">
        <h2 className="text-2xl md:text-4xl font-bold max-w-xl mb-3">
          {slide.title}
        </h2>
        <p className="text-sm md:text-lg text-gray-200 max-w-lg mb-6">
          {slide.subtitle}
        </p>
        <Link
          href={slide.ctaUrl}
          className="w-fit bg-white  font-semibold px-6 py-3 rounded-lg hover:text-black hover:bg-gray-200 transition"
        >
          <span className="text-black">{slide.ctaText}</span>
        </Link>
      </div>

      {/* Left / Right Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white px-3 py-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white px-3 py-2 rounded-full"
      >
        &#10095;
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {BANNERS.map((item, idx) => (
          <button  
          key={item.id}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              idx === current ? "w-6 bg-white" : "w-2.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
