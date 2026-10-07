import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import { teamMembers } from '../../data/the-teamData';

// Reusable table component for the Board of Directors view
const BoardTable = ({ title, members }) => (
    <div className="mb-8">
        {title && <h3 className="text-[16px] font-bold text-[#100404] mb-4">{title}</h3>}
        <div className="border border-gray-200 rounded-sm overflow-hidden bg-white">
            {members.map((member, i) => (
                <div key={i} className={`flex border-b border-gray-200 last:border-b-0`}>
                    <div className="w-1/2 p-2 border-r border-gray-200 text-[14px] text-gray-700">{member.lastName}</div>
                    <div className="w-1/2 p-2 text-[14px] text-gray-700">{member.firstName}</div>
                </div>
            ))}
        </div>
    </div>
);

const Team = () => {
    const [activeTab, setActiveTab] = useState('staff'); // 'staff' or 'board'
    const [selectedMember, setSelectedMember] = useState(null);

    return (
        <div className="bg-reap-bg min-h-screen font-sans flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center mt-[80px]">
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
                    <h1 className="text-[50px] md:text-[63px] leading-[1.1] font-sans font-normal text-white my-[40px] max-w-[828px] mx-auto whitespace-pre-wrap">
                        Our Team
                    </h1>
                </div>
            </section>

            {/* Team Layout */}
            <main className="flex-grow py-[80px] bg-white">
                <div className="max-w-[1200px] mx-auto px-[34px] flex flex-col md:flex-row gap-12">
                    
                    {/* Sidebar Tabs */}
                    <div className="w-full md:w-[300px] flex-shrink-0 flex flex-col gap-4">
                        <button 
                            onClick={() => setActiveTab('staff')}
                            className={`w-full text-left px-6 py-4 bg-white border ${activeTab === 'staff' ? 'border-reap-green shadow-md text-reap-green' : 'border-gray-200 text-gray-600 hover:bg-gray-50'} font-semibold text-[16px] transition-all flex justify-between items-center`}
                        >
                            <span>+ REAP Staff</span>
                            {activeTab === 'staff' && (
                                <span className="text-reap-green">
                                    <svg className="w-4 h-4 -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            )}
                        </button>
                        
                        <button 
                            onClick={() => setActiveTab('board')}
                            className={`w-full text-left px-6 py-4 bg-white border ${activeTab === 'board' ? 'border-reap-green shadow-md text-reap-green' : 'border-gray-200 text-gray-600 hover:bg-gray-50'} font-semibold text-[16px] transition-all flex justify-between items-center`}
                        >
                            <span>+ Board of Directors</span>
                            {activeTab === 'board' && (
                                <span className="text-reap-green">
                                    <svg className="w-4 h-4 -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Main Content Area */}
                    <div className="w-full">
                        {activeTab === 'staff' ? (
                            /* REAP Staff Grid (Round Images, Name, Title, Bio) */
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 pt-4">
                                {teamMembers.map((member, index) => (
                                    <div key={index} className="flex flex-col items-center text-center group">
                                        <div className="w-48 h-48 mb-6 overflow-hidden rounded-full shadow-lg border-4 border-gray-50">
                                            <img 
                                                src={member.image} 
                                                alt={member.name} 
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <h3 className="text-[20px] font-semibold text-reap-green mb-1">{member.name}</h3>
                                        <p className="text-[12px] font-bold text-reap-yellow mb-4 uppercase tracking-wide">{member.role}</p>
                                        <button 
                                            onClick={() => setSelectedMember(member)}
                                            className="text-[14px] font-medium text-reap-green hover:text-reap-yellow transition-colors underline"
                                        >
                                            Read More
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            /* Board of Directors Tables */
                            <div className="pt-4">
                                <h2 className="text-[32px] font-semibold text-reap-yellow text-center mb-12">
                                    Rwanda Board Of Directors
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {/* Column 1: The General Assembly */}
                                    <div>
                                        <h3 className="text-[18px] font-bold text-[#100404] mb-6 text-center">The General Assembly</h3>
                                        
                                        <div className="space-y-6">
                                            <BoardTable members={[
                                                { lastName: "MUTABAZI", firstName: "Geoffrey" },
                                                { lastName: "TUYISENGE", firstName: "Antoine" },
                                                { lastName: "BALLEN", firstName: "Edward" },
                                                { lastName: "KAYITARE Abraham", firstName: "Bruce" },
                                                { lastName: "NTEZIYAREMYE", firstName: "Eugene" }
                                            ]} />

                                            <BoardTable members={[
                                                { lastName: "RWABUKAMBA", firstName: "Muhoza" },
                                                { lastName: "NASH GOVAN", firstName: "Annette" },
                                                { lastName: "UWIMANA", firstName: "Clotilde" },
                                                { lastName: "NKURUNZIZA", firstName: "Alexia" },
                                                { lastName: "MUTATSINEZA", firstName: "Jean Paulin" }
                                            ]} />

                                            <BoardTable members={[
                                                { lastName: "RWIZIGURA", firstName: "Samson" },
                                                { lastName: "MUKANYANDWI", firstName: "Brigitte" },
                                                { lastName: "MUGEMANYI", firstName: "Bonaventure" },
                                                { lastName: "MUSABENDE", firstName: "Francoise" },
                                                { lastName: "NIYONSHUTI", firstName: "Jean Paul" }
                                            ]} />

                                            <BoardTable members={[
                                                { lastName: "NSEKANABO", firstName: "Denys" },
                                                { lastName: "KANYAMIBWA", firstName: "Felicien" },
                                                { lastName: "KAYITESI", firstName: "Annonciata" },
                                                { lastName: "HABAKURAMA", firstName: "Bosco" },
                                                { lastName: "MUTAGANZWA", firstName: "Muhoza Liane" },
                                                { lastName: "GASHIRABAKE", firstName: "Theogene" },
                                                { lastName: "HABUMUREMYI", firstName: "Eric" }
                                            ]} />
                                        </div>
                                    </div>

                                    {/* Column 2: The Executive Council */}
                                    <div>
                                        <h3 className="text-[18px] font-bold text-[#100404] mb-6 text-center">The Executive Council</h3>
                                        
                                        <BoardTable title="President /Legal Representative" members={[
                                            { lastName: "MUTABAZI", firstName: "Geoffrey" }
                                        ]} />

                                        <BoardTable title="Vise President /Deputy" members={[
                                            { lastName: "MUKANYANDWI", firstName: "Brigitte" }
                                        ]} />

                                        <BoardTable title="Advisors" members={[
                                            { lastName: "BALLEN", firstName: "Edward" },
                                            { lastName: "MUTAGANZWA", firstName: "Muhoza Liane" },
                                            { lastName: "UWIMANA", firstName: "Clotilde" }
                                        ]} />

                                        <BoardTable title="Sectretary" members={[
                                            { lastName: "KAYITARE Abraham", firstName: "Bruce" }
                                        ]} />

                                        <BoardTable title="Treasurer" members={[
                                            { lastName: "TUYISENGE", firstName: "Antoine" }
                                        ]} />
                                    </div>

                                    {/* Column 3: Various Boards */}
                                    <div>
                                        <h3 className="text-[18px] font-bold text-[#100404] mb-6 text-center">The Board of Auditors</h3>
                                        
                                        <BoardTable members={[
                                            { lastName: "RWABUKAMBA", firstName: "Muhoza" },
                                            { lastName: "NASH GOVAN", firstName: "Annette" }
                                        ]} />

                                        <h3 className="text-[18px] font-bold text-[#100404] mt-10 mb-6 text-center">The Board of Conflict Resolution</h3>
                                        
                                        <BoardTable members={[
                                            { lastName: "UWIMANA", firstName: "Clotilde" },
                                            { lastName: "NKURUNZIZA", firstName: "Alexia" }
                                        ]} />

                                        <h3 className="text-[18px] font-bold text-[#100404] mt-10 mb-6 text-center">Executive Secretariat</h3>
                                        
                                        <BoardTable members={[
                                            { lastName: "MUTATSINEZA", firstName: "Jean Paulin" }
                                        ]} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </main>

            {/* Bio Modal */}
            {selectedMember && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60" onClick={() => setSelectedMember(null)}>
                    <div 
                        className="bg-white rounded-lg p-8 max-w-2xl w-full relative shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setSelectedMember(null)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl leading-none"
                        >
                            &times;
                        </button>
                        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                            <div className="w-32 h-32 flex-shrink-0 rounded-full overflow-hidden border-2 border-gray-100">
                                <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="text-left flex-1">
                                <h3 className="text-[24px] font-semibold text-reap-green mb-1">{selectedMember.name}</h3>
                                <p className="text-[16px] font-bold text-reap-yellow mb-4 uppercase tracking-wide">{selectedMember.role}</p>
                                <p className="text-[16px] font-light text-[#100404] leading-relaxed text-justify">
                                    {selectedMember.bio}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Team;