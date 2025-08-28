// components/ListingPageWithSidebar.tsx
'use client';

import { FaSearch, FaChevronDown, FaUniversity, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

// هذا المكون يمثل بطاقة واحدة (جامعة، دورة، مركز لغة)
interface ListItemCardProps {
  logoSrc: string;
  logoAlt: string;
  name: string;
  location?: string;
  courseDetails?: string;
  offer?: string;
  duration?: string;
  intake?: string;
  linkHref: string;
}

const ListItemCard: React.FC<ListItemCardProps> = ({
  logoSrc,
  logoAlt,
  name,
  location,
  courseDetails,
  offer,
  duration,
  intake,
  linkHref,
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row items-start gap-6 mb-6">
      <div className="flex-shrink-0 w-24 h-24 relative">
        <Image
          src={logoSrc}
          alt={logoAlt}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-xl text-gray-800 mb-1">{name}</h3>
        {location && (
          <p className="text-gray-600 flex items-center mb-2">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            {location}
          </p>
        )}
        {courseDetails && (
          <p className="text-sm text-gray-600 mb-2">{courseDetails}</p>
        )}
        <div className="flex flex-wrap items-center text-sm text-gray-600 gap-x-4">
          {offer && <span>{offer}</span>}
          {duration && <span>• {duration}</span>}
          {intake && <span>• {intake}</span>}
        </div>
      </div>
      <div className="flex-shrink-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
        <button className="w-full bg-blue-500 text-gray-800 font-semibold py-2.5 px-6 rounded-lg hover:bg-blue-600 transition-colors">
          قدم الآن
        </button>
        <Link href={linkHref} className="w-full bg-white border border-gray-400 text-gray-800 font-semibold py-2.5 px-6 rounded-lg text-center hover:bg-gray-100 transition-colors">
          اسألنا
        </Link>
      </div>
    </div>
  );
};

// بيانات الجامعات (مثال)
const universitiesData = [
  {
    name: "Multimedia University Malaysia (MMU)",
    logoSrc: "/logos/mmu-logo.png",
    location: "Selangor, Malaysia",
    offer: "خطاب قبول مجاني",
    courseDetails: "76 دورة",
    linkHref: "/universities/mmu"
  },
  {
    name: "UCSI University Malaysia",
    logoSrc: "/logos/ucsi-logo.png",
    location: "Kuala Lumpur, Malaysia",
    offer: "خطاب قبول مجاني",
    courseDetails: "154 دورة",
    linkHref: "/universities/ucsi"
  },
  {
    name: "Taylor's University Malaysia",
    logoSrc: "/logos/taylors-logo.png",
    location: "Selangor, Malaysia",
    offer: "خطاب قبول مجاني",
    courseDetails: "118 دورة",
    linkHref: "/universities/taylors"
  },
  // يمكنك إضافة المزيد من الجامعات هنا
];

const ListingPageWithSidebar = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-4 md:px-12">
        {/* Breadcrumbs */}
        <nav className="text-gray-500 text-sm mb-6">
          <Link href="/" className="hover:underline">الرئيسية</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-800">الجامعات</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar for Search and Filter */}
          <div className="w-full lg:w-1/4 flex-shrink-0 bg-blue-50 p-6 rounded-2xl shadow-md border border-gray-200 h-fit sticky top-24">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">بحث / تصفية</h2>
            
            <div className="space-y-6">
              {/* Search by Name */}
              <div>
                <label htmlFor="university-name" className="block text-white font-semibold mb-2">
                  البحث باسم الجامعة
                </label>
                <div className="relative">
                  <input
                    id="university-name"
                    type="text"
                    placeholder="أدخل اسم الجامعة"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Level of Interest */}
              <div>
                <label htmlFor="level" className="block text-white font-semibold mb-2">
                  المستوى الدراسي
                </label>
                <div className="relative">
                  <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <select
                    id="level"
                    className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>اختر المستوى الدراسي</option>
                    <option>درجة البكالوريوس</option>
                    <option>درجة الماجستير</option>
                    {/* يمكنك إضافة المزيد من الخيارات هنا */}
                  </select>
                </div>
              </div>

              {/* Locations */}
              <div>
                <label htmlFor="locations" className="block text-white font-semibold mb-2">
                  المواقع
                </label>
                <div className="relative">
                  <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <select
                    id="locations"
                    className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>اختر ولاية</option>
                    <option>كوالالمبور</option>
                    <option>سيلانجور</option>
                    {/* يمكنك إضافة المزيد من الخيارات هنا */}
                  </select>
                </div>
              </div>
              
              {/* Offer Letter Fee */}
              <div>
                <label htmlFor="fee-type" className="block text-white font-semibold mb-2">
                  رسوم خطاب القبول
                </label>
                <div className="relative">
                  <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <select
                    id="fee-type"
                    className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>اختر نوع رسوم خطاب القبول</option>
                    <option>خطاب قبول مجاني</option>
                    <option>خطاب قبول مدفوع</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content (Listing) */}
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">الجامعات</h1>
              <p className="text-gray-600">إجمالي الجامعات: {universitiesData.length}</p>
            </div>
            
            <div>
              {universitiesData.map((university, index) => (
                <ListItemCard
                  key={index}
                  logoSrc={university.logoSrc}
                  logoAlt={university.name}
                  name={university.name}
                  location={university.location}
                  courseDetails={university.courseDetails}
                  offer={university.offer}
                  linkHref={university.linkHref}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPageWithSidebar;