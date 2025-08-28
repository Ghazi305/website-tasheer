// pages/courses.tsx أو app/courses/page.tsx
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ListingPage from '@/components/ListingPage';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const coursesData = [
  {
    name: "بكالوريوس (مع مرتبة الشرف) في إدارة الأعمال والضيافة",
    logoSrc: "/logos/nilai-logo.png",
    logoAlt: "شعار جامعة Nilai",
    location: "جامعة Nilai",
    offer: "خطاب قبول مجاني",
    duration: "3 سنوات",
    intake: "يناير، يونيو وسبتمبر",
    linkHref: "/courses/business-hospitality",
    isCourse: true 
  },
  {
    name: "بكالوريوس (مع مرتبة الشرف) في إدارة الأعمال والضيافة",
    logoSrc: "/logos/nilai-logo.png",
    logoAlt: "شعار جامعة Nilai",
    location: "جامعة Nilai",
    offer: "خطاب قبول مجاني",
    duration: "3 سنوات",
    intake: "يناير، يونيو وسبتمبر",
    linkHref: "/courses/business-hospitality",
    isCourse: true 
  },
  {
    name: "بكالوريوس (مع مرتبة الشرف) في إدارة الأعمال والضيافة",
    logoSrc: "/logos/nilai-logo.png",
    logoAlt: "شعار جامعة Nilai",
    location: "جامعة Nilai",
    offer: "خطاب قبول مجاني",
    duration: "3 سنوات",
    intake: "يناير، يونيو وسبتمبر",
    linkHref: "/courses/business-hospitality",
    isCourse: true 
  },
  {
    name: "بكالوريوس (مع مرتبة الشرف) في إدارة الأعمال والضيافة",
    logoSrc: "/logos/nilai-logo.png",
    logoAlt: "شعار جامعة Nilai",
    location: "جامعة Nilai",
    offer: "خطاب قبول مجاني",
    duration: "3 سنوات",
    intake: "يناير، يونيو وسبتمبر",
    linkHref: "/courses/business-hospitality",
    isCourse: true 
  },
  {
    name: "بكالوريوس (مع مرتبة الشرف) في إدارة الأعمال والضيافة",
    logoSrc: "/logos/nilai-logo.png",
    logoAlt: "شعار جامعة Nilai",
    location: "جامعة Nilai",
    offer: "خطاب قبول مجاني",
    duration: "3 سنوات",
    intake: "يناير، يونيو وسبتمبر",
    linkHref: "/courses/business-hospitality",
    isCourse: true 
  },

];

export default function CoursesPage() {
  return (
    <div>
      <Header />
      <ListingPage
        pageTitle="الدورات"
        totalItems={coursesData.length}
        items={coursesData}
        isCoursePage={true}
      />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}