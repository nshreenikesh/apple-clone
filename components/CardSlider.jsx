import { useState, useEffect } from "react";

import SliderOne from "../assets/images/slider-p-one.jpg";
import SliderTwo from "../assets/images/slider-p-two.jpg";
import SliderThree from "../assets/images/slider-p-three.jpg";

import SlideVone from "../assets/videos/slider-v-two.mp4";
import SlideVtwo from "../assets/videos/slider-v-one.mp4";
import SlideVthree from "../assets/videos/slider-v-three.mp4";

import { FaDotCircle } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

function CardSlider() {
  const slides = [
    { type: "image", src: SliderOne },
    { type: "video", src: SlideVtwo },
    { type: "video", src: SlideVone },
    { type: "video", src: SlideVthree },
    { type: "image", src: SliderTwo },
    { type: "image", src: SliderThree },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Function to go to selected slide
  const goToSlide = (i) => {
    setIndex(i);
  };

  return (
    <div className="relative bg-[#1D1D1F] pb-14 overflow-hidden">

      {/* Header */}
      <div className="flex text-white items-center justify-between px-10 py-10">
        <h1 className="text-xl md:text-4xl font-bold">Get the highlights</h1>
        <p className="flex items-center gap-2 text-xs md:text-xl text-blue-500 hover:underline hover:text-blue-700 cursor-pointer">
          Watch the film <FaPlay />
        </p>
      </div>

      {/* SLIDER */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="min-w-full flex justify-center">
              {slide.type === "image" ? (
                <img
                  src={slide.src}
                  className="w-full h-auto object-cover rounded-xl"
                  alt=""
                />
              ) : (
                <video
                  src={slide.src}
                  className="w-full h-auto object-cover rounded-xl"
                  autoPlay
                  muted
                  loop
                ></video>
              )}
            </div>
          ))}
        </div>
      </div>


      <div className="flex space-x-3 items-center justify-center mt-6">
        {slides.map((_, i) => (
          <FaDotCircle
            key={i}
            className={`cursor-pointer text-lg ${
              index === i ? "text-white" : "text-gray-500"
            }`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default CardSlider;