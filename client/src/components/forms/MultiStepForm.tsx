'use client';

import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';
import InputField from '@/components/ui/InputField';
// import SelectField from '@/components/ui/SelectField';
import dynamic from 'next/dynamic';

const SelectField = dynamic(() => import('@/components/ui/SelectField'), { ssr: false });


interface Step {
  id: number;
  name: string;
  isComplete: boolean;
  isActive: boolean;
}

const stepsData: Step[] = [
  { id: 1, name: 'المعلومات الشخصية والدورة', isComplete: false, isActive: true },
  { id: 2, name: 'تفاصيل ولي الأمر', isComplete: false, isActive: false },
  { id: 3, name: 'رفع المستندات', isComplete: false, isActive: false },
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [steps, setSteps] = useState(stepsData);

  const searchParams = useSearchParams();
  const universityName = searchParams.get('name') || '';
  const location = searchParams.get('location') || '';
  const courseDetails = searchParams.get('courseDetails') || '';
  const offer = searchParams.get('offer') || '';
  const duration = searchParams.get('duration') || '';
  const intake = searchParams.get('intake') || '';

  // الحالة لكل الحقول
  const [formData, setFormData] = useState({
    fullName: '',
    nationality: '',
    email: '',
    phone: '',
    preferredCourse: '',
    guardianName: '',
    guardianPhone: '',
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setSteps(prev =>
        prev.map(step => {
          if (step.id === currentStep) return { ...step, isComplete: true, isActive: false };
          if (step.id === currentStep + 1) return { ...step, isActive: true };
          return step;
        })
      );
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setSteps(prev =>
        prev.map(step => {
          if (step.id === currentStep) return { ...step, isActive: false };
          if (step.id === currentStep - 1) return { ...step, isComplete: false, isActive: true };
          return step;
        })
      );
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderFormContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="grid gap-6 md:grid-cols-2">
            <InputField
              label="الاسم الكامل"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="أدخل اسمك الكامل"
            />
            <SelectField
              label="الجنسية"
              options={['دولة أ', 'دولة ب', 'دولة ج']}
              value={formData.nationality}
              onChange={(val) => handleSelectChange('nationality', val)}
            />
            <InputField
              label="البريد الإلكتروني"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
            />
            <InputField
              label="رقم الاتصال"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="أدخل رقم الاتصال"
            />
            <SelectField
              label="البرنامج الدراسي المفضل"
              options={['هندسة', 'إدارة أعمال', 'علوم الحاسوب']}
              value={formData.preferredCourse}
              onChange={(val) => handleSelectChange('preferredCourse', val)}
            />
          </div>
        );
      case 2:
        return (
          <div className="grid gap-6 md:grid-cols-2">
            <InputField
              label="اسم ولي الأمر"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
              placeholder="أدخل اسم ولي الأمر"
            />
            <InputField
              label="رقم الهاتف"
              name="guardianPhone"
              value={formData.guardianPhone}
              onChange={handleChange}
              type="tel"
              placeholder="رقم ولي الأمر"
            />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center border p-4 rounded-lg">
              <InputField 
                label="الشهادة"
                name="guardianPhone"
                value={formData.guardianPhone}
                onChange={handleChange}
                type="file"
                placeholder="الشهادة"
              />  
            </div>
            <div className="flex justify-between items-center border p-4 rounded-lg">
              <InputField 
                label="الصورة الشخصية"
                name="guardianPhone"
                value={formData.guardianPhone}
                onChange={handleChange}
                type="file"
                placeholder="الصورة الشخصية"
              />    
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms">أوافق على الشروط والأحكام</label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-lg">
        {universityName && (
          <div className="mb-8 p-6 border border-gray-200 rounded-3xl bg-blue-50 flex flex-col md:flex-row items-center gap-6 shadow-lg">
            {searchParams.get('logo') && (
              <div className="w-28 h-28 relative flex-shrink-0 bg-white p-2 rounded-xl shadow-sm">
                <img
                  src={searchParams.get('logo') || ''}
                  alt={universityName}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            )}
            <div className="flex-1 space-y-2 md:text-right">
              <h2 className="text-2xl font-bold text-gray-800">تقديم لبرنامج دراسي بجامعة</h2>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{universityName}</h2>
              {location && <p className="text-gray-700 text-sm md:text-base">📍 {location}</p>}
              {courseDetails && <p className="text-gray-700 text-sm md:text-base">📚 {courseDetails}</p>}
              {offer && <p className="text-gray-700 text-sm md:text-base">🎁 {offer}</p>}
              {duration && <p className="text-gray-700 text-sm md:text-base">⏳ {duration}</p>}
              {intake && <p className="text-gray-700 text-sm md:text-base">📅 {intake}</p>}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center flex-1">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  step.isComplete
                    ? 'bg-blue-500 border-blue-500'
                    : step.isActive
                    ? 'border-blue-500'
                    : 'border-gray-300'
                }`}
              >
                {step.isComplete ? (
                  <FaCheck className="text-white" />
                ) : (
                  <span
                    className={
                      step.isActive ? 'text-blue-500 font-bold' : 'text-gray-500'
                    }
                  >
                    {step.id}
                  </span>
                )}
              </div>

              {/* 👇 اسم الخطوة */}
              <span
                className={`mt-2 text-sm text-center ${
                  step.isActive ? 'text-blue-600 font-medium' : 'text-gray-500'
                }`}
              >
                {step.name}
              </span>

              {index < steps.length - 1 && (
                <div
                  className={`flex-auto h-1 ${step.isComplete ? 'bg-blue-500' : 'bg-gray-300'}`}
                ></div>
              )}
            </div>
          ))}
        </div>


        <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
          {renderFormContent()}
          <div className="mt-8 flex justify-between">
            {currentStep > 1 ? (
              <button type="button" onClick={handlePrevStep} className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors">
                السابق
              </button>
            ) : <div></div>}
            {currentStep < steps.length ? (
              <button type="submit" className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                التالي
              </button>
            ) : (
              <button type="submit" className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                إرسال
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default MultiStepForm;