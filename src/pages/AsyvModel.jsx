import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import CTASection from '../components/CTASection';

const AsyvModel = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[618px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Cover.jpg" 
            alt="Students at Agahozo-Shalom Youth Village" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-center w-[828px] max-w-full mx-auto px-4">
          <h1 className="text-[63px] leading-[69.3px] font-sans font-normal text-white my-[42.21px] max-w-[828px] mx-auto whitespace-pre-wrap">
            The ASYV Model
          </h1>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto px-[34px] py-[60px]">
        {/* Intro */}
        <div className="grid grid-cols-12 gap-x-4 mb-[60px]">
          <div className="col-start-3 col-span-8 text-center">
            <p className="text-[18px] font-light text-[#100404] leading-[28px] mb-6">
              Agahozo-Shalom Youth Village (ASYV) is a residential living and learning community in rural Rwanda. Through healing, education, and love, ASYV empowers orphaned and vulnerable Rwandan youth to build lives of dignity and contribute to a better world.
            </p>
          </div>
        </div>

        {/* Thriving Futures */}
        <div className="grid grid-cols-12 gap-x-4 mb-[60px] items-center">
          <div className="col-span-6 pr-[6%]">
            <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-reap-yellow mb-[16px] font-sans">
              Thriving Futures Start with ASYV
            </h2>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
              Each year, over 500 young people, ages 14 to 22, from vulnerable backgrounds call the Agahozo-Shalom Youth Village (ASYV) home. We offer our students a holistic program focused on education and building resilience, confidence, and career skills. We also offer a community of support—a Village family. Our graduates go on to build thriving futures for themselves and their communities.
            </p>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
              As a Center of Excellence, we share components of our student-centered, trauma-informed approach with hundreds more educators and young people from across Rwanda.
            </p>
          </div>
          <div className="col-span-6">
            <div className="relative w-full pb-[75%] overflow-hidden">
              <img 
                src="/images/family.jpg" 
                alt="ASYV Family" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-200 my-[60px]" />

        {/* Our Name */}
        <div className="grid grid-cols-12 gap-x-4 mb-[60px]">
          <div className="col-start-3 col-span-8 text-center">
            <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-reap-yellow mb-[16px] font-sans">
              Our Name
            </h2>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
              Founded in response to the orphan crisis caused by the 1994 Genocide Against the Tutsi in Rwanda, Agahozo-Shalom is a place where "tears are dried" (from the Kinyarwanda word "agahozo") and where youth from vulnerable backgrounds can “live in peace” (from the Hebrew word "shalom").
            </p>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
              ASYV was inspired by Yemin Orde, a youth village established in 1953 to care for orphans of the Holocaust. Our founder, Anne Heyman, and our founding executive director, Sifa Nsengimana, collaborated with an international group of experts to ensure our program best serves young people in Rwanda.
            </p>
          </div>
        </div>

        <hr className="border-t border-gray-200 my-[60px]" />

        {/* Our Approach */}
        <div className="mb-[60px]">
          <div className="text-center mb-12">
            <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-reap-yellow mb-[16px] font-sans">
              Our Approach
            </h2>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] max-w-3xl mx-auto">
              All aspects of Village life are designed to support students to heal from past traumas, dream big, and achieve those dreams.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-semibold text-reap-green tracking-[1px] leading-[26.35px] uppercase mb-3">
                  Supportive Living Environment
                </h3>
                <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                  Our Village campus in Rwanda’s Eastern Province provides students with a supportive living environment, including campus homes and live-in staff Mamas.
                </p>
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-reap-green tracking-[1px] leading-[26.35px] uppercase mb-3">
                  Student-Centered Education
                </h3>
                <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                  Our top-notch secondary school education emphasizes critical thinking, career readiness, digital skills, and entrepreneurship.
                </p>
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-reap-green tracking-[1px] leading-[26.35px] uppercase mb-3">
                  Health and Wellness
                </h3>
                <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                  Our students receive medical and mental health care and an interactive education in life skills topics such as sexual and reproductive health and rights, gender equity, and financial literacy. All student-facing staff, including teachers, receive trainings in providing trust-based, trauma-informed care.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-semibold text-reap-green tracking-[1px] leading-[26.35px] uppercase mb-3">
                  Life Enrichment Programs
                </h3>
                <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                  Our students participate in extracurricular athletics, arts, and science and technology programs and in student-led clubs that explore subjects from sign language to robotics. Through these activities, our young people build passion, confidence, and practical skills.
                </p>
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-reap-green tracking-[1px] leading-[26.35px] uppercase mb-3">
                  State-of-the-Art Facilities
                </h3>
                <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                  We also offer our students opportunities to explore their interests and build their career skills in our well-equipped campus facilities—including our science center makerspace; our performance amphitheater; our music recording studio; and our culinary arts, sewing, and hairdressing studios.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-200 my-[60px]" />

        {/* Core Values & Mission */}
        <div className="grid grid-cols-12 gap-x-4 mb-[60px]">
          <div className="col-span-6 pr-[6%]">
            <h2 className="text-[32px] font-semibold tracking-[1px] leading-[40px] text-reap-yellow mb-[16px] font-sans">
              Our core values
            </h2>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
              Our core values inspire all of our work, focusing our staff on the best interests of the child and helping our students to create a community dedicated to building empowered and self-reliant lives.
            </p>
          </div>
          <div className="col-span-6 pl-[6%] border-l border-gray-200">
            <h2 className="text-[32px] font-semibold tracking-[1px] leading-[40px] text-reap-yellow mb-[16px] font-sans">
              Our mission
            </h2>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
              Values shared by Rwandan and Jewish traditions are also at the heart of ASYV's mission. Just as Rwandan culture emphasizes communal responsibility and care for the vulnerable through concepts like <em>ubudehe</em> (solidarity) and <em>agaciro</em> (dignity), Jewish tradition emphasizes <em>tikkun olam</em> (repairing the world) and <em>tikkun halev</em> (healing the heart).
            </p>
          </div>
        </div>

        {/* The Plan */}
        <div className="bg-gray-50 p-12 rounded-lg text-center mt-12 mb-[60px]">
          <h2 className="text-[36px] font-semibold tracking-[1px] leading-[45px] text-reap-yellow mb-[16px] font-sans">
            The Plan
          </h2>
          <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-8 max-w-3xl mx-auto">
            Since first opening our gates, ASYV has made steady and significant progress in increasing our students' success and well-being. Our 2022–2025 strategic plan, <em>Fostering Healing, Self-Sufficiency, and Sustainability</em>, outlines how we will continue to strengthen our program's ability to provide all our students with what they need to thrive.
          </p>
          <Button variant="secondary" href="https://asyv.org/strategicplan" target="_blank">
            Read Our Strategic Plan
          </Button>
        </div>

      </main>

      {/* CTA Section */}
      <CTASection 
        title="Support Our Work" 
        description="Help us continue to empower orphaned and vulnerable youth."
        buttonText="Donate Now"
        buttonHref="https://fundraise.asyv.org/campaign/759445/donate"
      />

      <Footer />
    </div>
  );
};

export default AsyvModel;
