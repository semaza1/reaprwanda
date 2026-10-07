import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AnnualReports = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[618px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/annual-reports-hero.jpg" 
            alt="Annual reports" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-center w-[828px] max-w-full mx-auto px-4">
          <h1 className="text-[63px] leading-[69.3px] font-sans font-normal text-white my-[42.21px] max-w-[828px] mx-auto whitespace-pre-wrap">
            Annual Reports
          </h1>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto px-[34px] py-[60px]">
        {/* Intro */}
        <div className="mb-[60px]">
          <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-reap-yellow mb-[16px] font-sans">
            Delivering on our goals
          </h2>
          <div className="max-w-[800px]">
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
              At the Rwanda Education Assistance Project (REAP), integrity guides our fiscal reporting and daily operations. As a gold standard for non-profit transparency and accountability, we ensure that every donated dollar goes directly to empowering the communities we serve.
            </p>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
              When you support REAP, you do more than give—you invest in transformation and join a global community dedicated to shaping Rwanda’s future.
            </p>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
              The Rwanda Education Assistance Project is a registered 501(c)(3) non-profit organization.
            </p>
          </div>
        </div>

        <hr className="border-t border-gray-200 my-[60px]" />

        {/* Multi-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Strategic Plan & Annual Reports */}
          <div className="lg:col-span-5">
            <h3 className="text-[24px] font-semibold text-reap-green mb-[15px]">
              Our strategic plan
            </h3>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-8">
              <a href="#" className="hover:underline text-[#100404]">
                Strategic Plan
              </a>
            </p>

            <h3 className="text-[24px] font-semibold text-reap-green mb-[15px]">
              Annual Reports
            </h3>

            <ul className="space-y-2">
              <li><a href="#" className="text-[16px] font-light text-[#100404] hover:underline">2023–2024 Annual Report (Placeholder)</a></li>
              <li><a href="#" className="text-[16px] font-light text-[#100404] hover:underline">2022–2023 Annual Report (Placeholder)</a></li>
              <li><a href="#" className="text-[16px] font-light text-[#100404] hover:underline">2021–2022 Annual Report (Placeholder)</a></li>
            </ul>
          </div>

          {/* Column 2: 501(c)(3) Status & Fiscal Reports */}
          <div className="lg:col-span-4">
            <h3 className="text-[24px] font-semibold text-reap-green mb-[15px]">
              501(c)(3) Status
            </h3>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-8">
              <a href="#" className="hover:underline text-[#100404]">
                501(c)3 Determination Letter
              </a>
            </p>
          </div>

          {/* Column 3: Badges */}
          <div className="lg:col-span-3 flex flex-col space-y-8 mt-4 lg:mt-0 items-start">
            <a href="https://www.guidestar.org/profile/shared/2cd56ea6-1606-46e7-8d7e-ee9e16a07b12" target="_blank" rel="noreferrer" className="block w-full max-w-[230px]">
              <img src="/images/guidestar-gold.svg" alt="GuideStar" className="w-full h-auto" />
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AnnualReports;
