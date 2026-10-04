import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const StartAFundraiser = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[618px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/BOSTON.jpg" 
            alt="Start a Fundraiser" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center w-[828px] max-w-full mx-auto px-4">
          <h1 className="text-[63px] leading-[69.3px] font-sans font-normal text-white my-[42.21px] max-w-[828px] mx-auto whitespace-pre-wrap">
            Create your own campaign
          </h1>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto px-[34px] py-[60px]">
        {/* Intro Text */}
        <div className="mb-[60px] text-center max-w-[800px] mx-auto">
          <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
            When you set up an online fundraiser, you can transform life’s big and small moments—from birthdays to the end of the year—into support for Rwanda’s youth. You can also create a <a href="https://drive.google.com/file/d/101ZrdrEXAZrd8ayUL8KV-t9UkEVtcK5a/view" target="_blank" rel="noreferrer" className="text-reap-green hover:underline">giving circle</a> or host a benefit event, such as a bake sale.
          </p>
        </div>

        {/* Steps Section */}
        <div className="space-y-[60px]">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2">
              <a href="http://fundraise.asyv.org/startacampaign" target="_blank" rel="noreferrer">
                <img 
                  src="/images/Screen_Shot_2018-03-11_at_11.00.39_AM.png" 
                  alt="Fundraiser Platform" 
                  className="w-full h-auto shadow-md hover:opacity-90 transition-opacity"
                />
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-[24px] font-semibold text-reap-green mb-[15px]">
                Step 1: Create an online fundraiser
              </h3>
              <p className="text-[16px] font-bold text-[#100404] mb-4">Click your preferred platform to learn more:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><a href="/start-a-fundraiser/facebook" className="text-[16px] font-bold text-[#100404] hover:text-reap-green hover:underline">Facebook</a></li>
                <li><a href="/start-a-fundraiser/instagram" className="text-[16px] font-bold text-[#100404] hover:text-reap-green hover:underline">Instagram</a></li>
                <li><a href="/start-a-fundraiser/tiktok" className="text-[16px] font-bold text-[#100404] hover:text-reap-green hover:underline">TikTok</a></li>
                <li><a href="/start-a-fundraiser/youtube" className="text-[16px] font-bold text-[#100404] hover:text-reap-green hover:underline">YouTube</a></li>
              </ul>
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
                <a href="https://fundraise.asyv.org/startacampaign" target="_blank" rel="noreferrer" className="font-bold text-reap-green hover:underline">Click here</a> <strong>to create the page on classy.org.</strong>
              </p>
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                Choose a name for your fundraiser, pick a photo, and set a target goal. Voila! To make your page as engaging as possible to your friends and family, add more information about why ASYV is important to you, tell a personal story, and include photos.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/3">
              <h3 className="text-[24px] font-semibold text-reap-green mb-[15px]">
                Step 2: Invite your friends to Give to your campaign
              </h3>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                Time to spread the word about your fundraiser! You can invite people to take part via email, through your fundraising page itself, or on social media. Don’t forget, the more people you share with, the faster you’ll reach your goal.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/3">
              <h3 className="text-[24px] font-semibold text-reap-green mb-[15px]">
                Step 3: Thank your supporters for donating
              </h3>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                Make sure to show your supporters some love with a thank you note, email, or social that tags them. Thanking supporters is one of the most important parts!
              </p>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-200 my-[60px]" />

        {/* Impact Section */}
        <div className="mb-[60px]">
          <h3 className="text-[32px] font-semibold text-center text-reap-yellow mb-[40px]">
            Every dollar raised has a huge impact on our students.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
            
            {/* Impact 1 */}
            <div className="flex flex-col gap-4">
              <img src="/images/Liquidnet_Family_High_School_Desk_Student.JPG" alt="The Tools to Learn" className="w-full h-[250px] object-cover" />
              <div>
                <h3 className="text-[20px] font-semibold text-reap-green mb-[10px]">The Tools to Learn: $50</h3>
                <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                  Your gift of $50 will provide school supplies for one student for a year. Equipped with the tools to learn, our students are empowered to make the most of their education at the Liquidnet Family High School.
                </p>
              </div>
            </div>

            {/* Impact 2 */}
            <div className="flex flex-col gap-4">
              <img src="/images/DSC_1025__281_29.jpg" alt="Dress for Success" className="w-full h-[250px] object-cover" />
              <div>
                <h3 className="text-[20px] font-semibold text-reap-green mb-[10px]">Dress for Success: $100</h3>
                <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                  Many ASYV students arrive with all of their belongings in a paper bag. Your gift of $100 gives a student the clothing they need to stay warm and dry for all four of their years at ASYV.
                </p>
              </div>
            </div>

            {/* Impact 3 */}
            <div className="flex flex-col gap-4">
              <img src="/images/P1210372.jpg" alt="Healing Through Medicine" className="w-full h-[250px] object-cover" />
              <div>
                <h3 className="text-[20px] font-semibold text-reap-green mb-[10px]">Healing Through Medicine: $250</h3>
                <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                  A gift of $250 means that a family of 20 – 24 boys or girls have access to health and wellness services for an entire year, which is key to ensuring a healed and healthy student.
                </p>
              </div>
            </div>

            {/* Impact 4 */}
            <div className="flex flex-col gap-4">
              <img src="/images/_DSC5904.JPG" alt="A Space to Create" className="w-full h-[250px] object-cover" />
              <div>
                <h3 className="text-[20px] font-semibold text-reap-green mb-[10px]">A Space to Create: $500</h3>
                <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                  At ASYV, many students find their voice in music. Your gift of $500 equips our students with the tools to learn and record their own music in our Jeffrey A. Summit Music Center for half a year. By introducing our kids to formal musical training, the Center offers a new space for them to explore creatively and find hope and healing.
                </p>
              </div>
            </div>
            
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-[60px] pb-[40px]">
          <a 
            href="http://fundraise.asyv.org/startacampaign" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-block px-8 py-4 bg-reap-green text-white font-semibold text-[14px] uppercase tracking-wider hover:bg-opacity-90 transition-all text-center rounded-sm"
          >
            Get started now
          </a>
          <a 
            href="/ways-to-give" 
            className="inline-block px-8 py-4 bg-reap-yellow text-white font-semibold text-[14px] uppercase tracking-wider hover:bg-opacity-90 transition-all text-center rounded-sm"
          >
            Other ways to give
          </a>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default StartAFundraiser;
