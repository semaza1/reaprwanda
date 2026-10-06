import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const CommunityResilience = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[618px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/community-resilience-hero.jpg" 
            alt="Community Resilience" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-center w-[828px] max-w-full mx-auto px-4">
          <h1 className="text-[63px] leading-[69.3px] font-sans font-normal text-white my-[42.21px] max-w-[828px] mx-auto whitespace-pre-wrap">
            Community Resilience
          </h1>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto px-[34px] py-[60px]">
        {/* Intro */}
        <div className="text-center mb-[60px]">
          <h3 className="text-[24px] font-light text-[#100404] leading-[36px] mb-[15px]">
            Our vision for building a thriving future reaches far beyond the Village.
          </h3>
          <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
            ASYV serves as a Center of Excellence, sharing proven aspects of our holistic, trauma-informed approach to education and career readiness with educators, young people, and institutions throughout Rwanda.
          </p>
        </div>

        {/* Teacher Trainings Section */}
        <div className="mb-[60px]">
          <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-reap-yellow mb-[16px] font-sans">
            Teacher Trainings
          </h2>
          
          <div className="grid grid-cols-12 gap-x-8 items-start">
            <div className="col-span-12 md:col-span-7 pr-4">
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
                Rwanda’s Vision 2050 prioritizes developing a national education system that equips students with the hard and soft skills they need to thrive in an increasingly technology-driven, knowledge-based economy.
              </p>
              
              <h3 className="text-[17px] font-semibold text-reap-green tracking-[1.7px] leading-[26.35px] uppercase mt-6 mb-2">
                building AI literacy skills
              </h3>
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
                ASYV is currently working in collaboration with the AI education company Day of AI to pilot a training program to help educators from across Rwanda learn AI literacy and how to ethically use AI to foster critical thinking and problem-solving skills among students. The inaugural teacher training will be held in August 2026.
              </p>

              <h3 className="text-[17px] font-semibold text-reap-green tracking-[1.7px] leading-[26.35px] uppercase mt-6 mb-2">
                sharing our holistic approach to education
              </h3>
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
                Our program with Day of AI builds on the incredible success of our Educational Resilience Program (ERP). Between 2021 and 2024, the ERP trained 500 teachers and 152 directors of studies from 171 schools across Rwanda in digital skills, student-centered teaching, and life skills concepts like sexual and reproductive health, mental health, and financial literacy. These ERP graduates went on to offer peer trainings to approximately 3,300 additional teachers—<strong>impacting nearly 123,000 students</strong>.
              </p>
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                The ERP was created in partnership with the Mastercard Foundation, the Gashora Girls Academy of Science and Technology, and the Rwandan Ministry of Education. Learn more about how the ERP trainings impacted students, educators, and schools across Rwanda in our <a href="https://drive.google.com/file/d/1-4_U-ReDVGnNuXysZm29RYHAQlJD1EJ9/view" target="_blank" rel="noreferrer" className="text-reap-green hover:underline">Impact Report</a>.
              </p>
            </div>
            
            <div className="col-span-12 md:col-span-5 mt-8 md:mt-0">
              <a href="https://drive.google.com/file/d/1-4_U-ReDVGnNuXysZm29RYHAQlJD1EJ9/view" target="_blank" rel="noreferrer" className="block relative group">
                <img src="/images/ASYV_Impact_Report_on_the_Educational_Resilience_Program_THUMB.jpg" alt="Impact Report" className="w-full h-auto object-cover rounded shadow-md group-hover:opacity-90 transition-opacity" />
                <p className="text-sm text-center mt-2 italic text-gray-600">Click to read.</p>
              </a>
            </div>
          </div>
        </div>

        {/* Teacher Quote */}
        <div className="bg-gray-50 p-10 rounded-lg mb-[60px] text-center max-w-[800px] mx-auto border-l-4 border-reap-yellow">
          <blockquote className="text-[18px] font-light text-[#100404] leading-[28.8px] mb-4 italic">
            “In my class, there was a learner who used to perform poorly in all tests, but after the training at Agahozo-Shalom Youth Village, I tried to be closer to the child and talked to her. I identified her problem. I started to help her through guidance and counseling, and now she is emotionally stable, and her performance is increasing.”
          </blockquote>
          <p className="text-[16px] font-semibold text-reap-green uppercase">
            — Tuyisenge Jackson, teacher at G.S. Matimba and ERP graduate
          </p>
        </div>

        <hr className="border-t border-gray-200 my-[60px]" />

        {/* Supporting Refugee Students */}
        <div className="mb-[60px]">
          <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-reap-yellow mb-[16px] font-sans">
            Supporting Refugee Students
          </h2>
          
          <div className="grid grid-cols-12 gap-x-8 mb-[40px] items-center">
            <div className="col-span-12 md:col-span-6 mb-6 md:mb-0">
              <img src="/images/IRIS.jpg" alt="Refugee Students" className="w-full h-auto object-cover rounded shadow-md" />
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
                Currently, over 50,000 school-aged refugees—and rising—live in Rwanda. Too often refugee students face barriers to education and academic success, despite research showing that they can achieve just as much as their peers if given the right support.
              </p>
              
              <h3 className="text-[17px] font-semibold text-reap-green tracking-[1.7px] leading-[26.35px] uppercase mt-6 mb-2">
                our Ikaze Refugee Impact Scholarship (IRIS) program
              </h3>
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
                IRIS identifies high-achieving refugee students and places them in top Rwandan secondary schools. We then provide monetary, academic, and psychosocial support throughout their secondary school journeys.
              </p>

              <h3 className="text-[17px] font-semibold text-reap-green tracking-[1.7px] leading-[26.35px] uppercase mt-6 mb-2">
                our iris scholars
              </h3>
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
                In 2025, we welcomed our inaugural group of 50 IRIS scholars. Each student was displaced from Burundi or the Democratic Republic of the Congo and living in one of Rwanda’s five refugee camps. In August 2026, we will enroll an additional 150 scholars, with plans to continue scaling the program from there. IRIS is conducted in collaboration with the Rwandan education organization Isomo and the Shapiro Foundation.
              </p>
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                Before enrolling in their new schools, IRIS scholars attend an orientation camp in the Village, where they receive mental health support and career guidance and learn English and computer skills. Below, two current IRIS scholars talk about how the program is impacting them.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg border-t-4 border-reap-yellow shadow-sm">
              <blockquote className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4 italic">
                “I am from Burundi. I have been in the Mahama camp for almost all my life. In the camp, I learned things, but we had no computer, no library. At ASYV, I met kids from Congo and Burundi, and we shared our stories. I learned that I am not alone. Now, I speak more and join others, even here at my new school. I think IRIS will make my future bright. I have hopes to become someone important, maybe a teacher or nurse.”
              </blockquote>
              <p className="text-[15px] font-semibold text-reap-green uppercase">
                — Bernice
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border-t-4 border-reap-yellow shadow-sm">
              <blockquote className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4 italic">
                “At ASYV, I learned to be responsible and think bigger. I feel I can become whoever I want, and use my education to help others and the environment. Maybe I will start a project to clean water or improve farming. If many students in the camps can be part of IRIS, we will have more leaders. We can change the mentality, show others refugees can contribute and benefit both our community and Rwanda.”
              </blockquote>
              <p className="text-[15px] font-semibold text-reap-green uppercase">
                — Dieudonné
              </p>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-200 my-[60px]" />

        {/* Center of Excellence */}
        <div className="mb-[60px]">
          <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-reap-yellow mb-[16px] font-sans">
            Center of Excellence
          </h2>
          
          <div className="grid grid-cols-12 gap-x-8 mb-[40px] items-start">
            <div className="col-span-12 md:col-span-6 mb-6 md:mb-0">
              <a href="https://drive.google.com/file/d/1DWn6L2hQ5BAcEK1zB_a4uhkpuxBOvVQw/view" target="_blank" rel="noreferrer" className="block">
                <img src="/images/TULANE.webp" alt="Tulane" className="w-full h-auto object-cover rounded shadow-md hover:opacity-90 transition-opacity" />
              </a>
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
                Since our founding, we’ve had a vision for a thriving future in which our holistic approach to education affordably and sustainably reaches young people throughout Rwanda.
              </p>
              
              <h3 className="text-[17px] font-semibold text-reap-green tracking-[1.7px] leading-[26.35px] uppercase mt-6 mb-2">
                our proven impact
              </h3>
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
                A two-year study led by faculty from Tulane University analyzed how the Village impacts our students, proving what we’ve always known from watching our young people: our model transforms futures. <a href="https://drive.google.com/file/d/1DWn6L2hQ5BAcEK1zB_a4uhkpuxBOvVQw/view" target="_blank" rel="noreferrer" className="text-reap-green hover:underline">Read more about the findings here.</a>
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg my-6 border-l-4 border-reap-yellow">
                <blockquote className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-2 italic">
                  “The findings reinforce the critical role that [ASYV’s] support systems play in breaking cycles of poverty and trauma.”
                </blockquote>
                <p className="text-[14px] font-semibold text-reap-green uppercase">
                  — Tulane University Celia Scott Weatherhead School of Public Health and Tropical Medicine
                </p>
              </div>

              <h3 className="text-[17px] font-semibold text-reap-green tracking-[1.7px] leading-[26.35px] uppercase mt-6 mb-2">
                taking that impact nationwide
              </h3>
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                Due to our incredible impact, the Tulane team recommended that ASYV train other organizations and educators by becoming a Center of Excellence. In addition to the initiatives above, we're currently developing new programs that will share our interactive life skills curriculum, our trainings for educators in trauma-informed and gender-responsive pedagogy, and more with schools, teachers, and other caretakers from across Rwanda.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-200 my-[60px]" />

        {/* Intore Learning Community */}
        <div className="mb-[60px]">
          <h3 className="text-[28px] font-semibold text-reap-yellow mb-[30px]">
            The Intore Learning Community
          </h3>
          
          <div className="grid grid-cols-12 gap-x-8 items-center mb-[40px]">
            <div className="col-span-12 md:col-span-6 mb-6 md:mb-0">
              <img src="/images/Intore_2.jpg" alt="Intore Learning Community" className="w-full h-auto object-cover rounded shadow-md" />
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
                ASYV’s Intore Learning Community (ILC), a facility located adjacent to our main campus, provides a state-of-the-art setting for conferences, workshops, and retreats. ASYV hosts our national teacher trainings and other professional workshops in the ILC.
              </p>
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                Learn more about holding your own event in the ILC <a href="/contact" className="text-reap-green hover:underline">here</a>.
              </p>
            </div>
          </div>
          
          <div className="max-w-[800px] mx-auto mt-[60px]">
            <div className="relative pb-[56.25%] h-0 overflow-hidden shadow-lg rounded-lg">
              <iframe 
                className="absolute top-0 left-0 w-full h-full" 
                src="https://www.youtube.com/embed/s20Q1FZa3ls?feature=oembed" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen 
                title="Bringing the Village to the World"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CommunityResilience;
