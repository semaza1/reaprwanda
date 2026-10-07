import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import CTASection from '../../components/CTASection';

const Accomplishments = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[618px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/KcCHdSfD-3M?autoplay=1&mute=1&controls=0&loop=1&playlist=KcCHdSfD-3M&showinfo=0&rel=0&modestbranding=1&cc_load_policy=0&disablekb=1&iv_load_policy=3"
            className="w-[100vw] max-w-none h-[56.25vw] min-h-[618px] min-w-[1099px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          ></iframe>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center w-[828px] max-w-full mx-auto px-4">
          <h1 className="text-[42px] md:text-[63px] leading-tight md:leading-[69.3px] font-sans font-normal text-white my-[42.21px] max-w-[828px] mx-auto whitespace-pre-wrap">
            Our accomplishments
          </h1>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto px-[34px] py-[60px]">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-4 mb-[60px]">
          <div className="lg:col-start-3 lg:col-span-8 text-center lg:text-left">
            <h2 className="text-[36px] md:text-[47px] font-semibold tracking-[1.41px] leading-tight md:leading-[56.4px] text-reap-yellow mb-[16px] font-sans">
              REAP's Impact
            </h2>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
              Over the past decade, the Rwanda Education Assistance Project (REAP) has built robust community partnerships, advancing education, health, and infrastructure in the Rwamagana District. From supplying electricity to thousands of homes to building modern community centers, we empower communities for a sustainable future.
            </p>
          </div>
        </div>

        {/* Understanding the Need Intro */}
        <div className="grid grid-cols-12 gap-x-4 mb-8">
          <div className="col-span-12">
            <h3 className="text-[17px] font-semibold text-reap-green tracking-[1.7px] leading-[26.35px] uppercase">
              Key Milestones & Initiatives
            </h3>
          </div>
        </div>

        {/* Quote 1 with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-x-4 mb-[60px] items-center">
          <div className="lg:col-start-3 lg:col-span-3 w-3/4 mx-auto lg:w-full">
            <div className="relative w-full pb-[96.4%] overflow-hidden rounded-xl lg:rounded-none">
              <img 
                src="/images/water.jpg" 
                alt="Community Impact" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 relative bg-white p-6 md:p-8 rounded-xl border border-gray-100 mt-6 lg:mt-10 mb-6 lg:mb-[60px] max-w-[800px] mx-auto lg:mx-0">
            <div className="absolute -top-5 -left-1 bg-white px-2">
              <svg className="w-10 h-10 md:w-12 md:h-12 text-[#fce8b2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="border-l-[1.5px] border-[#b5e0b5] pl-4 md:pl-6 ml-1 md:ml-2">
              <blockquote className="text-[15px] md:text-[16px] text-gray-800 leading-relaxed mb-4">
                “Fresh, clean water and reliable electricity have fundamentally transformed our learning environment. With these vital resources, students can focus on their studies during the day, complete their homework in the evenings, and stay healthy to reach their full potential.”
              </blockquote>
              <p className="text-[13px] md:text-[14px] font-bold text-[#1eb53a] uppercase">
                — Community Member, Duha Complex School
              </p>
            </div>
          </div>
        </div>

        {/* Stats Intro */}
        <div className="mb-[60px]">
          <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
            Through dedicated initiatives and partnerships, REAP has achieved measurable improvements in local infrastructure and educational resources.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-x-8 mb-[60px] max-w-[1000px] mx-auto">
          <div className="text-center px-4">
            <h2 className="text-[40px] md:text-[47px] font-semibold tracking-[1.41px] leading-[48px] md:leading-[56.4px] text-reap-yellow mb-[12px] md:mb-[16px] font-sans">9,000+</h2>
            <h3 className="text-[15px] md:text-[17px] font-semibold text-reap-green tracking-[1.7px] leading-[24px] md:leading-[26.35px] uppercase mt-2">
              homes supplied with electricity in the Musha community.
            </h3>
            <p className="text-[14px] md:text-[16px] font-light text-[#100404] leading-[22px] md:leading-[25.6px] mt-4">
              *A major milestone achieved in 2012.
            </p>
          </div>
          <div className="text-center px-4">
            <h2 className="text-[40px] md:text-[47px] font-semibold tracking-[1.41px] leading-[48px] md:leading-[56.4px] text-reap-yellow mb-[12px] md:mb-[16px] font-sans">77</h2>
            <h3 className="text-[15px] md:text-[17px] font-semibold text-reap-green tracking-[1.7px] leading-[24px] md:leading-[26.35px] uppercase mt-2">
              schools hosted at the district tournament at Duha Complex School's new court.
            </h3>
          </div>
          <div className="text-center px-4 sm:col-span-2 md:col-span-1">
            <h2 className="text-[40px] md:text-[47px] font-semibold tracking-[1.41px] leading-[48px] md:leading-[56.4px] text-reap-yellow mb-[12px] md:mb-[16px] font-sans">707</h2>
            <h3 className="text-[15px] md:text-[17px] font-semibold text-reap-green tracking-[1.7px] leading-[24px] md:leading-[26.35px] uppercase mt-2">
              books donated by the Kigali Public Library to REAP's library.
            </h3>
          </div>
        </div>

        <hr className="border-t border-gray-200 my-[60px]" />

        {/* Our Alumni Section */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-reap-yellow mb-[16px] font-sans">Retired Programs & Initiatives</h2>
          <h3 className="text-[17px] font-semibold text-reap-green tracking-[1.7px] leading-[26.35px] uppercase mt-2">Foundational Projects</h3>
          <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mt-4">Initiatives successfully transitioned to community management:</p>
        </div>

        {/* Alumni Stats + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-x-4 mb-[60px] items-center">
          <div className="lg:col-start-2 lg:col-span-5 flex flex-col justify-center space-y-10 lg:space-y-12 lg:pr-8">
            <div className="text-center lg:text-left">
              <h2 className="text-[28px] md:text-[32px] font-semibold tracking-[1.41px] leading-tight md:leading-[40px] text-reap-yellow mb-[8px] font-sans">Dairy Farm & Nutrition</h2>
              <h3 className="text-[14px] md:text-[15px] font-semibold text-reap-green tracking-[1.5px] leading-[22px] md:leading-[24px] uppercase mt-2">
                Supplemented student lunches with fresh milk before being turned over to the Duha Complex School to manage.
              </h3>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-[28px] md:text-[32px] font-semibold tracking-[1.41px] leading-tight md:leading-[40px] text-reap-yellow mb-[8px] font-sans">Advancing STEM</h2>
              <h3 className="text-[14px] md:text-[15px] font-semibold text-reap-green tracking-[1.5px] leading-[22px] md:leading-[24px] uppercase mt-2">
                Partnered with Level Up Village to provide one-on-one interactive STEM skills-building for Duha students.
              </h3>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-[28px] md:text-[32px] font-semibold tracking-[1.41px] leading-tight md:leading-[40px] text-reap-yellow mb-[8px] font-sans">Teacher Housing</h2>
              <h3 className="text-[14px] md:text-[15px] font-semibold text-reap-green tracking-[1.5px] leading-[22px] md:leading-[24px] uppercase mt-2">
                Built housing to provide residence for teachers, ensuring stable living opportunities and increased retention.
              </h3>
            </div>
          </div>
          <div className="lg:col-span-5 w-4/5 mx-auto lg:w-full">
            <div className="relative w-full pb-[136.8%] overflow-hidden rounded-xl lg:rounded-none">
              <img 
                src="/images/nutrition.jpg" 
                alt="Retired Programs" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-200 my-[60px]" />

        {/* Tulane Study Section */}
        <div className="mb-[60px]">
          <h3 className="text-[17px] font-semibold text-reap-green tracking-[1.7px] leading-[26.35px] uppercase mb-4">
            National Recognition & Partnerships
          </h3>
          <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-[30px]">
            REAP has received a Certificate of Appreciation from Rwamagana District and permanent registration as a national nonprofit by the Rwanda Governance Board. We actively collaborate with the US Embassy, Mandela Washington Fellowship, UNICEF Rwanda, and the Rwanda Education Board to drive community development and early childhood education.
          </p>
          <div className="flex justify-center mt-[10px] mb-[40px]">
            <Button variant="secondary" to="/blog">
              Read our latest updates.
            </Button>
          </div>
        </div>

        {/* Quote 2 with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-x-4 items-center">
          <div className="lg:col-start-2 lg:col-span-5 w-3/4 mx-auto lg:w-full">
            <div className="relative w-full pb-[69.13%] overflow-hidden rounded-xl lg:rounded-none">
              <img 
                src="/images/kalenzi.jpg" 
                alt="Community Leader" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="relative lg:col-span-6 bg-white p-6 md:p-8 rounded-xl border border-gray-100 mt-6 lg:mt-10 mb-6 lg:mb-[60px] max-w-[800px] mx-auto lg:mx-0">
            <div className="absolute -top-5 -left-1 bg-white px-2">
              <svg className="w-10 h-10 md:w-12 md:h-12 text-[#fce8b2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div className="border-l-[1.5px] border-[#b5e0b5] pl-4 md:pl-6 ml-1 md:ml-2">
              <blockquote className="text-[15px] md:text-[16px] text-gray-800 leading-relaxed mb-4">
                Through initiatives like the Kalendari Ineza project and our comprehensive early childhood centers, we are not just educating individuals; we are uplifting entire communities. Presenting our work at international social work conferences reflects our profound commitment to sustainable, community-driven development.
              </blockquote>
              <p className="text-[13px] md:text-[14px] font-bold text-[#1eb53a] uppercase">
                — REAP Leadership & Community Partners
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Accomplishments;
