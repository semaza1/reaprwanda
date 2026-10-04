import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Careers = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[618px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/IMG_3252.jpg" 
            alt="Careers" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-center w-[828px] max-w-full mx-auto px-4">
          <h1 className="text-[63px] leading-[69.3px] font-sans font-normal text-white my-[42.21px] max-w-[828px] mx-auto whitespace-pre-wrap">
            Careers
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
          
          <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-reap-yellow mb-[16px] font-sans">
            Job openings
          </h2>
        </div>

        {/* USA Openings */}
        <div className="mb-[60px] text-center">
          <h3 className="text-[24px] font-semibold text-reap-green mb-[15px] uppercase tracking-wide">
            Job openings - USA
          </h3>
          <p className="text-[16px] font-light text-[#100404] leading-[25.6px] italic">
            There are no current openings in the U.S. office.
          </p>
        </div>

        {/* Rwanda Openings */}
        <div className="mb-[60px] max-w-[800px] mx-auto">
          <h3 className="text-[24px] font-semibold text-reap-green mb-[15px] text-center uppercase tracking-wide">
            Job openings - RWANDA
          </h3>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm border-t-4 border-reap-yellow mt-8">
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-6">
              The Agahozo-Shalom Youth Village is hiring for the following internship roles. These positions are limited to ASYV alumni. Please visit the links for the position description, link to apply, and deadline.
            </p>
            
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <a href="https://drive.google.com/file/d/12XbEu7yPUda_HXMHL5GUHuN4zXReX3DE/view?usp=sharing" target="_blank" rel="noreferrer" className="text-[16px] font-medium text-[#100404] hover:text-reap-green hover:underline transition-colors">
                  Science Center Intern
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1yYI_fVE4ShsIWGPOx1CwkycyIexSFShv/view?usp=sharing" target="_blank" rel="noreferrer" className="text-[16px] font-medium text-[#100404] hover:text-reap-green hover:underline transition-colors">
                  Academic Advisor Intern (3)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/14d5ud5fvCzRsRdoj9ajpA0WaBXNnHIdM/view?usp=sharing" target="_blank" rel="noreferrer" className="text-[16px] font-medium text-[#100404] hover:text-reap-green hover:underline transition-colors">
                  Guest Relations Intern (2)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1Qfxg5InQMR1Aqv1Ekeodj3llFwRJAZwp/view?usp=sharing" target="_blank" rel="noreferrer" className="text-[16px] font-medium text-[#100404] hover:text-reap-green hover:underline transition-colors">
                  Media and Communications / Events Coordination Intern
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1DK4lFx0-u9iTNTojRNEn1100mOWSvY-N/view?usp=sharing" target="_blank" rel="noreferrer" className="text-[16px] font-medium text-[#100404] hover:text-reap-green hover:underline transition-colors">
                  Public Health Intern
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1Ku3MnGlg3CxxKURakX0ZmfkurTnNVwjA/view?usp=sharing" target="_blank" rel="noreferrer" className="text-[16px] font-medium text-[#100404] hover:text-reap-green hover:underline transition-colors">
                  Culinary Arts Intern
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1A31DHwg5Zb0d2CM7qBlOwCCch4ZQZJ3d/view?usp=sharing" target="_blank" rel="noreferrer" className="text-[16px] font-medium text-[#100404] hover:text-reap-green hover:underline transition-colors">
                  Sports Intern
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1ipPJ9TqXqzd6JzJXuMc1QLZ-H6HiX6qV/view?usp=sharing" target="_blank" rel="noreferrer" className="text-[16px] font-medium text-[#100404] hover:text-reap-green hover:underline transition-colors">
                  Information Technology (IT) Intern
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1DUPs7wDkScOH05k62Xi9WSMiaVwqSHhU/view?usp=sharing" target="_blank" rel="noreferrer" className="text-[16px] font-medium text-[#100404] hover:text-reap-green hover:underline transition-colors">
                  Library Intern
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

export default Careers;
