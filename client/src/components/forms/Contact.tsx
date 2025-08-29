'use client';

import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(formData);
      alert("تم إرسال الرسالة بنجاح");
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error: ", error);
      alert("فشل في إرسال الرسالة");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" dir="rtl">
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
        {/* Left Side: Contact Info */}
        <div className="space-y-10 mb-12 lg:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">تواصل معنا</h2>
          <p className="text-gray-500 text-lg md:text-xl">
            إذا كان لديك أي أسئلة حول خدماتنا أو تحتاج للمساعدة، يمكنك التواصل معنا عبر أي من الوسائل التالية.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 hover:bg-blue-50 transition p-4 rounded-xl">
              <div className="flex-shrink-0 bg-blue-100 p-4 rounded-full flex items-center justify-center">
                <MapPin className="text-blue-500 text-2xl" />
              </div>
              <div className="text-right">
                <h3 className="text-lg font-semibold text-gray-900">العنوان</h3>
                <p className="text-gray-500 text-sm"><br/>ماليزيا - جوهور</p>
              </div>
            </div>

            <div className="flex items-start gap-4 hover:bg-blue-50 transition p-4 rounded-xl">
              <div className="flex-shrink-0 bg-blue-100 p-4 rounded-full flex items-center justify-center">
                <Phone className="text-blue-500 text-2xl" />
              </div>
              <div className="text-right">
                <h3 className="text-lg font-semibold text-gray-900">الهاتف</h3>
                <p className="text-gray-500 text-sm">+60136969570<br/>الإثنين-الجمعة 9ص - 5م</p>
              </div>
            </div>

            <div className="flex items-start gap-4 hover:bg-blue-50 transition p-4 rounded-xl">
              <div className="flex-shrink-0 bg-blue-100 p-4 rounded-full flex items-center justify-center">
                <Mail className="text-blue-500 text-2xl" />
              </div>
              <div className="text-right">
                <h3 className="text-lg font-semibold text-gray-900">البريد الإلكتروني</h3>
                <p className="text-gray-500 text-sm">tasheer.edu@gmail.com<br/>نرد عادة خلال 24 ساعة</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">تابعنا على</h3>
            <div className="flex justify-end gap-3">
              <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-500 p-3 rounded-full transition"><Facebook /></a>
              <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-500 p-3 rounded-full transition"><Twitter /></a>
              <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-500 p-3 rounded-full transition"><Instagram /></a>
              <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-500 p-3 rounded-full transition"><Linkedin /></a>
              <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-500 p-3 rounded-full transition"><Youtube /></a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">أرسل لنا رسالة</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="الاسم الكامل"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="البريد الإلكتروني"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="الموضوع"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="رسالتك"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg transition"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;