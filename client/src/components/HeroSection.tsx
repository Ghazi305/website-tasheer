// components/HeroSection.tsx
import Image from 'next/image';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import studentImage from '../assets/images/graduating-student.png';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-blue-900 to-blue-700 min-h-[700px] flex items-center justify-center overflow-hidden p-4">
      {/* Background abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bg-white/10 rounded-full h-64 w-64 top-10 left-10 animate-pulse"></div>
        <div className="absolute bg-white/10 rounded-full h-80 w-80 bottom-20 right-20 animate-pulse"></div>
        <div className="absolute bg-white/5 rounded-full h-96 w-96 top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            إرشاد الخبراء
            <br />
            <span className="bg-blue-500 text-white px-3 py-1 rounded-lg inline-block mt-2">
              للطلاب الدوليين
            </span>
            <br />
            في ماليزيا
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0">
            جعلنا البحث عن الجامعات الماليزية والتقديم إليها أسهل وأكثر مرونة
          </p>

          {/* Search Card */}
          <div className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-lg p-3 sm:p-4 gap-3 sm:gap-4 border border-gray-200">
            <div className="relative flex-shrink-0 w-full sm:w-48">
              <select className="appearance-none w-full py-3 px-4 pr-10 rounded-xl border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
                <option>الجامعة</option>
                <option>الدورة</option>
                <option>مركز اللغة</option>
              </select>
              <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
            <input
              type="text"
              placeholder="مثال: هندسة، محاسبة، إلخ."
              className="flex-grow py-3 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <button className="bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-400 transition flex items-center justify-center">
              <FaSearch className="text-lg" />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full relative">
          <div className="relative w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={studentImage}
              alt="طالب دولي متخرج مبتسم"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
            {/* Floating shapes */}
            <div className="absolute top-8 left-8 bg-white/20 rounded-full h-6 w-6 animate-ping"></div>
            <div className="absolute bottom-16 right-12 bg-white/20 rounded-full h-12 w-12 animate-ping"></div>
            <div className="absolute top-1/3 right-1/4 bg-white/20 rounded-full h-8 w-8 animate-ping"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
