// components/SuccessStoriesCarousel.tsx
"use client";

import { useRef, useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "راشا",
    course: "دورة لغة إنجليزية مكثفة",
    testimonial:
      "لقد وقفتم إلى جانبي منذ اليوم الذي وصلت فيه إلى ماليزيا وساعدتوني في إتمام إجراءاتي في أقصر وقت ممكن...",
    imageSrc: "/images/rasha.jpg",
  },
  {
    name: "كوموتسانا تاكودزواناشي",
    course: "بكالوريوس علوم (محاسبة ومالية)",
    testimonial:
      "شكرًا لكم على كرمكم وحسن استقبالكم لي. تم التعامل مع إجراءات تقديمي بسلاسة تامة...",
    imageSrc: "/images/kumutsana.jpg",
  },
  {
    name: "يليام رو",
    course: "بكالوريوس محاسبة",
    testimonial:
      "طلبت المساعدة من YourUni لدخول والبحث عن جامعة مناسبة في ماليزيا. في البداية لم أكن أثق بأن جميع الخدمات مجانية بالكامل...",
    imageSrc: "/images/yelim.jpg",
  },
];

const SuccessStoriesCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // وظيفة لتحريك الكاروسيل
  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const cardWidth = 320; // عرض الكارت
      if (direction === "left") {
        carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }
  };

  // متابعة موضع التمرير لتحديث dot النشط
  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        carouselRef.current.scrollLeft / 320 // 320 = card width
      );
      setCurrentIndex(index);
    }
  };

  // Auto Scroll كل 3 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextIndex =
          (currentIndex + 1) % testimonials.length; // يلف من جديد
        const cardWidth = 320;
        carouselRef.current.scrollTo({
          left: nextIndex * cardWidth,
          behavior: "smooth",
        });
        setCurrentIndex(nextIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
          قصص نجاح
        </h2>

        {/* Carousel Container */}
        <div className="flex items-center justify-center gap-4 lg:gap-8" dir="rtl">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden lg:block bg-blue-400 text-white p-4 rounded-full shadow-md hover:bg-blue-500 transition-colors"
          >
            <FaChevronRight size={20} />
          </button>

          {/* Testimonial Cards */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth no-scrollbar"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="snap-start flex-shrink-0 w-80">
                <TestimonialCard
                  name={testimonial.name}
                  course={testimonial.course}
                  testimonial={testimonial.testimonial}
                  imageSrc={testimonial.imageSrc}
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden lg:block bg-blue-400 text-white p-4 rounded-full shadow-md hover:bg-blue-500 transition-colors"
          >
            <FaChevronLeft size={20} />
          </button>
        </div>

        {/* Dots Indicators */}
        <div className="flex justify-center mt-6 space-x-2" dir="ltr">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full m-2 transition-colors ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesCarousel;