// components/Contact.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaTimesCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-12">
        <div className="bg-white p-6 md:p-12 rounded-3xl shadow-lg border border-gray-200">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
              لا تعرف من أين تبدأ؟
            </h2>
            <p className="text-gray-600 mb-8">
              أرسل لنا رسالة الآن ودعنا نساعدك في العثور على جامعتك التي تحلم بها في ماليزيا!
            </p>
          </div>
          
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="relative">
              <input
                type="text"
                name="fullName"
                placeholder="أدخل اسمك الكامل"
                className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.fullName}
                onChange={handleChange}
              />
              <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                <FaTimesCircle />
              </button>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="أدخل عنوان بريدك الإلكتروني"
                className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
              <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                <FaTimesCircle />
              </button>
            </div>

            <div className="relative">
              <input
                type="tel"
                name="contactNumber"
                placeholder="أدخل رقم الاتصال"
                className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                placeholder="أخبرنا بما تحتاج للمساعدة فيه"
                rows={5}
                className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-gray-800 font-semibold py-3 px-12 rounded-lg hover:bg-blue-600 transition-colors shadow-md"
              >
                إرسال
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;