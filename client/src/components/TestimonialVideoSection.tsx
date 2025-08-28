// components/TestimonialVideoSection.tsx
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';

const TestimonialVideoSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background Circles */}
      <div className="absolute top-1/2 left-0 w-28 h-28 bg-blue-400 rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-28 h-28 bg-blue-400 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
          لماذا يختارنا الطلاب؟ اسمع منهم
        </h2>

        {/* Testimonial & Video Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">

          {/* Video Placeholder */}
          <div className="relative w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <Image
              src="/path-to-video-thumbnail.jpg" // استبدل بمسار الصورة المصغرة للفيديو
              alt="صورة مصغرة لفيديو شهادة طالب"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
              <button
                aria-label="تشغيل الفيديو"
                className="bg-red-600 text-white p-6 rounded-full opacity-90 hover:opacity-100 transition-opacity"
              >
                <FaPlay size={32} />
              </button>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="w-full lg:w-1/2 p-4">
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              بعد اجتيازي امتحان القبول في كوريا، شعرت بإحباط شديد وعدم يقين بشأن مستقبلي. ولكن، خلال بحثي عن جامعات ماليزية، اكتشفت YourUni. كانت مساعدتهم قيمة للغاية، حيث لعبوا دورًا مهمًا في دعمي طوال العملية بأكملها. بفضل دعمهم المستمر، وصلت بأمان إلى ماليزيا، وتمكنت من التسجيل في جامعتي بنجاح، وتلقيت الإرشاد اللازم بخصوص إجراءات التأشيرة والإقامة.
            </p>
            <div className="text-gray-800">
              <p className="font-bold text-lg">Yelim Ro</p>
              <p className="text-gray-600">بكالوريوس محاسبة @ جامعة التكنولوجيا الماليزية (UTM)</p>
            </div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          {/* Left Arrow */}
          <button className="hidden lg:block bg-blue-400 text-gray-800 p-4 rounded-full shadow-md hover:bg-blue-500 transition-colors">
            <FaChevronLeft size={20} />
          </button>
          
          {/* Pagination Dots */}
          <div className="flex space-x-2">
            <button className="w-3 h-3 bg-gray-800 rounded-full"></button>
            <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
            <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
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

export default TestimonialVideoSection;