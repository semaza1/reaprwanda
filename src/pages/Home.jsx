import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-reap-bg min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[618px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-home.jpeg" 
            alt="Students at Agahozo-Shalom Youth Village" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-center w-[828px] max-w-full mx-auto px-4">
          <h1 className="text-[63px] leading-[69.3px] font-sans font-normal text-white my-[42.21px] max-w-[828px] mx-auto whitespace-pre-wrap">
            Building vibrant, healthier communities for all. 
          </h1>
          <div className="flex justify-center">
            <Button href="#" target="_blank" variant="white">
              Get Involved
            </Button>
          </div>
        </div>
      </section>

      {/* Feature / Mission Section */}
      <section className="py-[100px]">
        <div className="max-w-[1200px] mx-auto px-[34px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader title="Education and community development: Paths to positive futures" alignment="left" className="mb-6" />
              <p className="text-[16px] text-gray-800 mb-8 leading-[25.6px] font-sans font-light">
                In 2006, REAP Advisor Edward Ballen and his daughter Rachel embarked on a volunteer journey to Rwanda, dedicating their time to the Hameau des Jeunes orphanage. Inspired by the orphanage students' profound eagerness to learn and advance their education, the Rwanda Education Assistance Practice (REAP) was established in 2013. The acronym "REAP" encapsulates our fundamental commitment: to empower every community member as they cultivate their potential amidst formidable challenges such as poverty, HIV, and post-genocide trauma.
              </p>
            </div>
            <div className="relative">
              <img src="/images/about-us-home.jpg" alt="Students in class" className="w-full h-auto object-cover" />
            </div>
          </div>
          <p className="text-[16px] text-gray-800 mb-8 leading-[25.6px] font-sans font-light">REAP transformed the Duha Complex School into a top educational institution while expanding into community development through the INEZA and Ihuriro centers to run literacy, farming, women's sewing cooperatives, and youth tailoring programs designed to break generational poverty.</p>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-[100px]">
        <div className="max-w-[1200px] mx-auto px-[34px] text-center">
          <SectionHeader title="What REAP has done" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16">
            {[
              { number: '9,000+', label: 'Homes electrified in the Musha community' },
              { number: '1st', label: 'Day school in Rwamagana District with a common gathering space and standard basketball court' },
              { number: '707', label: 'Books donated by Kigali Public Library' },
              { number: '68', label: 'Community libraries participating in the Rwandan Community Libraries Platform that REAP joined in 2019' },
            ].map((stat, idx) => (
              <div key={idx} className="p-4">
                <h2 className="text-[47px] leading-[56.4px] font-semibold text-reap-green tracking-[1.41px] mb-4 font-sans">{stat.number}</h2>
                <p className="text-[16px] text-gray-800 font-sans font-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-[100px] px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        <SectionHeader title="The Latest from REAP Rwanda" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: '/images/family.jpg', title: 'Positive Parenting' },
            { img: '/images/mental-health support.jpeg', title: 'Mentor Health Support' },
            { img: '/images/reap-achievement-celebration.jpg', title: 'REAP\'s Achievement Celebration' },
          ].map((news, idx) => (
            <div key={idx} className="cursor-pointer group">
              <div className="relative w-[310px] h-[211px] mb-4 overflow-hidden">
                <img src={news.img} alt={news.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="text-[20px] font-light leading-[24px] text-gray-900 group-hover:text-reap-yellow transition-colors font-sans">{news.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Large Image Break */}
      <div className="h-96 w-full relative">
        <img src="/images/family.jpg" alt="ASYV Family" className="w-full h-full object-cover" />
      </div>

      {/* Partners Section */}
      <section className="py-[100px]">
        <div className="max-w-[1200px] mx-auto px-[34px] text-center">
          <SectionHeader title="Reap Rwanda has been featured in ..." />
          <div className="flex flex-wrap justify-center items-center gap-12 mt-12">
            <img src="/images/partners/IIN.png" alt="IIN" className="h-16 object-contain" />
            <img src="/images/partners/grobal%20glow.png" alt="Global Glow" className="h-16 object-contain" />
            <img src="/images/partners/monar.png" alt="Monar" className="h-16 object-contain" />
            <img src="/images/partners/public%20library.png" alt="Public Library" className="h-16 object-contain" />
            <img src="/images/partners/republic%20rwanda.jpg" alt="Republic Rwanda" className="h-16 object-contain" />
            <img src="/images/partners/rollins.png" alt="Rollins" className="h-16 object-contain" />
            <img src="/images/partners/rotary.png" alt="Rotary" className="h-16 object-contain" />
            <img src="/images/partners/rwanda%20book%20mobile.jpg" alt="Rwanda Book Mobile" className="h-16 object-contain" />
            <img src="/images/partners/sfr.png" alt="SFR" className="h-16 object-contain" />
            <img src="/images/partners/soma%20rwanda.png" alt="Soma Rwanda" className="h-16 object-contain" />
            <img src="/images/partners/uyisenga.png" alt="Uyisenga" className="h-16 object-contain" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
