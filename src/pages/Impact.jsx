import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import CTASection from '../components/CTASection';

const Impact = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
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
            The village’s Impact
          </h1>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto px-[34px] py-[60px]">
        {/* Intro Section */}
        <div className="grid grid-cols-12 gap-x-4 mb-[60px]">
          <div className="col-start-3 col-span-8">
            <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-asyv-orange mb-[16px] font-sans">
              Positive changemakers
            </h2>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
              At the Agahozo-Shalom Youth Village, we support young people in acquiring the skills and confidence they need to change their communities, Rwanda, and the world—in ways big and small.
            </p>
          </div>
        </div>

        {/* Understanding the Need Intro */}
        <div className="grid grid-cols-12 gap-x-4 mb-8">
          <div className="col-span-12">
            <h3 className="text-[17px] font-semibold text-asyv-green tracking-[1.7px] leading-[26.35px] uppercase">
              Understanding the need
            </h3>
          </div>
        </div>

        {/* Quote 1 with Image */}
        <div className="grid grid-cols-12 gap-x-4 mb-[60px] items-center">
          <div className="col-start-3 col-span-3">
            <div className="relative w-full pb-[96.4%] overflow-hidden">
              <img 
                src="/images/Aime_2BNziza_2BPacifique.webp" 
                alt="Nziza Aime Pacifique" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-7 pl-[6%]">
            <blockquote className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-6">
              “I came from a family background where financial hardship made having a quality education nearly impossible. ASYV wasn’t just a school, it was a community that raised me, believed in me, and showed me that I was capable. Now, I want to help every student in Rwanda learn not just how to use technology, but how to build their futures through it.”
            </blockquote>
            <p className="text-[18px] text-[#100404] leading-[54px] text-center">
              — Nziza Aime Pacifique, ASYV Class of 2021, student at the African Leadership University
            </p>
          </div>
        </div>

        {/* Stats Intro */}
        <div className="mb-[60px]">
          <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
            During our extensive recruitment process, we assess the vulnerabilities of each potential student.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-12 gap-x-4 mb-[60px]">
          <div className="col-span-8">
            <div className="grid grid-cols-8 gap-x-4">
              <div className="col-start-3 col-span-3 text-center px-4">
                <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-asyv-orange mb-[16px] font-sans">66%</h2>
                <h3 className="text-[17px] font-semibold text-asyv-green tracking-[1.7px] leading-[26.35px] uppercase mt-2">
                  were living without one or both parents.
                </h3>
                <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mt-4">
                  *Information for the ASYV Class of 2028.
                </p>
              </div>
              <div className="col-span-3 text-center px-4">
                <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-asyv-orange mb-[16px] font-sans">34%</h2>
                <h3 className="text-[17px] font-semibold text-asyv-green tracking-[1.7px] leading-[26.35px] uppercase mt-2">
                  experienced vulnerabilities other than living without their parents, including poverty.
                </h3>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-4 gap-x-4">
              <div className="col-span-3 text-center px-4">
                <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-asyv-orange mb-[16px] font-sans">92%</h2>
                <h3 className="text-[17px] font-semibold text-asyv-green tracking-[1.7px] leading-[26.35px] uppercase mt-2">
                  lived on two meals a day or less.
                </h3>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-200 my-[60px]" />

        {/* Our Alumni Section */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-asyv-orange mb-[16px] font-sans">Our alumni</h2>
          <h3 className="text-[17px] font-semibold text-asyv-green tracking-[1.7px] leading-[26.35px] uppercase mt-2">See the Difference</h3>
          <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mt-4">Of our over 1,600 graduates:</p>
        </div>

        {/* Alumni Stats + Image */}
        <div className="grid grid-cols-12 gap-x-4 mb-[60px] items-center">
          <div className="col-start-2 col-span-5 flex flex-col justify-center space-y-12 pr-8">
            <div className="text-center">
              <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-asyv-orange mb-[16px] font-sans">98%</h2>
              <h3 className="text-[17px] font-semibold text-asyv-green tracking-[1.7px] leading-[26.35px] uppercase mt-2">
                have expressed feeling more confident and better equipped for a happy and successful future.
              </h3>
            </div>
            <div className="text-center">
              <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-asyv-orange mb-[16px] font-sans">65%</h2>
              <h3 className="text-[17px] font-semibold text-asyv-green tracking-[1.7px] leading-[26.35px] uppercase mt-2">
                have enrolled in tertiary education, compared to 8% of young people nationally.
              </h3>
            </div>
            <div className="text-center">
              <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-asyv-orange mb-[16px] font-sans">70%</h2>
              <h3 className="text-[17px] font-semibold text-asyv-green tracking-[1.7px] leading-[26.35px] uppercase mt-2">
                are employed, more than 20% higher than the national average for youth.
              </h3>
            </div>
          </div>
          <div className="col-span-5">
            <div className="relative w-full pb-[136.8%] overflow-hidden">
              <img 
                src="/images/GRAD.jpg" 
                alt="Graduate" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-200 my-[60px]" />

        {/* Tulane Study Section */}
        <div className="mb-[60px]">
          <h3 className="text-[17px] font-semibold text-asyv-green tracking-[1.7px] leading-[26.35px] uppercase mb-4">
            An Analysis By Tulane University
          </h3>
          <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-[30px]">
            A two-year study led by Tulane University School of Public Health and Tropical Medicine found that ASYV’s model significantly improves outcomes among our graduates—proving that our approach transforms lives.
          </p>
          <div className="flex justify-center mt-[10px] mb-[40px]">
            <Button variant="secondary" to="/blog">
              Read the report.
            </Button>
          </div>
        </div>

        {/* Quote 2 with Image */}
        <div className="grid grid-cols-12 gap-x-4 items-center">
          <div className="col-start-2 col-span-5">
            <div className="relative w-full pb-[69.13%] overflow-hidden">
              <img 
                src="/images/Belle_2B2.webp" 
                alt="Bella Honorine Masabo" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-6 pl-[6%]">
            <blockquote className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-6">
              “My time at ASYV turned me into a woman who is confident, skilled, and knows what she is looking for. I work in communications at RwandAir. RwandAir is raising the African flag, bringing development to Rwanda. I dream of one day becoming a member of the parliament. I want to serve the people of Rwanda.”
            </blockquote>
            <p className="text-[18px] text-[#100404] leading-[54px] text-center">
              — Bella Honorine Masabo, ASYV Class of 2018, Reichman University Class of 2022
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Impact;
