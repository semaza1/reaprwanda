import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-asyv-bg min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[618px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/thanksgiving-2.jpg" 
            alt="Students at Agahozo-Shalom Youth Village" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-center w-[828px] max-w-full mx-auto px-4">
          <h1 className="text-[63px] leading-[69.3px] font-sans font-normal text-white my-[42.21px] max-w-[828px] mx-auto whitespace-pre-wrap">
            Thriving futures start here. 
          </h1>
          <div className="flex justify-center">
            <Button href="https://fundraise.asyv.org/campaign/759445/donate" target="_blank" variant="primary">
              Donate
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-[100px] px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        <SectionHeader title="The Latest from the Village" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: '/images/ishamigradeClassof2026_220.JPG', title: 'Celebrating the ASYV Class of 2026 and Our Alumni' },
            { img: '/images/MAIN.jpg', title: 'The Young Entrepreneurs of ASYV' },
            { img: '/images/JULIA_2BG.webp', title: 'Alumni on the Move: Making Rwanda’s Tech Industry More Inclusive' },
          ].map((news, idx) => (
            <div key={idx} className="cursor-pointer group">
              <div className="relative w-[310px] h-[211px] mb-4 overflow-hidden">
                <img src={news.img} alt={news.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="text-[20px] font-light leading-[24px] text-gray-900 group-hover:text-asyv-orange transition-colors font-sans">{news.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Feature / Mission Section */}
      <section className="py-[100px]">
        <div className="max-w-[1200px] mx-auto px-[34px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader title="Strengthening ASYV for the Future" alignment="left" className="mb-6" />
              <p className="text-[16px] text-gray-800 mb-8 leading-[25.6px] font-sans font-light">
                By investing in holistic education, emotional support, and sustainable practices, we are preparing the next generation of Rwandan leaders to overcome challenges and uplift their communities.
              </p>
            </div>
            <div className="relative">
              <img src="/images/DSC03774.jpg" alt="Students in class" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-[100px]">
        <div className="max-w-[1200px] mx-auto px-[34px] text-center">
          <SectionHeader title="What can one Village do?" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16">
            {[
              { number: '2,100', label: 'Vulnerable youth served' },
              { number: '100%', label: 'Of graduates transition to stable lives' },
              { number: '92%', label: 'Alumni pursuing higher education' },
              { number: '65%', label: 'Female leadership representation' },
            ].map((stat, idx) => (
              <div key={idx} className="p-4">
                <h2 className="text-[47px] leading-[56.4px] font-semibold text-asyv-orange tracking-[1.41px] mb-4 font-sans">{stat.number}</h2>
                <p className="text-[16px] text-gray-800 font-sans font-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Image Break */}
      <div className="h-96 w-full relative">
        <img src="/images/family.jpg" alt="ASYV Family" className="w-full h-full object-cover" />
      </div>

      {/* CTA Section */}
      <CTASection 
        title="Join Our Village Family" 
        description="Your support provides a loving home, excellent education, and comprehensive health care for Rwanda's most vulnerable youth."
        buttonText="Support the Village"
        buttonHref="https://fundraise.asyv.org/campaign/759445/donate"
      />

      {/* Press/Logos Section */}
      <section className="py-[100px]">
        <div className="max-w-[1200px] mx-auto px-[34px] text-center">
          <SectionHeader title="The Agahozo-Shalom Youth Village has been featured in…" />
          <div className="flex flex-wrap justify-center items-center gap-12 mt-12">
            <img src="/images/CNN_logo.png" alt="CNN" className="h-10 object-contain" />
            <img src="/images/Forbes_com-logo-912FB3CCE3-seeklogo.com.png" alt="Forbes" className="h-8 object-contain" />
            <img src="/images/National-Geographic-logo.png" alt="National Geographic" className="h-10 object-contain" />
            <img src="/images/ELLE_Magazine_Logo.svg.png" alt="Elle" className="h-8 object-contain" />
            <img src="/images/Teen_Vogue_logo.svg.png" alt="Teen Vogue" className="h-8 object-contain" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
