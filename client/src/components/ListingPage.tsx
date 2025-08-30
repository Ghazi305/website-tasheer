'use client';

import { useState, useEffect } from 'react';
import { FaSearch, FaChevronDown, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface Course {
  name: string;
  logoSrc: string;
  location: string;
  courseDetails: string;
  offer: string;
  duration: string;
  intake: string;
  level: string;
  linkHref: string;
}

const coursesData: Course[] = [
  {
    name: "Web Development Bootcamp",
    logoSrc: "/logos/course1.png",
    location: "Kuala Lumpur",
    courseDetails: "دورة شاملة في تطوير الويب",
    offer: "خطاب قبول مجاني",
    duration: "3 أشهر",
    intake: "يناير 2026",
    level: "درجة البكالوريوس",
    linkHref: "#"
  },
  {
    name: "Data Science Masterclass",
    logoSrc: "/logos/course2.png",
    location: "Selangor",
    courseDetails: "تحليل البيانات والذكاء الاصطناعي",
    offer: "خطاب قبول مدفوع",
    duration: "6 أشهر",
    intake: "مارس 2026",
    level: "درجة الماجستير",
    linkHref: "#"
  },
  {
    name: "Digital Marketing",
    logoSrc: "/logos/course3.png",
    location: "Kuala Lumpur",
    courseDetails: "استراتيجيات التسويق الرقمي",
    offer: "خطاب قبول مجاني",
    duration: "2 أشهر",
    intake: "فبراير 2026",
    level: "درجة البكالوريوس",
    linkHref: "#"
  }
];

const ListItemCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row items-start gap-6 mb-6">
      <div className="flex-shrink-0 w-24 h-24 relative">
        <Image src={course.logoSrc} alt={course.name} fill style={{ objectFit: 'contain' }} />
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-xl text-white mb-1">{course.name}</h3>
        <p className="text-gray-600 flex items-center mb-2">
          <FaMapMarkerAlt className="text-gray-400 mr-2" />
          {course.location}
        </p>
        <p className="text-sm text-gray-600 mb-2">{course.courseDetails}</p>
        <div className="flex flex-wrap items-center text-sm text-gray-600 gap-x-4">
          <span>{course.offer}</span>
          <span>• {course.duration}</span>
          <span>• {course.intake}</span>
          <span>• {course.level}</span>
        </div>
      </div>
      <div className="flex-shrink-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
        <button className="w-full bg-blue-500 text-white font-semibold p-2 text-center rounded-lg hover:bg-blue-600 transition-colors">
          قدم الآن
        </button>
        <Link href={course.linkHref} className="w-full bg-white border border-gray-400 text-white font-semibold py-2 rounded-lg text-center hover:bg-gray-100 transition-colors">
          اسألنا
        </Link>
      </div>
    </div>
  );
};

const ListingPage: React.FC = () => {
  const searchParams = useSearchParams();

  const [searchName, setSearchName] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedOffer, setSelectedOffer] = useState('');

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) setSearchName(q);
  }, [searchParams]);

  const filteredItems = coursesData.filter(course =>
    (!searchName || course.name.toLowerCase().includes(searchName.toLowerCase())) &&
    (selectedLevel === '' || course.level === selectedLevel) &&
    (selectedLocation === '' || course.location === selectedLocation) &&
    (selectedOffer === '' || course.offer === selectedOffer)
  );

  return (
    <div className="bg-gray-50 min-h-screen pt-8 pb-16">
      <nav className="text-gray-500 text-sm mb-6">
        <Link href="/" className="hover:underline">الرئيسية</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-800">الدورات</span>
      </nav>
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 flex-shrink-0 bg-blue-50 p-6 rounded-2xl shadow-md border border-gray-200 h-fit lg:sticky lg:top-24 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">بحث / تصفية</h2>

            <div>
              <label className="block font-semibold mb-2">البحث باسم الدورة</label>
              <div className="relative">
                <input type="text" value={searchName} onChange={e => setSearchName(e.target.value)}
                  placeholder="أدخل اسم الدورة" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* باقي الفلاتر كما هي */}
            <div>
              <label className="block font-semibold mb-2">المستوى الدراسي</label>
              <div className="relative">
                <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                <select value={selectedLevel} onChange={e => setSelectedLevel(e.target.value)}
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">اختر المستوى الدراسي</option>
                  <option value="درجة البكالوريوس">درجة البكالوريوس</option>
                  <option value="درجة الماجستير">درجة الماجستير</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-2">الموقع</label>
              <div className="relative">
                <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                <select value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)}
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">اختر الموقع</option>
                  <option value="Kuala Lumpur">كوالالمبور</option>
                  <option value="Selangor">سيلانجور</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-2">نوع العرض</label>
              <div className="relative">
                <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                <select value={selectedOffer} onChange={e => setSelectedOffer(e.target.value)}
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">اختر نوع العرض</option>
                  <option value="خطاب قبول مجاني">خطاب قبول مجاني</option>
                  <option value="خطاب قبول مدفوع">خطاب قبول مدفوع</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Listing */}
          <div className="flex-grow space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl md:text -4xl font-bold text-gray-800">الدورات</h1>
              <p className="text-gray-600">إجمالي الدورات: {filteredItems.length}</p>
            </div>
            {filteredItems.length === 0 ? (
              <p className="text-gray-600">لا توجد دورات مطابقة للفلترة.</p>
            ) : filteredItems.map((course, idx) => (
              <ListItemCard key={idx} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;