"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
  "/images/slide4.jpg",
];

const Slider = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] w-full px-4 mt-10">
      <Swiper
        slidesPerView={1} // Show one image at a time (Myntra style)
        spaceBetween={10}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        loop={true} // Infinite scroll
        navigation={true} // Adds prev/next arrows
        pagination={{ clickable: true }} // Adds dots for navigation
        modules={[Autoplay, Navigation, Pagination]}
        className="w-full max-w-6xl h-[500px]"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center h-full">
            <div className="relative w-[90vw] h-[600px] max-w-[1200px]">
              <Image
                src={img}
                alt={index}
                fill style={{ objectFit: "cover" }}
                className="rounded-lg shadow-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
