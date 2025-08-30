'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { FaMapMarkerAlt } from 'react-icons/fa';

// بيانات تجريبية لكل نوع
const languageCentersData = [
  { slug: "bright", name: "مركز برايت للغات", logo: "/logos/bright-logo.png", location: "كوالالمبور، ماليزيا", description: "دورات لغة شاملة لجميع المستويات." },
  { slug: "modern", name: "مركز مودرن للغات", logo: "/logos/modern-logo.png", location: "سيلانجور، ماليزيا", description: "تعليم حديث ومناهج مبتكرة." },
];

// يمكن إضافة بيانات مشابهة للجامعات والدورات

export default function DetailsPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || '';
  const slug = searchParams.get('slug') || '';

  let item: any = null;

  if (type === 'center') {
    item = languageCentersData.find(c => c.slug === slug);
  }

  if (!item) return <p className="p-6">لا توجد تفاصيل متاحة لهذا العنصر.</p>;

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 md:px-12 py-12">
        <nav className="text-gray-500 text-sm mb-6">
          <Link href="/" className="hover:underline">الرئيسية</Link>
          <span className="mx-2">›</span>
          <Link href={`/${type === 'center' ? 'language-centers' : type}`} className="hover:underline">{type === 'center' ? 'مراكز اللغة' : type}</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-800">{item.name}</span>
        </nav>

        <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 w-48 h-48 relative">
            <Image src={item.logo} alt={item.name} fill style={{ objectFit: 'contain' }} />
          </div>
          <div className="flex-grow">
            <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
            {item.location && (
              <p className="text-gray-600 flex items-center mb-4">
                <FaMapMarkerAlt className="text-gray-400 mr-2" /> {item.location}
              </p>
            )}
            <p className="text-gray-700">{item.description}</p>

            <div className="mt-6 flex gap-4">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
                قدم الآن
              </button>
              <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition">
                اسألنا
              </button>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}