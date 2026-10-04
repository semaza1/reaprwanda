import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';

const Gallery = () => {
  const galleryItems = [
    { src: '/images/about-us-home.jpg', caption: 'About Us' },
    { src: '/images/family.jpg', caption: 'Our Family' },
    { src: '/images/history-hero.jpg', caption: 'Our History' },
    { src: '/images/holistic-education.jpg', caption: 'Holistic Education' },
    { src: '/images/IMG_3252.jpg', caption: 'Youth Empowerment' },
    { src: '/images/Intore_2.jpg', caption: 'Cultural Heritage' },
    { src: '/images/mental-health support.jpeg', caption: 'Mental Health Support' },
    { src: '/images/philosophy.jpeg', caption: 'Our Philosophy' },
    { src: '/images/reap-achievement-celebration.jpg', caption: 'Achievement & Celebration' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Navbar />

      {/* Hero Section */}
            <section className="relative h-[618px] w-full flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="../images/gallery-hero.jpg"
                        alt="Gallery"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="relative z-10 text-center w-[828px] max-w-full mx-auto px-4">
                    <h1 className="text-[63px] leading-[69.3px] font-sans font-normal text-white my-[42.21px] max-w-[828px] mx-auto whitespace-pre-wrap">
                        Gallery
                    </h1>
                    
                </div>
            </section>

      {/* Edge-to-Edge Grid Gallery Section */}
      <main className="flex-grow w-full">
        {/* Gallery section */}
        <div className='bg-white py-[50px]'>
          <SectionHeader title="View REAP Rwanda through a lens" alignment="center" className='text-reap-dark-green' />
          <p className='text-[16px] text-gray-800 mb-8 leading-[25.6px] font-sans font-light max-w-[1200px] mx-auto px-[34px] mt-[50px]'>
            Thank you for being a part of our community! Your continued support enables us to nurture and support vulnerable youth in Rwanda through education, mentorship, and care. Here are some photos capturing the joy and spirit of the children at Reap Rwanda:
            </p>
        </div>
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
          {galleryItems.map((item, index) => (
            <div key={index} className="w-full aspect-square relative group overflow-hidden bg-gray-100 cursor-pointer">
              <img 
                src={item.src} 
                alt={item.caption} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
              
              {/* Caption overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                <span className="text-white text-[24px] font-semibold tracking-wider uppercase text-center px-4">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
