// components/SuccessStoriesCarousel.tsx
import TestimonialCard from './TestimonialCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: "راشا",
    course: "دورة لغة إنجليزية مكثفة",
    testimonial: "لقد وقفتم إلى جانبي منذ اليوم الذي وصلت فيه إلى ماليزيا وساعدتوني في إتمام إجراءاتي في أقصر وقت ممكن...",
    imageSrc: "/images/rasha.jpg", // استبدل بمسار الصورة الحقيقية
  },
  {
    name: "كوموتسانا تاكودزواناشي",
    course: "بكالوريوس علوم (محاسبة ومالية)",
    testimonial: "شكرًا لكم على كرمكم وحسن استقبالكم لي. تم التعامل مع إجراءات تقديمي بسلاسة تامة...",
    imageSrc: "/images/kumutsana.jpg", // استبدل بمسار الصورة الحقيقية
  },
  {
    name: "يليام رو",
    course: "بكالوريوس محاسبة",
    testimonial: "طلبت المساعدة من YourUni لدخول والبحث عن جامعة مناسبة في ماليزيا. في البداية لم أكن أثق بأن جميع الخدمات مجانية بالكامل...",
    imageSrc: "/images/yelim.jpg", // استبدل بمسار الصورة الحقيقية
  }
];

const SuccessStoriesCarousel = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
          قصص نجاح
        </h2>

        {/* Carousel Container */}
        <div className="flex items-center justify-center space-x-4 lg:space-x-8">

          {/* Left Arrow */}
          <button className="hidden lg:block bg-blue-400 text-gray-800 p-4 rounded-full shadow-md hover:bg-blue-500 transition-colors">
            <FaChevronLeft size={20} />
          </button>

          {/* Testimonial Cards */}
          <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory pb-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="snap-start flex-shrink-0">
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
          <button className="hidden lg:block bg-blue-400 text-gray-800 p-4 rounded-full shadow-md hover:bg-blue-500 transition-colors">
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesCarousel;