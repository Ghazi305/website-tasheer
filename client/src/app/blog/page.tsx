'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPage() {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(handler);
  }, [search]);

  const filteredPosts = blogPosts.filter(
    post =>
      post.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      post.date.includes(debouncedSearch)
  );

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 md:px-12 py-12">
        <nav className="text-gray-500 text-sm mb-6">
          <Link href="/" className="hover:underline">الرئيسية</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-800">المدونة</span>
        </nav>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">المدونة</h1>

        <div className="mb-6">
          <input
            type="text"
            placeholder="ابحث عن المقالات..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {filteredPosts.length === 0 ? (
          <p className="text-gray-600">لا توجد مقالات مطابقة للبحث.</p>
        ) : (
          filteredPosts.map(post => (
            <div
              key={post.slug}
              className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-6"
            >
              <div className="relative w-full md:w-64 h-48 md:h-40 flex-shrink-0">
                <Image
                  src={post.imageSrc}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
                  <p className="text-gray-500 mb-4">{post.date}</p>
                  <p className="text-gray-700 line-clamp-3">{post.content}</p>
                </div>
                <div className="mt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-500 font-semibold hover:underline"
                  >
                    قراءة المزيد →
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
