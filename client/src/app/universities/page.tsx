'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HelpSection from '@/components/HelpSection';
import ListingPage from '@/components/ListingPage';
import ListingPageWithSidebar from '@/components/ListingPageWithSidebar';
import PartnersLogos from '@/components/PartnersLogos';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const universitiesData = [
  {
    name: "Multimedia University Malaysia (MMU)",
    logoSrc: "/logos/mmu-logo.png",
    logoAlt: "MMU logo",
    location: "Selangor, Malaysia",
    offer: "Free Offer Letter",
    courseDetails: "76 courses",
    linkHref: "/universities/mmu"
  },
];

export default function UniversitiesPage() {
  return (
    <div>
     <Header />
     <ListingPageWithSidebar />
     <WhatsAppButton />
     <Footer />
    </div>
  );
}