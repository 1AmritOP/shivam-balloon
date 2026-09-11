"use client";

import Image from "next/image";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  {
    src: "/images/decoration-1.jpg",
    alt: "Shivam Balloon Decoration - Birthday Decoration",
  },
  {
    src: "/images/decoration-2.jpg",
    alt: "Shivam Balloon Decoration - Event Decoration",
  },
  {
    src: "/images/decoration-3.jpg",
    alt: "Shivam Balloon Decoration - Balloon Decoration",
  },
  {
    src: "/images/decoration-4.jpg",
    alt: "Shivam Balloon Decoration - Party Decoration",
  },
];

export default function ImageSlider() {
  return (
    <section className="w-full bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="overflow-hidden rounded-2xl"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[250px] w-full sm:h-[400px] lg:h-[520px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}