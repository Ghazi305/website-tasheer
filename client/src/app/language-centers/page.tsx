// pages/language-centers.tsx أو app/language-centers/page.tsx

// A local compilation issue prevents the use of absolute paths.
// We will define the components directly within this file for a self-contained solution.

import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaChevronDown, FaUniversity, FaMapMarkerAlt, FaLinkedin, FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Footer from '@/components/Footer';

// -- Component: ListingPage --
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
  isCoursePage?: boolean;
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
  isCoursePage,
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
        {isCoursePage && courseDetails && (
          <p className="text-sm text-gray-600 mb-2">{courseDetails}</p>
        )}
        <div className="flex flex-wrap items-center text-sm text-gray-600 gap-x-4">
          {offer && <span>{offer}</span>}
          {duration && <span>• {duration}</span>}
          {intake && <span>• {intake}</span>}
        </div>
      </div>
      <div className="flex-shrink-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
        <button className="w-full bg-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-blue-600 transition-colors">
          قدم الآن
        </button>
        <Link href={linkHref} className="w-full bg-white border border-gray-400 text--800 font-semibold py-2.5 px-6 rounded-lg text-center hover:bg-gray-100 transition-colors">
          اسألنا
        </Link>
      </div>
    </div>
  );
};


// A generic page to display a list of items
interface ListingPageProps {
  pageTitle: string;
  totalItems: number;
  items: any[];
  isCoursePage?: boolean;
}

const ListingPage: React.FC<ListingPageProps> = ({ pageTitle, totalItems, items, isCoursePage }) => {
  return (
    <div className="bg-gray-50 min-h-screen pt-8 pb-16">
      <div className="container mx-auto px-4 md:px-12">
        <nav className="text-gray-500 text-sm mb-6">
          <Link href="/" className="hover:underline">الرئيسية</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-800">{pageTitle}</span>
        </nav>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{pageTitle}</h1>
          <p className="text-gray-600">إجمالي العناصر: {totalItems}</p>
        </div>
        
        <div>
          {items.map((item, index) => (
            <ListItemCard
              key={index}
              logoSrc={item.logoSrc}
              logoAlt={item.logoAlt}
              name={item.name}
              location={item.location}
              courseDetails={item.courseDetails}
              offer={item.offer}
              duration={item.duration}
              intake={item.intake}
              linkHref={item.linkHref}
              isCoursePage={isCoursePage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


const languageCentersData = [
  {
    name: "مركز برايت للغات",
    logoSrc: "/logos/bright-logo.png",
    logoAlt: "شعار مركز برايت للغات",
    location: "كوالالمبور، ماليزيا",
    linkHref: "/language-centers/bright"
  },
  {
    name: "مركز مودرن للغات",
    logoSrc: "/logos/modern-logo.png",
    logoAlt: "شعار مركز مودرن للغات",
    location: "سيلانجور، ماليزيا",
    linkHref: "/language-centers/modern"
  },
  {
    name: "معهد اللغات الدولي",
    logoSrc: "/logos/international-logo.png",
    logoAlt: "شعار معهد اللغات الدولي",
    location: "كوالالمبور، ماليزيا",
    linkHref: "/language-centers/international"
  },
  {
    name: "مركز ايكيا للغات",
    logoSrc: "/logos/ikea-logo.png",
    logoAlt: "شعار مركز ايكيا للغات",
    location: "بيراك، ماليزيا",
    linkHref: "/language-centers/ikea"
  },
];

export default function LanguageCentersPage() {
  return (
    <div>
        <Header />
        <ListingPage
          pageTitle="مراكز اللغة"
          totalItems={languageCentersData.length}
          items={languageCentersData}
        />
        <WhatsAppButton />
        <Footer />
    </div>
  );
}
