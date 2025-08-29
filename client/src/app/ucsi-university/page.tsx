"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MultiStepForm from "@/components/forms/MultiStepForm";
import { Suspense } from "react";

export default function UniversitiesPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading form...</div>}>
        <MultiStepForm />
      </Suspense>
      <Footer />
    </>
  );
}
