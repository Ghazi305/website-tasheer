'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HelpSection from '@/components/HelpSection';
import ListingPage from '@/components/ListingPage';
import ListingPageWithSidebar from '@/components/ListingPageWithSidebar';
import PartnersLogos from '@/components/PartnersLogos';
import WhatsAppButton from '@/components/ui/WhatsAppButton';


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