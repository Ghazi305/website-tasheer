import dynamic from 'next/dynamic';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MultiStepForm = dynamic(() => import('@/components/forms/MultiStepForm'), { ssr: false });

export default function UniversitiesPage() {
  return (
    <>
      <Header />
      <MultiStepForm />
      <Footer />
    </>
  );
}
