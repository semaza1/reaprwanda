import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import CTASection from '../../components/CTASection';

const EducationEnrichment = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[618px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/education-enrichment-hero.jpg" 
            alt="Students at Agahozo-Shalom Youth Village" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-center w-[828px] max-w-full mx-auto px-4">
          <h1 className="text-[63px] leading-[69.3px] font-sans font-normal text-white my-[42.21px] max-w-[828px] mx-auto whitespace-pre-wrap">
            Education Enrichment
          </h1>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto px-[34px] py-[60px]">
        {/* Intro */}
        <div className="grid grid-cols-12 gap-x-4 mb-[60px]">
          <div className="col-start-3 col-span-8 text-center">
            <p className="text-[18px] font-light text-[#100404] leading-[28px] mb-6">
             At REAP-Rwanda, we believe that education is the key to unlocking the potential of every child. Our Education Enrichment program is designed to provide Rwandan youth with access to quality education and the resources they need to succeed. 
            </p>
          </div>
        </div>

        {/* Thriving Futures */}
        <div className="grid grid-cols-12 gap-x-4 mb-[60px] items-center">
          <div className="col-span-6 pr-[6%]">
            <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-reap-yellow mb-[16px] font-sans">
              Empowering Communities, Shaping Futures
            </h2>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
              REAP’s Ineza Library provides access to over 5,000 English and Kinyarwanda books while supporting children and adults through reading and literacy programs. Through its Mobile Library Project, REAP extends these opportunities into the Musha community, bringing Kinyarwanda books and guided reading activities directly to children in local schools and communities.
            </p>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
              At Duha School, REAP’s long-standing relationship with the school and community continues to shape its future. In addition to ongoing support for the school’s feeding program, REAP is now leading an initiative to enhance early childhood education. By incorporating play-based learning and providing additional materials, we aim to strengthen foundational skills and prepare young children for long-term success.
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

        {/* Our Approach */}
        <div className="mb-[60px]">
          <div className="text-center mb-12">
            <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-reap-yellow mb-[16px] font-sans">
              REAP’s Impact
            </h2>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] max-w-3xl mx-auto">
              All aspects of REAP’s work are designed to strengthen learning, nurture potential, and help children, families, and communities build brighter futures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-semibold text-reap-green tracking-[1px] leading-[26.35px] uppercase mb-3">
                  Library
                </h3>
                <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                  REAP’s Ineza Library provides access to over 5,000 English and Kinyarwanda books while supporting children and adults through reading and literacy programs. Through its Mobile Library Project, REAP extends these opportunities into the Musha community, bringing Kinyarwanda books and guided reading activities directly to children in local schools and communities.
                </p>
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-reap-green tracking-[1px] leading-[26.35px] uppercase mb-3">
                  INEZA Academy
                </h3>
                <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                  INEZA Academy provides young children with quality, play-based early education that supports their development while engaging parents in positive parenting, nutrition, and early literacy. Through its partnership with Groupe Scolaire Nyina wa Jambo Ruhita, REAP also creates a pathway for graduates to continue their education in a strong learning environment.
                </p>
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-reap-green tracking-[1px] leading-[26.35px] uppercase mb-3">
                  Primary School Teacher's Lunch
                </h3>
                <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                  REAP provides daily nutritious lunches to 34 primary school teachers at Duha School Complex, supporting their wellbeing and morale during long teaching days. The program helps educators stay energized and focused as they support their students.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-semibold text-reap-green tracking-[1px] leading-[26.35px] uppercase mb-3">
                  Technology Integration and Digital Literacy
                </h3>
                <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                  REAP equips students and teachers with digital skills through a technology lab featuring laptops, iPads, tablets, and Internet access. Students use technology for research, presentations, and learning, while access to digital stories in Kinyarwanda and English strengthens literacy and expands educational resources.
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
              Literacy
            </h2>
            <h3 className="text-[16px] font-semibold tracking-[1px] leading-[40px] text-reap-green mb-[16px] font-sans">
              –&nbsp;The Fran Bowman Multisensory Reading Program
            </h3>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
              REAP uses innovative, technology-based reading and English programs to strengthen students’ literacy skills. Through interactive learning and ESL support, students improve their reading, listening, and speaking abilities, helping them engage more effectively with their studies and prepare for national exams.
            </p>
            <h3 className="text-[16px] font-semibold tracking-[1px] leading-[40px] text-reap-green mb-[16px] font-sans">
              –&nbsp;Soma Umenye (Read and Understand Kinyarwanda)
            </h3>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
              REAP supports struggling students in Grades 1–3 at Duha Complex School through targeted Kinyarwanda reading and writing instruction. Trained instructors help students strengthen their literacy skills and reach their grade-level learning goals.
            </p>
            <h3 className="text-[16px] font-semibold tracking-[1px] leading-[40px] text-reap-green mb-[16px] font-sans">
              –&nbsp;Local Stories and Proverbs
            </h3>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
              REAP promotes Rwanda’s cultural heritage through bilingual books, folktales, proverbs, and stories rooted in local traditions. By documenting and sharing indigenous knowledge, REAP helps preserve Rwanda’s rich oral storytelling tradition for future generations.
            </p>
            <h3 className="text-[16px] font-semibold tracking-[1px] leading-[40px] text-reap-green mb-[16px] font-sans">
              –&nbsp;Adult Literacy
            </h3>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
              REAP empowers adults with practical literacy, financial literacy, and English language skills through community-based training programs. These programs help participants strengthen their everyday knowledge and improve their readiness for employment opportunities in Rwanda.
            </p>
          </div>
          <div className="col-span-6 pl-[6%] border-l border-gray-200">
            <h2 className="text-[32px] font-semibold tracking-[1px] leading-[40px] text-reap-yellow mb-[16px] font-sans">
              Student Clubs Supporting Education
            </h2>
            <h3 className="text-[16px] font-semibold tracking-[1px] leading-[40px] text-reap-green mb-[16px] font-sans">
              –&nbsp;Debate club
            </h3>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
              Students engage in critical thinking, research, and public speaking, developing their communication skills and learning to express their ideas confidently and respectfully.
            </p>
            <h3 className="text-[16px] font-semibold tracking-[1px] leading-[40px] text-reap-green mb-[16px] font-sans">
              –&nbsp;Musha Alumni Club
            </h3>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
              Musha Alumni Club is a gathering of REAP alumni who support each other’s personal and professional development. Through various activities and projects, the club promotes lifelong learning and community engagement.
            </p>
            <h2 className="text-[32px] font-semibold tracking-[1px] leading-[40px] text-reap-yellow mb-[16px] font-sans">
              High school advancement and scholarships
            </h2>
            <h3 className="text-[16px] font-semibold tracking-[1px] leading-[40px] text-reap-green mb-[16px] font-sans">
              –&nbsp;High school scholarships
            </h3>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
              Provides scholarships to students from low-income families who pass the national exams, enabling them to attend schools of excellence and access greater opportunities for higher education and future employment.
            </p>
            <h3 className="text-[16px] font-semibold tracking-[1px] leading-[40px] text-reap-green mb-[16px] font-sans">
              –&nbsp;Saturday school for national exams
            </h3>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
              Provides Grade 9 students in day schools with additional academic support to strengthen their understanding of course material and develop effective exam-taking skills, increasing their chances of passing national exams and accessing schools of excellence.
            </p>
          </div>
        </div>

      </main>

      {/* CTA Section */}
      <CTASection 
        title="Support Our Work" 
        description="Help us give more children the opportunity to learn, grow, and build brighter futures."
        buttonText="Donate Now"
        buttonHref="/donate"
      />

      <Footer />
    </div>
  );
};

export default EducationEnrichment;
