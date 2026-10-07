import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const JoinUs = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[618px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/joinus-hero.jpg" 
            alt="Careers" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-center w-[828px] max-w-full mx-auto px-4">
          <h1 className="text-[63px] leading-[69.3px] font-sans font-normal text-white my-[42.21px] max-w-[828px] mx-auto whitespace-pre-wrap">
            Join Our Team 
          </h1>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto px-[34px] py-[60px]">
        {/* Intro */}
        <div className="mb-[60px] text-center max-w-[800px] mx-auto">
          <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-reap-yellow mb-[16px] font-sans">
            Make your next job, your best job
          </h2>
          <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-8">
            You have an opportunity to be a family to those who need it most. Join a fun, caring group of like-minded people in changing the lives of children across Rwanda. Want to help? Explore our job openings and join the team.
          </p>
        </div>  
        
        <hr />

        {/* Rwanda Openings */}
        <div className="mb-[60px] w-full bg-reap-bg py-16">
          <div className="max-w-[800px] mx-auto px-4">
            <h3 className="text-[18px] font-semibold text-reap-green mb-[30px] text-center uppercase tracking-widest">
              JOB OPENINGS - RWANDA
            </h3>
            
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-8">
              The Rwanda Education Assistance Project (REAP) is hiring for the following internship roles. Please visit the links for the position description, link to apply, and deadline.
            </p>
            
            <ul className="list-disc pl-6 space-y-4">
              <li className="text-[#100404]">
                <a href="https://1drv.ms/b/c/568154f6b337a991/EY0ip7gx2UhCumnrEXDODiwBZktCcbO29Fx4SR-BouWrSQ?e=ahBTo3" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#F5A623] underline hover:opacity-80 transition-opacity">
                  Finance and Operations Manager
                </a>
              </li>
              
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-200 my-[60px]" />
      </main>

      <Footer />
    </div>
  );
};

export default JoinUs;
