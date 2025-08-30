import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

interface Params {
  slug: string;
}

// توليد جميع المسارات عند البناء (SSG)
export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: Params }) {
  const { slug } = params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 md:px-12 py-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">المقالة غير موجودة</h1>
          <Link href="/blog" className="text-blue-500 hover:underline">العودة للمدونة</Link>
        </div>
        <WhatsAppButton />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 md:px-12 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">{post.title}</h1>
        <p className="text-gray-500 mb-6">{post.date}</p>
        <div className="relative w-full h-64 md:h-96 mb-6 rounded-xl overflow-hidden">
          <Image src={post.imageSrc} alt={post.title} fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="prose max-w-none text-gray-700 mb-6">
          <p>{post.content}</p>
        </div>
        <Link href="/blog" className="text-blue-500 font-semibold hover:underline">
          ← العودة للمدونة
        </Link>
      </div>
      <WhatsAppButton />
      <Footer />
    </>
  );
}