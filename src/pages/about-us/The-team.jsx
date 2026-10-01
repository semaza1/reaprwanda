import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SectionHeader from '../../components/SectionHeader';

const teamMembers = [
    {
        name: "Edward Ballen",
        role: "Founder",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
        bio: "Edward founded REAP after his journey to Rwanda in 2006, inspired by the children's deep desire to learn."
    },
    {
        name: "Rachel Ballen",
        role: "Co-Founder",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400",
        bio: "Rachel journeyed to Rwanda with Edward in 2006, helping to plant the seeds that would become REAP."
    },
    {
        name: "Jane Doe",
        role: "Board Member",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
        bio: "A dedicated professional bringing years of experience to support REAP's educational initiatives."
    },
    {
        name: "John Smith",
        role: "Director of Operations",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
        bio: "Passionate about creating opportunities for the youth in Rwanda through holistic education."
    },
    {
        name: "Sarah Jenkins",
        role: "Educational Coordinator",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
        bio: "Working closely with local schools to ensure sustainable educational practices and support."
    },
    {
        name: "Michael Chen",
        role: "Community Outreach",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
        bio: "Fostering strong relationships between REAP and the local communities we serve in Rwanda."
    }
];

const Team = () => {
    return (
        <div className="bg-reap-bg min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[618px] w-full flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="../images/team-hero.jpg"
                        alt="Team of REAP Rwanda"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="relative z-10 text-center w-[828px] max-w-full mx-auto px-4">
                    <h1 className="text-[63px] leading-[69.3px] font-sans font-normal text-white my-[42.21px] max-w-[828px] mx-auto whitespace-pre-wrap">
                        Meet our dedicated team
                    </h1>
                </div>
            </section>


            {/* Team section */}
            <section className="py-[100px]">
                <div className="max-w-[1200px] mx-auto px-[34px]">
                    <SectionHeader 
                        title="Board of Directors & Staff" 
                        alignment="center" 
                        className="mb-16"
                    />
                    
                    
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Team;