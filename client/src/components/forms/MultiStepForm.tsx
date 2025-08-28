// components/MultiStepForm.tsx
'use client';

import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

interface Step {
  id: number;
  name: string;
  isComplete: boolean;
  isActive: boolean;
}

const stepsData: Step[] = [
  { id: 1, name: 'التفاصيل الشخصية وتفاصيل الدورة', isComplete: false, isActive: true },
  { id: 2, name: 'تفاصيل ولي الأمر', isComplete: false, isActive: false },
  { id: 3, name: 'رفع المستندات', isComplete: false, isActive: false },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [steps, setSteps] = useState(stepsData);

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setSteps(prevSteps =>
        prevSteps.map(step => {
          if (step.id === currentStep) {
            return { ...step, isComplete: true, isActive: false };
          }
          if (step.id === currentStep + 1) {
            return { ...step, isActive: true };
          }
          return step;
        })
      );
      setCurrentStep(prev => prev + 1);
    }
  };

  const renderFormContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-6">
            <div>
              <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">
                الاسم الكامل
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="أدخل اسمك الكامل"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="nationality" className="block text-gray-700 font-semibold mb-2">
                الجنسية
              </label>
              <select
                id="nationality"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
              >
                <option>اختر جنسيتك</option>
                <option>دولة أ</option>
                <option>دولة ب</option>
              </select>
            </div>
            {/* ... المزيد من الحقول للخطوة الأولى */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                البريد الإلكتروني
              </label>
              <input
                id="email"
                type="email"
                placeholder="أدخل عنوان بريدك الإلكتروني"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="countryOfResidence" className="block text-gray-700 font-semibold mb-2">
                بلد الإقامة
              </label>
              <select
                id="countryOfResidence"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
              >
                <option>اختر بلد الإقامة</option>
                <option>دولة س</option>
                <option>دولة ص</option>
              </select>
            </div>
            <div>
              <label htmlFor="contactNumber" className="block text-gray-700 font-semibold mb-2">
                رقم الاتصال
              </label>
              <input
                id="contactNumber"
                type="tel"
                placeholder="أدخل رقم الاتصال"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="cityOfResidence" className="block text-gray-700 font-semibold mb-2">
                مدينة الإقامة
              </label>
              <input
                id="cityOfResidence"
                type="text"
                placeholder="أدخل مدينة إقامتك"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="program" className="block text-gray-700 font-semibold mb-2">
                ما هو برنامجك الدراسي المفضل؟
              </label>
              <select
                id="program"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
              >
                <option>اختر برنامجك المفضل</option>
                <option>هندسة</option>
                <option>إدارة أعمال</option>
              </select>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            {/* حقول بيانات ولي الأمر */}
            <p>نموذج تفاصيل ولي الأمر سيكون هنا...</p>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            {/* حقول تحميل الوثائق */}
            <div className="flex flex-col md:flex-row items-center justify-between p-4 border border-gray-300 rounded-lg">
              <span className="font-semibold text-gray-700 mb-2 md:mb-0">شهادة الثانوية العامة أو ما يعادلها</span>
              <button className="bg-white text-gray-700 font-semibold py-2 px-6 rounded-lg border border-gray-400 hover:bg-gray-100 transition-colors">
                اختر ملف
              </button>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between p-4 border border-gray-300 rounded-lg">
              <span className="font-semibold text-gray-700 mb-2 md:mb-0">صورة بخلفية بيضاء</span>
              <button className="bg-white text-gray-700 font-semibold py-2 px-6 rounded-lg border border-gray-400 hover:bg-gray-100 transition-colors">
                اختر ملف
              </button>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between p-4 border border-gray-300 rounded-lg">
              <span className="font-semibold text-gray-700 mb-2 md:mb-0">صفحة معلومات جواز السفر</span>
              <button className="bg-white text-gray-700 font-semibold py-2 px-6 rounded-lg border border-gray-400 hover:bg-gray-100 transition-colors">
                اختر ملف
              </button>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between p-4 border border-gray-300 rounded-lg">
              <span className="font-semibold text-gray-700 mb-2 md:mb-0">مستندات إضافية</span>
              <button className="bg-white text-gray-700 font-semibold py-2 px-6 rounded-lg border border-gray-400 hover:bg-gray-100 transition-colors">
                اختر ملف
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="form-checkbox text-blue-500 h-5 w-5" />
              <label htmlFor="terms" className="text-gray-700">
                بتقديم هذا النموذج، أنا أوافق على <a href="#" className="text-blue-600 hover:underline">الشروط والأحكام</a>
              </label>
            </div>
            {/* ... المزيد من حقول تحميل الوثائق */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-12">
        <div className="bg-white p-6 md:p-12 rounded-3xl shadow-lg border border-gray-200">
          {/* Progress Bar/Steps */}
          <div className="flex items-center justify-center mb-12">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 ${step.isComplete ? 'border-blue-500 bg-blue-500' : step.isActive ? 'border-blue-500' : 'border-gray-300 bg-gray-100'}`}>
                  {step.isComplete ? (
                    <FaCheck size={20} className="text-white" />
                  ) : (
                    <span className={`font-bold text-lg ${step.isActive ? 'text-gray-800' : 'text-gray-500'}`}>
                      {step.id}
                    </span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-auto border-t-2 transition-colors duration-500 ${step.isComplete ? 'border-blue-500' : 'border-gray-300'}`}></div>
                )}
              </div>
            ))}
          </div>

          {/* Step Names */}
          <div className="flex justify-between items-center text-center -mt-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className={`w-1/3`}>
                <span className={`text-sm md:text-base font-semibold ${step.isActive ? 'text-gray-800' : 'text-gray-500'}`}>
                  {step.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Form Content */}
          <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
            {renderFormContent()}
            <div className="mt-8 flex justify-center">
              {currentStep < steps.length && (
                <button
                  type="submit"
                  className="bg-blue-500 text-gray-800 font-semibold py-3 px-12 rounded-lg hover:bg-blue-600 transition-colors shadow-md"
                >
                  التالي
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MultiStepForm;