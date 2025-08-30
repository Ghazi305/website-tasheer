'use client';

import { useState, useEffect } from 'react';
import { FaSearch, FaChevronDown, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

interface University {
  name: string;
  logoSrc: string;
  location?: string;
  courseDetails?: string;
  offer?: string;
  duration?: string;
  intake?: string;
  level?: string;
}

const universitiesData: University[] = [
  {
    name: 'Multimedia University Malaysia (MMU)',
    logoSrc: '/logos/mmu-logo.png',
    location: 'Selangor, Malaysia',
    offer: 'خطاب قبول مجاني',
    courseDetails: '76 دورة',
    level: 'درجة البكالوريوس',
  },
  {
    name: 'UCSI University Malaysia',
    logoSrc: '/logos/ucsi-logo.png',
    location: 'Kuala Lumpur, Malaysia',
    offer: 'خطاب قبول مجاني',
    courseDetails: '154 دورة',
    level: 'درجة الماجستير',
  },
  {
    name: "Taylor's University Malaysia",
    logoSrc: '/logos/taylors-logo.png',
    location: 'Selangor, Malaysia',
    offer: 'خطاب قبول مجاني',
    courseDetails: '118 دورة',
    level: 'درجة البكالوريوس',
  },
];

const ListingPageWithSidebar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchName, setSearchName] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedFee, setSelectedFee] = useState('');

  // قراءة قيمة البحث من رابط الـ URL عند التحميل
  useEffect(() => {
    const q = searchParams.get('q');
    if (q) setSearchName(q);
  }, [searchParams]);

  const filteredUniversities = universitiesData.filter(u => {
    return (
      (!searchName || u.name.toLowerCase().includes(searchName.toLowerCase())) &&
      (!selectedLevel || u.level === selectedLevel) &&
      (!selectedLocation || u.location?.includes(selectedLocation)) &&
      (!selectedFee || u.offer === selectedFee)
    );
  });

  const handleApply = (university: University) => {
    const queryString = new URLSearchParams({
      name: university.name,
      location: university.location || '',
      courseDetails: university.courseDetails || '',
      offer: university.offer || '',
      duration: university.duration || '',
      intake: university.intake || '',
    }).toString();

    router.push(`/ucsi-university?${queryString}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-4 md:px-12">
        <nav className="text-gray-500 text-sm mb-6">
          <a href="/" className="hover:underline">الرئيسية</a>
          <span className="mx-2">›</span>
          <span className="text-gray-800">الجامعات</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 flex-shrink-0 bg-blue-50 p-6 rounded-2xl shadow-md border border-gray-200 h-fit lg:sticky lg:top-24 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">بحث / تصفية</h2>

            {/* البحث باسم الجامعة */}
            <div>
              <label htmlFor="university-name" className="block font-semibold mb-2">البحث باسم الجامعة</label>
              <div className="relative">
                <input
                  id="university-name"
                  type="text"
                  placeholder="أدخل اسم الجامعة"
                  value={searchName}
                  onChange={e => setSearchName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* بقية الفلاتر كما هي */}
            <div>
              <label htmlFor="level" className="block font-semibold mb-2">المستوى الدراسي</label>
              <div className="relative">
                <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                <select
                  id="level"
                  value={selectedLevel}
                  onChange={e => setSelectedLevel(e.target.value)}
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">اختر المستوى الدراسي</option>
                  <option value="درجة البكالوريوس">درجة البكالوريوس</option>
                  <option value="درجة الماجستير">درجة الماجستير</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="locations" className="block font-semibold mb-2">المواقع</label>
              <div className="relative">
                <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                <select
                  id="locations"
                  value={selectedLocation}
                  onChange={e => setSelectedLocation(e.target.value)}
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">اختر ولاية</option>
                  <option value="Kuala Lumpur">كوالالمبور</option>
                  <option value="Selangor">سيلانجور</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="fee-type" className="block font-semibold mb-2">رسوم خطاب القبول</label>
              <div className="relative">
                <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                <select
                  id="fee-type"
                  value={selectedFee}
                  onChange={e => setSelectedFee(e.target.value)}
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">اختر نوع الرسوم</option>
                  <option value="خطاب قبول مجاني">خطاب قبول مجاني</option>
                  <option value="خطاب قبول مدفوع">خطاب قبول مدفوع</option>
                </select>
              </div>
            </div>
          </div>

          {/* عرض الجامعات */}
          <div className="flex-grow space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">الجامعات</h1>
              <p className="text-gray-600">إجمالي الجامعات: {filteredUniversities.length}</p>
            </div>

            {filteredUniversities.length === 0 ? (
              <p className="text-gray-600">لا توجد جامعات مطابقة للبحث.</p>
            ) : (
              filteredUniversities.map((university, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0 w-24 h-24 relative">
                    <Image src={university.logoSrc} alt={university.name} fill style={{ objectFit: 'contain' }} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-xl text-gray-800 mb-1">{university.name}</h3>
                    {university.location && (
                      <p className="text-gray-600 flex items-center mb-2">
                        <FaMapMarkerAlt className="text-gray-400 ml-2" />
                        {university.location}
                      </p>
                    )}
                    {university.courseDetails && <p className="text-sm text-gray-600 mb-2">{university.courseDetails}</p>}
                    <div className="flex flex-wrap items-center text-sm text-gray-600 gap-x-4">
                      {university.offer && <span>{university.offer}</span>}
                      {university.duration && <span>• {university.duration}</span>}
                      {university.intake && <span>• {university.intake}</span>}
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
                    <button
                      onClick={() => handleApply(university)}
                      className="w-full bg-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg text-center hover:bg-blue-600 transition-colors"
                    >
                      قدم الآن
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPageWithSidebar;