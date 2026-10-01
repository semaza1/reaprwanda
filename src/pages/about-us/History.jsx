import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SectionHeader from '../../components/SectionHeader';

const History = () => {
    return (
        <div className="bg-reap-bg min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[618px] w-full flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="../images/history-hero.jpg"
                        alt="History of REAP Rwanda"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="relative z-10 text-center w-[828px] max-w-full mx-auto px-4">
                    <h1 className="text-[63px] leading-[69.3px] font-sans font-normal text-white my-[42.21px] max-w-[828px] mx-auto whitespace-pre-wrap">
                        History of Rwanda Education Assistance Project
                    </h1>
                </div>
            </section>


            {/* history section */}
            <section className="py-[100px]">
                <div className="max-w-[1200px] mx-auto px-[34px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className='self-start'>
                            <img src="../images/history.jpg" alt="" className='w-full h-full object-cover object-center' />
                        </div>
                        <div className='self-start'>
                            <SectionHeader title="Our Journey" alignment="left" className="mb-6" />
                            <p className="text-[16px] text-gray-800 mb-8 leading-[25.6px] font-sans font-light">
                                In 2006, REAP founder Edward Ballen and his daughter Rachel journeyed to Rwanda to volunteer at the Hameau des Jeunes orphanage. Founded by Father Hermann in 1974, the orphanage is a vibrant home to approximately 110 children, close to the shores of Lake Muhazi in the Eastern Province of Rwanda. It is a flourishing center of activity with equipment for trade skills training, a food distribution program, and a nearby public school, all of which contribute to its vital community presence
                            </p>
                            <p className="text-[16px] text-gray-800 mb-8 leading-[25.6px] font-sans font-light">
                                The orphanage students’ deep desire to learn and further their education inspired the formation of the Rwanda Education Assistance Project (REAP) in the spring of 2008. The acronym—REAP—captures our core commitment: to support each child as they harvest their potential in the face of multiple challenges, including poverty, HIV, and post-genocide trauma. Because the children from Hameau des Jeunes attend the Duha Complex School, REAP chose this site to begin its work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
};

export default History;