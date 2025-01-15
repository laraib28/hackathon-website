"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonials = () => {
  const [carouselRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      feedback:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      rating: 5,
    },
    {
      id: 2,
      name: "Alex K.",
      feedback:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      rating: 5,
    },
    {
      id: 3,
      name: "James L.",
      feedback:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
    },
    {
      id: 4,
      name: "Emily R.",
      feedback:
        "Shop.co has completely transformed the way I shop for clothes. The quality, variety, and customer service are all outstanding. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <div className="bg-white p-6 md:p-10 max-w-[1440]">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
        OUR HAPPY CUSTOMERS
      </h2>
      <div className="relative">
        {/* Carousel Wrapper */}
        <div
          className="overflow-hidden"
          ref={carouselRef}
        >
          <div className="flex gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-[250px] md:w-[300px] p-6 rounded-xl shadow-lg border bg-gray-50"
              >
                <div className="flex items-center mb-4 ml-6">
                  {/* Rating Stars */}
                  <div className="text-yellow-500 flex">
                    {Array.from({ length: testimonial.rating }).map(
                      (_, index) => (
                        <span key={index} className="text-xl">
                          ★
                        </span>
                      )
                    )}
                  </div>
                  <span className="ml-2 text-green-500 text-sm">✔</span>
                </div>
                <h3 className="font-bold text-lg md:text-xl mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {testimonial.feedback}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={scrollPrev}
          className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={scrollNext}
          className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow-md"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
