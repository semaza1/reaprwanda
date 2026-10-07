import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

const Donate = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[618px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/nsr9A6P68Tk?autoplay=1&mute=1&controls=0&loop=1&playlist=nsr9A6P68Tk&showinfo=0&rel=0&modestbranding=1&cc_load_policy=0&disablekb=1&iv_load_policy=3"
            className="w-[100vw] max-w-none h-[56.25vw] min-h-[618px] min-w-[1099px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          ></iframe>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center w-[828px] max-w-full mx-auto px-4">
          <h1 className="text-[63px] leading-[69.3px] font-sans font-normal text-white my-[42.21px] max-w-[828px] mx-auto whitespace-pre-wrap">
            Donate
          </h1>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto px-[34px] py-[60px]">
        {/* Intro Section */}
        <div className="mb-[60px] text-center max-w-[900px] mx-auto">
          <h2 className="text-[24px] md:text-[28px] font-semibold text-reap-yellow mb-[20px]">
            We are thrilled to announce that we have received the Gold Guidestar Badge.
          </h2>
          <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-8">
            The Guidestar Badge is a prestigious recognition from Guidestar, a renowned nonprofit information platform. It serves as a digital symbol of our commitment to transparency, providing visitors with a clear signal that we operate with the highest standards of accountability and ethics.
          </p>

          <div className="flex justify-center mb-8">
             <a href="https://www.guidestar.org/profile/shared/2cd56ea6-1606-46e7-8d7e-ee9e16a07b12" target="_blank" rel="noreferrer">
                 <img 
                    src="/images/guidestar-gold.svg" 
                    alt="Gold Transparency 2024 Candid" 
                    className="h-[120px] object-contain hover:opacity-90 transition-opacity" 
                 />
             </a>
          </div>

          <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
            You can donate through our website using the button below. <strong>Please note that your donations include a 4% processing fee.</strong> REAP also accepts personal and foundation checks. You can further support our mission by adding Rwanda Education Assistance Project to your AmazonSmile account.
          </p>
          <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-8">
            When you shop through AmazonSmile, you will have the usual Amazon experience <strong>and</strong> Amazon will donate 0.5% of their proceeds from your purchases to REAP.
          </p>
          
          <h3 className="text-[18px] font-semibold text-[#100404] mb-8">
            For donations over $1,000, please donate by check if you can.
          </h3>
          
          <div className="flex flex-col md:flex-row gap-12 justify-between items-center bg-gray-50 p-8 rounded-md text-left">
            <div className="flex-1">
                <p className="text-[16px] font-semibold text-[#100404] mb-4">Please mail checks to:</p>
                <p className="text-[16px] font-light text-[#100404] mb-1">Rwanda Education Assistance Project</p>
                <p className="text-[16px] font-light text-[#100404] mb-1">% Ed Ballen</p>
                <p className="text-[16px] font-light text-[#100404]">P.O. Box 240 W 75th St, Apt 4C New York, New York 10023</p>
            </div>
            <div className="flex-1 flex justify-center">
                <img 
                  src="/images/amazon-smile.png" 
                  alt="Amazon Smile" 
                  className="h-[80px] object-contain" 
                />
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-200 my-[60px]" />

        {/* Impact Section */}
        <div className="mb-[60px]">
          <p className="text-[16px] font-bold text-center text-[#100404] mb-[60px]">
            These are examples of categories of donations. We encourage larger donations to fortify our capacity and extend the reach of our impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[40px] max-w-[1000px] mx-auto">
            {[
              { amount: "$52", text: "Will provide one meal per day for a toddler in our Early Childhood Program for five months." },
              { amount: "$104", text: "Will pay for yearlong business training for one young woman." },
              { amount: "$104", text: "Will purchase 10 native language books for our Mobile Library program." },
              { amount: "$156", text: "Will pay for a sewing machine for one young woman." },
              { amount: "$208", text: "Will fund a start-up toolkit for one young woman." },
              { amount: "$250", text: "Will purchase sewing materials for a youth to get started." },
              { amount: "$312", text: "Will provide a toddler with a full year of education in our esteemed early childhood program, complete with daily nutritious meals and parent education." },
              { amount: "$520", text: "Will fund a yearlong mental health support for one young woman." },
              { amount: "$570", text: "Will provide a sewing machine for a youth." },
              { amount: "$1,040", text: "Will grant a scholarship to empower one girl with comprehensive access to our program (a year-long tailoring and business training, supplemented by mental health support)." },
              { amount: "$1,040", text: "Will fund a full-ride scholarship for one student to attend a year at a school of excellence." },
              { amount: "$1,150", text: "Will sponsor a youth's enrollment in the Tailoring Production Center." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <h3 className="text-[24px] font-bold text-reap-yellow">{item.amount}</h3>
                <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center mt-[60px] pb-[40px]">
          <Button 
            href="https://www.reaprwanda.org/checkout/donate?donatePageId=61e69063918c033c415cd446" 
            target="_blank" 
            rel="noreferrer" 
            variant="primary"
            className="px-12 py-4 text-[16px]"
          >
            Donate Now
          </Button>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Donate;
