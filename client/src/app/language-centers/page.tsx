'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Footer from '@/components/Footer';

interface LanguageCenter {
  name: string;
  logoSrc: string;
  logoAlt: string;
  location: string;
  linkHref: string;
}

const languageCentersData: LanguageCenter[] = [
  { name: "مركز برايت للغات", logoSrc: "/logos/bright-logo.png", logoAlt: "شعار مركز برايت للغات", location: "كوالالمبور، ماليزيا", linkHref: "/language-centers/bright" },
  { name: "مركز مودرن للغات", logoSrc: "/logos/modern-logo.png", logoAlt: "شعار مركز مودرن للغات", location: "سيلانجور، ماليزيا", linkHref: "/language-centers/modern" },
  { name: "معهد اللغات الدولي", logoSrc: "/logos/international-logo.png", logoAlt: "شعار معهد اللغات الدولي", location: "كوالالمبور، ماليزيا", linkHref: "/language-centers/international" },
  { name: "مركز ايكيا للغات", logoSrc: "/logos/ikea-logo.png", logoAlt: "شعار مركز ايكيا للغات", location: "بيراك، ماليزيا", linkHref: "/language-centers/ikea" },
];

const ListItemCard: React.FC<{ center: LanguageCenter }> = ({ center }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row items-start gap-6 mb-6">
    <div className="flex-shrink-0 w-24 h-24 relative">
      <Image src={center.logoSrc} alt={center.logoAlt} fill style={{ objectFit: 'contain' }} />
    </div>
    <div className="flex-grow">
      <h3 className="font-bold text-xl text-gray-800 mb-1">{center.name}</h3>
      <p className="text-gray-600 flex items-center mb-2">
        <FaMapMarkerAlt className="text-gray-400 mr-2" />
        {center.location}
      </p>
    </div>
    
    <div className="flex-shrink-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
      <Link
        href={`/details?type=center&slug=${center.linkHref.split('/').pop()}`}
        className="w-full bg-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg text-center hover:bg-blue-600 transition-colors"
      >
        التفاصيل
      </Link>

    </div>
  </div>
);

const ListingPage: React.FC = () => {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const [searchName, setSearchName] = useState(queryParam);

  // debounce لتقليل التحديثات أثناء الكتابة
  const [debouncedSearch, setDebouncedSearch] = useState(searchName);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(searchName), 300);
    return () => clearTimeout(handler);
  }, [searchName]);

  // تحديث searchName عند تغير الرابط
  useEffect(() => {
    setSearchName(queryParam);
  }, [queryParam]);

  const filteredCenters = languageCentersData.filter(center =>
    center.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    center.location.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-4 md:px-12">
        <nav className="text-gray-500 text-sm mb-6">
          <Link href="/" className="hover:underline">الرئيسية</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-800">مراكز اللغة</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar البحث */}
          <div className="w-full lg:w-1/4 flex-shrink-0 bg-blue-50 p-6 rounded-2xl shadow-md border border-gray-200 h-fit lg:sticky lg:top-24 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">بحث / تصفية</h2>
            <div>
              <label className="block font-semibold mb-2">البحث باسم المركز أو الموقع</label>
              <input
                type="text"
                placeholder="أدخل اسم المركز أو الموقع"
                value={searchName}
                onChange={e => setSearchName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Main Listing */}
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">مراكز اللغة</h1>
              <p className="text-gray-600">إجمالي المراكز: {filteredCenters.length}</p>
            </div>

            {filteredCenters.length === 0 ? (
              <p className="text-gray-600">لا توجد مراكز مطابقة للفلترة.</p>
            ) : (
              filteredCenters.map((center, idx) => <ListItemCard key={idx} center={center} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function LanguageCentersPage() {
  return (
    <div>
      <Header />
      <ListingPage />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}