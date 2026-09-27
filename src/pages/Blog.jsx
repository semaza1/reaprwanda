import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blogData';

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-[34px] py-[60px]">
        {/* Header Section */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-asyv-orange mb-[16px] font-sans">
            Stories from the Village
          </h2>
          <p className="text-[16px] font-light leading-[25.6px] text-[#100404] italic font-sans">
            Updates on everything ASYV
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px]">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex flex-col font-sans">
              
              {/* Thumbnail */}
              <a href="#" className="block mb-6 relative w-full pt-[66.6667%] overflow-hidden bg-gray-100">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </a>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                {/* Date */}
                <time className="text-[13px] font-light leading-[18.2px] text-[#100404] mb-2">
                  {post.date}
                </time>

                {/* Title */}
                <h3 className="text-[20px] font-light leading-[24px] text-[#100404] mb-4 hover:text-asyv-orange transition-colors cursor-pointer">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[14px] font-light leading-[19.6px] text-[#100404] mb-4">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div className="mt-auto">
                  <a href="#" className="text-[14px] font-medium leading-[20px] text-[#100404] hover:text-asyv-orange transition-colors inline-block pb-[10px]">
                    Read more &rarr;
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
