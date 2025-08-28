// components/CounselorsSection.tsx
import CounselorCard from './CounselorCard';

const counselorsData = [
  {
    name: "السيد أمين",
    title: "مستشار تعليمي",
    imageSrc: "/images/amin.jpg", // استبدل بمسار الصورة الحقيقية
  },
  {
    name: "السيد عمار باشراحيل",
    title: "مستشار تعليمي",
    imageSrc: "/images/ammar.jpg", // استبدل بمسار الصورة الحقيقية
  },
  {
    name: "السيد عمر أحمد",
    title: "مستشار تعليمي",
    imageSrc: "/images/omar.jpg", // استبدل بمسار الصورة الحقيقية
  },
  {
    name: "السيد حامد",
    title: "مستشار تعليمي",
    imageSrc: "/images/hamed.jpg", // استبدل بمسار الصورة الحقيقية
  },
  {
    name: "السيد محمد طه",
    title: "مستشار تعليمي",
    imageSrc: "/images/mohd.jpg", // استبدل بمسار الصورة الحقيقية
  }
];

const CounselorsSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-200 rounded-full opacity-30 blur-xl transform rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-200 rounded-full opacity-30 blur-xl transform -rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
          تعرف على مستشارينا
        </h2>

        {/* Counselors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6 justify-items-center">
          {counselorsData.map((counselor, index) => (
            <CounselorCard
              key={index}
              name={counselor.name}
              title={counselor.title}
              imageSrc={counselor.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounselorsSection;