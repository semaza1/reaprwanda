import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import SectionHeader from '../../components/SectionHeader';

const Philosopy = () => {
    return (
        <div className="bg-reap-bg min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[618px] w-full flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="../images/philosophy.jpeg"
                        alt="Students at Agahozo-Shalom Youth Village"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="relative z-10 text-center w-[828px] max-w-full mx-auto px-4">
                    <h1 className="text-[63px] leading-[69.3px] font-sans font-normal text-white my-[42.21px] max-w-[828px] mx-auto whitespace-pre-wrap">
                        Mission, Vision and REAP Goals
                    </h1>
                </div>
            </section>

            {/* Vision and mission */}
            <section className="py-[100px]">
                <div className="max-w-[1200px] mx-auto px-[34px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className='border-r border-gray-200 pr-8'>
                            <SectionHeader title="Mission" alignment="left" className="mb-6" />
                            <p className="text-[16px] text-gray-800 mb-8 leading-[25.6px] font-sans font-light">
                                Creating an integrated and innovative approach to education and community development that improves literacy rates and fosters socio-economic well-being with the active support and leadership of the community.
                            </p>
                        </div>
                        <div className='self-start'>
                            <SectionHeader title="Vision" alignment="left" className="mb-6" />
                            <p className="text-[16px] text-gray-800 mb-8 leading-[25.6px] font-sans font-light">
                                Striving for a strong and vibrant Musha Sector community where everyone is empowered with meaningful opportunities to thrive, united by a shared spirit of hope, trust, and inspiration.
                            </p>
                        </div>
                    </div>
                    <hr className="border-t border-gray-200 my-[60px]" />
                    {/* Goals Section */}
                    <div className="my-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <SectionHeader title="Holistic Education for Community Growth" alignment="left" className="mb-6" />
                                <p className="text-[16px] text-gray-800 mb-8 leading-[25.6px] font-sans font-light">
                                    We believe that education extends beyond textbooks and classrooms. REAP nurtures the whole person—intellectually, emotionally, and socially. By integrating academic support, life skills training, and community engagement, we empower youth to become confident, compassionate, and capable leaders.
                                </p>
                            </div>
                            <div className="relative">
                                <img src="/images/holistic-education.jpg" alt="Students in class" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </div>

                    <hr className="border-t border-gray-200 my-[60px]" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        
                        <div className="relative">
                            <img src="/images/about-us-home.jpg" alt="Students in class" className="w-full h-auto object-cover" />
                        </div>

                        <div className="self-start" >
                            <SectionHeader title="REAP Goals" alignment="left" className="mb-6" />
                            <ul className="text-[16px] text-gray-800 mb-8 leading-[25.6px] font-sans font-light">
                                <li className='flex gap-4'>
                                    <span className='text-reap-green'>&#10004;</span>
                                    <span className='mb-2'>Enhance primary and secondary students' academic performance and social-emotional development, focusing on literacy, public speaking, technology, leadership, and entrepreneurial skills.</span>
                                </li>
                                <li className='flex gap-4'>
                                    <span className='text-reap-green'>&#10004;</span>
                                    <span className='mb-2'>Strengthen community by supporting adult literacy and leadership, gender equality, and inter-generational learning</span>
                                </li>
                                <li className='flex gap-4'>
                                    <span className='text-reap-green'>&#10004;</span>
                                    <span className='mb-2'>Advance community health and wellness through initiatives spanning prenatal and early childhood nutrition, sustainable agriculture, hygiene, disease prevention, and reproductive health education.</span>
                                </li>
                                <li className='flex gap-4'>
                                    <span className='text-reap-green'>&#10004;</span>
                                    <span className='mb-2'>Cultivate collaborative learning spaces that empower individuals to engage meaningfully, championing mutual dignity and equality for all.</span>
                                </li>
                                <li className='flex gap-4'>
                                    <span className='text-reap-green'>&#10004;</span>
                                    <span className='mb-2'>Fuel economic growth and self-reliance by implementing community-led income generation and employment initiatives through local cooperatives.</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Philosopy;