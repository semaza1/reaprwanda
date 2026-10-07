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
            REAP believes that the success of children — and the quality of their education — and the strength of a community depend upon each other in order to break the cycle of poverty and generate opportunities for lifelong learning.
          </h3>
          <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
            REAP’s programs target children and their parents, the Duha Complex Public School, and the surrounding communities of Duha and Akabare. By focusing on a rural area of 7,000 people, we are creating the conditions to reweave the fabric of these communities.
          </p>
        </div>

        {/* Teacher Trainings Section */}
        <div className="mb-[60px]">
          <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-reap-yellow mb-[16px] font-sans">
            Community Learning Center and Library
          </h2>
          
          <div className="grid grid-cols-12 gap-x-8 items-start">
            <div className="col-span-12 md:col-span-7 pr-4">
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
                The Community Learning Center and Library (CLCL) — close to the Duha school and at the crossroads of the village of Musha — maximizes the participation of students, parents, and the surrounding community. The center is designed as a convening place to promote community-driven homegrown solutions such as Friends of Family to deal with family conflict, Community Health Workers to increase access to health care, and the Village Kitchen to alleviate malnutrition and stunting.
              </p>
              
              <h3 className="text-[17px] font-semibold text-reap-green tracking-[1.7px] leading-[26.35px] uppercase mt-6 mb-2">
                Sustainable Agricultural Development
              </h3>
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
                Our REAP farm at the CLCL is a community vegetable and fruit garden that our REAP agronomist manages. It is a model of modern and productive farming techniques. The farm helps to create a more sustainable approach to farming by providing seedlings to community members who can readily plant them in their small plots of land to generate a quicker, healthier harvest. The farm also produces food that supplements balanced meals for the nutrition program. REAP also initiated a vegetable garden at the Duha School which supports the feeding of the students for the past six years.
              </p>

              <h3 className="text-[17px] font-semibold text-reap-green tracking-[1.7px] leading-[26.35px] uppercase mt-6 mb-2">
                Parent Evening
              </h3>
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
                This weekly three-hour meeting is an open invitation to all parents in the community. We host discussions around household issues like marital conflict, domestic violence, alcoholism, childrens’ rights, micro-savings, and circumstances that affect a family’s well-being.
              </p>
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                The community selects parent volunteers who take turns facilitating. REAP staff occassionally run workshops on skills that include effective group facilitation and community mobilization.
              </p>
            </div>
            
            <div className="col-span-12 md:col-span-5 mt-8 md:mt-0">
              <div className="block relative group">
                <img src="/images/MpsandcommunitymembersinthenewREAPCenter.jpg" alt="CLCL" className="w-full h-auto object-cover group-hover:opacity-90 transition-opacity" />
                <p className="text-sm text-center mt-2 italic text-gray-600">Community Learning Center and Library.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Teacher Quote */}
        <div className="relative bg-white p-8 rounded-xl border border-gray-100 mt-10 mb-[60px] max-w-[800px] mx-auto">
          <div className="absolute -top-5 -left-1 bg-white px-2">
            <svg className="w-12 h-12 text-[#fce8b2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <div className="border-l-[1.5px] border-[#b5e0b5] pl-6 ml-2">
            <blockquote className="text-[16px] text-gray-800 leading-relaxed mb-4">
              “By focusing on a rural area of 7,000 people, we are creating the conditions to reweave the fabric of these communities through homegrown solutions, breaking the cycle of poverty and generating opportunities for lifelong learning.”
            </blockquote>
            <p className="text-[14px] font-bold text-[#1eb53a] uppercase">
              — REAP RWANDA
            </p>
          </div>
        </div>

        <hr className="border-t border-gray-200 my-[60px]" />

        {/* Supporting Refugee Students */}
        <div className="mb-[60px]">
          <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-reap-yellow mb-[16px] font-sans">
            The SEED Project
          </h2>
          
          <div className="grid grid-cols-12 gap-x-8 mb-[40px] items-center">
            <div className="col-span-12 md:col-span-6 mb-6 md:mb-0">
              <img src="/images/539A4196-scaled.jpg" alt="The SEED Project" className="w-full h-auto object-cover" />
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
                The SEED project (Strengthening Entrepreneurship, Equity, and Dignity), supported by a start-up grant from the U.S. Embassy, reinforces the spirit of community resilience and leadership. From the ashes of an abandoned building, REAP is assisting the renovation of this site, activating a sewing cooperative, addressing the need for sustainable sanitary napkins, and raising gender equity.
              </p>
              
              <h3 className="text-[17px] font-semibold text-reap-green tracking-[1.7px] leading-[26.35px] uppercase mt-6 mb-2">
                Student Clubs Supporting Resiliency
              </h3>
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
                Our Business Leadership club helps male and female students create and run businesses and entrepreneurial projects to help generate income and prepare for life after school. The Musha Alumni Club helps high school graduates with technology, internet and employable skills at the REAP’s CLCL.
              </p>

              <h3 className="text-[17px] font-semibold text-reap-green tracking-[1.7px] leading-[26.35px] uppercase mt-6 mb-2">
                Micro-savings & Community Service
              </h3>
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
                Grassroots Micro-savings Groups increase savings and provide loans for food, cattle, clothes and health insurance to strengthen economic and social wellbeing. Parents and students who participate in REAP’s programs partake in monthly Umuganda activities (a practice from Rwandan culture of self-help and cooperation) at both the CLCL and Ihuriro Community Center.
              </p>
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                REAP, in partnership with local Rwandan government representatives, has formed a community board of 12 volunteer members and Duha School teachers. The board meets at least twice a month at the CLCL and reports to REAP and the government.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto pt-8">
            <div className="relative bg-white p-8 rounded-xl border border-gray-100">
              <div className="absolute -top-5 -left-1 bg-white px-2">
                <svg className="w-12 h-12 text-[#fce8b2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="border-l-[1.5px] border-[#b5e0b5] pl-6 ml-2">
                <blockquote className="text-[16px] text-gray-800 leading-relaxed mb-4">
                  “The SEED program includes five integrative components sequenced over three years, including a Sexual and Reproductive Health Education Community Campaign led by our two student clubs from Duha Complex School.”
                </blockquote>
                <p className="text-[14px] font-bold text-[#1eb53a] uppercase">
                  — SEED PROJECT INITIATIVE
                </p>
              </div>
            </div>
            
            <div className="relative bg-white p-8 rounded-xl border border-gray-100">
              <div className="absolute -top-5 -left-1 bg-white px-2">
                <svg className="w-12 h-12 text-[#fce8b2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="border-l-[1.5px] border-[#b5e0b5] pl-6 ml-2">
                <blockquote className="text-[16px] text-gray-800 leading-relaxed mb-4">
                  “It includes the production of sustainable sanitary napkins, the formation of 'INEZIGABA', a community sewing cooperative, and the creation of a tailoring vocational training school for unemployed high school graduates.”
                </blockquote>
                <p className="text-[14px] font-bold text-[#1eb53a] uppercase">
                  — COMMUNITY DEVELOPMENT
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-200 my-[60px]" />

        {/* Center of Excellence */}
        <div className="mb-[60px]">
          <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-reap-yellow mb-[16px] font-sans">
            Student Clubs Supporting Girls
          </h2>
          
          <div className="grid grid-cols-12 gap-x-8 mb-[40px] items-start">
            <div className="col-span-12 md:col-span-6 mb-6 md:mb-0">
              <div className="block">
                <img src="/images/539A9463-scaled.jpg" alt="Student Clubs Supporting Girls" className="w-full h-auto object-cover  hover:opacity-90 transition-opacity" />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
                REAP recognizes the obstacles Rwandan girls face and strives to build their leadership skills. In that regard, REAP offers several programs, including Girl Guides, which teaches entrepreneurial and leadership skills. Girl guides raise and sell piglets to move toward financial independence and to develop business skills.
              </p>
              
              <h3 className="text-[17px] font-semibold text-reap-green tracking-[1.7px] leading-[26.35px] uppercase mt-6 mb-2">
                Basketball & Tuseme Club
              </h3>
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
                In 2017, REAP and Duha Complex School came together to make the students’ dreams a reality by installing a basketball court at the school. In 2019, the Duha Girls’ Basketball Team placed first in the Rwamagana District. The Tuseme “Let’s speak out” Club comprises boys and girls who uses drama and theater to speak out, raise awareness and address issues hindering girls social and academic success.
              </p>
              
              <div className="relative bg-white p-8 rounded-xl border border-gray-100 mt-10 mb-6">
                <div className="absolute -top-5 -left-1 bg-white px-2">
                  <svg className="w-12 h-12 text-[#fce8b2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="border-l-[1.5px] border-[#b5e0b5] pl-6 ml-2">
                  <blockquote className="text-[16px] text-gray-800 leading-relaxed mb-4">
                    “With a holistic approach to physical and mental health, the program supports girls as they come to explore themselves and their community.”
                  </blockquote>
                  <p className="text-[14px] font-bold text-[#1eb53a] uppercase">
                    — G.L.O.W. MENTORSHIP PROGRAM
                  </p>
                </div>
              </div>

              <h3 className="text-[17px] font-semibold text-reap-green tracking-[1.7px] leading-[26.35px] uppercase mt-6 mb-2">
                Girls Leading Our World (G.L.O.W)
              </h3>
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                In collaboration with Ready for Reading, Global G.L.O.W and LitWorld, INEZA Community Learning Center and Library is home to a mentorship program for girls. Training and programs deepen self-esteem, foster self-advocacy, and increase access to economic opportunity through technolical and financial literacy.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-200 my-[60px]" />

        {/* Intore Learning Community */}
        <div className="mb-[60px]">
          <h3 className="text-[28px] font-semibold text-reap-yellow mb-[30px]">
            Public Health Campaigns & Healthcare
          </h3>
          
          <div className="grid grid-cols-12 gap-x-8 items-center mb-[40px]">
            <div className="col-span-12 md:col-span-6 mb-6 md:mb-0">
              <img src="/images/539A9532-scaled.jpg" alt="Public Health Campaigns" className="w-full h-auto object-cover" />
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
                REAP recognizes and addresses the myriad socio-economic factors that have an impact on community-members’ well being. REAP engages the community in sexual and reproductive health campaigns through student clubs.
              </p>
              <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                To reduce maternal and under-five mortality rates, REAP, in partnership with Musha Health Center, conducts programs for mothers with children aged 0 to 6 and pregnant women for prenatal and early childhood health care. Collaboration between the Rwamagana School of Nursing and REAP allows nurse interns to go into the community to visit homes in order to teach families nutrition practices.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CommunityResilience;
