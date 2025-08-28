// components/HeroSection.tsx
import Image from 'next/image';
import { FaChevronDown, FaSearch } from 'react-icons/fa';
import studentImage  from '../assets/images/graduating-student.jpg';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 to-gray-700 min-h-[600px] flex items-center justify-center py-16 px-4 overflow-hidden">
      {/* Background elements - You might replace these with actual background images or patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <span className="absolute text-8xl font-extrabold text-gray-400 opacity-20 top-10 left-10 transform -rotate-12">جامعتك</span>
        <span className="absolute text-7xl font-extrabold text-gray-500 opacity-20 bottom-20 right-20 transform rotate-6">جامعتك</span>
        <span className="absolute text-9xl font-extrabold text-gray-600 opacity-20 top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 rotate-3">جامعتك</span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 p-4">
        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:w-3/5 xl:w-1/2 flex flex-col justify-center min-h-[400px]">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
            إرشاد الخبراء
            <br />
            <span className="bg-blue-500 text-white px-2 py-1 rounded-md inline-block mt-2">للطلاب الدوليين</span>
            <br />
            في ماليزيا
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-md">
            جعلنا البحث عن الجامعات الماليزية والتقديم إليها أسهل.
          </p>

          {/* Search Input Group */}
          <div className="flex flex-col sm:flex-row bg-gray-100 rounded-xl p-2 space-y-3 sm:space-y-0 sm:space-x-3 border border-gray-200 shadow-inner">
            <div className="flex-shrink-0 relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg py-3 px-4 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
              >
                <option>الجامعة</option>
                <option>الدورة</option>
                <option>مركز اللغة</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
            <input
              type="text"
              placeholder="مثال: هندسة، محاسبة، إلخ."
              className="flex-grow bg-white border border-gray-300 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button className="flex-shrink-0 bg-black text-white p-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center">
              <FaSearch className="text-xl" />
            </button>
          </div>
        </div>

        {/* Image of Graduate Student */}
        <div className="relative w-full lg:w-2/5 xl:w-1/2 h-[450px] md:h-[500px] lg:h-[600px] mt-8 lg:mt-0">
          <div className="absolute inset-0 bg-blue-400 rounded-2xl transform rotate-3 scale-105 opacity-30 blur-lg hidden lg:block"></div> {/* Subtle background blur */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-gray-800 rounded-2xl transform rotate-2 scale-105 hidden lg:block"></div> {/* Second background layer */}

          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={studentImage} // استبدل بمسار صورتك الحقيقية
              alt="طالب دولي متخرج مبتسم"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
              {/* Small white circle overlay elements */}
            <div className="absolute top-10 left-10 bg-white opacity-20 rounded-full h-8 w-8"></div>
            <div className="absolute bottom-1/4 right-5 bg-white opacity-20 rounded-full h-12 w-12"></div>
            <div className="absolute top-1/3 right-1/4 bg-white opacity-20 rounded-full h-6 w-6"></div>

            {/* Floating chat icon and text */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;