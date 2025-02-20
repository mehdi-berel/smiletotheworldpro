import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - SmileToTheWorld Pro',
  description: 'Latest news, insights, and updates from the dental equipment marketplace.',
};

const blogPosts = [
  {
    title: "The Future of Dental Equipment Trading",
    excerpt: "How digital marketplaces are revolutionizing the way dental professionals source their equipment.",
    date: "February 15, 2025",
    author: "Dr. Sarah Chen",
    category: "Industry Trends",
    imageUrl: "/images/blog/dental-future.jpg",
    slug: "future-of-dental-equipment-trading"
  },
  {
    title: "Top 5 Dental Technologies in 2025",
    excerpt: "Discover the most innovative dental technologies that are shaping the industry this year.",
    date: "February 10, 2025",
    author: "Dr. Michael Roberts",
    category: "Technology",
    imageUrl: "/images/blog/dental-tech.jpg",
    slug: "top-dental-technologies-2025"
  },
  {
    title: "Guide to International Equipment Sourcing",
    excerpt: "Essential tips for dental professionals looking to source equipment from international markets.",
    date: "February 5, 2025",
    author: "James Wilson",
    category: "Guides",
    imageUrl: "/images/blog/international-sourcing.jpg",
    slug: "international-equipment-sourcing-guide"
  }
];

const categories = [
  "All Posts",
  "Industry Trends",
  "Technology",
  "Guides",
  "Case Studies",
  "Market Updates"
];

export default function BlogPage() {
  return (
    <main className="flex-1">
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          {/* Header */}
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Latest Updates
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Insights, news, and expert perspectives on dental equipment and industry trends.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-sm font-medium 
                         text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white 
                         dark:hover:bg-primary transition-colors duration-200 shadow-sm"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm font-medium text-primary">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {post.date}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 hover:text-primary transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center">
                      <div className="text-sm">
                        <p className="font-medium text-gray-900 dark:text-gray-100">
                          {post.author}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-primary/5 dark:bg-primary/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Subscribe to our newsletter for the latest industry insights and updates.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 
                         transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
