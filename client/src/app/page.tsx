'use-client'

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialVideoSection from "@/components/TestimonialVideoSection";
import TestimonialCard from "@/components/TestimonialCard";
import SuccessStoriesCarousel from "@/components/SuccessStoriesCarousel";
import StatsCardsSection from "@/components/StatsCardsSection";
import CounselorsSection from "@/components/CounselorsSection";
import ContentSection from "@/components/ContentSection";
import LatestBlogSection from "@/components/LatestBlogSection";
import Contact from "@/components/forms/Contact";
import GoToTopButton from "@/components/ui/GoToTopButton";
import UniversityLogos from "@/components/UniversityLogos";


export default function Home() {
  const malaysianCityscape = {
  title: "لماذا الدراسة في ماليزيا؟",
  description: "تعتبر ماليزيا من الوجهات الدراسية المفضلة لدى الكثير من الطلاب الذين يرغبون في إتمام دراساتهم في إحدى الجامعات أو المعاهد التعليمية، حيث إن التنوع الثقافي وانخفاض تكاليف المعيشة فيها، بالإضافة إلى كفاءة التعليم العالي وتنوع الدرجات الأكاديمية التي يمكن للطالب الحصول عليها، كلها مزايا دفعت هؤلاء الطلاب لاختيار ماليزيا للدراسة.",
  imageSrc: "/images/malaysia-cityscape.jpg", // استبدل بمسار الصورة الحقيقية
  imageAlt: "منظر بانورامي لمدينة كوالالمبور، ماليزيا",
};

const englishStudySection = {
  title: "دراسة اللغة الإنجليزية في ماليزيا",
  description: "يوجد في ماليزيا وكوالالمبور العديد من معاهد اللغة الإنجليزية، وتختلف المعاهد في السعر وجودة التعليم؛ فمنها الممتاز والجيد. ولكن ما يميز دراسة اللغة الإنجليزية في ماليزيا هو أن اللغة الإنجليزية تُستخدم على نطاق واسع في البلاد منذ سنوات عديدة، لدرجة أنها أصبحت تلقائيًا اللغة الثانية في الدولة.",
  imageSrc: "/images/english-class.jpg", // استبدل بمسار الصورة الحقيقية
  imageAlt: "طلاب يضحكون أثناء دراسة اللغة الإنجليزية في الفصل",
};

  return (
    <div>
      <Header />
      <HeroSection />
      <ProcessSection />
      <TestimonialVideoSection />
      <SuccessStoriesCarousel />
      <StatsCardsSection />
      <CounselorsSection />
      <ContentSection
        title={malaysianCityscape.title}
        description={malaysianCityscape.description}
        imageSrc={malaysianCityscape.imageSrc}
        imageAlt={malaysianCityscape.imageAlt}
      />
      <ContentSection 
        title={englishStudySection.title}
        description={englishStudySection.description}
        imageSrc={englishStudySection.imageSrc}
        imageAlt={englishStudySection.imageAlt}
        isImageLeft={true}
      />
      <LatestBlogSection />
      <Contact />
      <WhatsAppButton />
      <GoToTopButton />
      <UniversityLogos />
      <Footer />
    </div>
  );
}
