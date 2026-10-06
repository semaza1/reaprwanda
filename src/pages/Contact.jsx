import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for reaching out! Your message has been sent successfully.');
    setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[618px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="../images/hero-home.jpeg"
            alt="Get in Touch"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-center w-[828px] max-w-full mx-auto px-4">
          <h1 className="text-[63px] leading-[69.3px] font-sans font-normal text-white my-[42.21px] max-w-[828px] mx-auto whitespace-pre-wrap">
            Get in Touch
          </h1>
          <p className="text-white text-[18px] md:text-[22px] font-light max-w-[600px] mx-auto mt-4">
            We’d love to hear from you. Whether you have a question about our programs, ways to partner, or how to support our mission, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      <main className="flex-grow bg-reap-bg py-[80px] w-full">
        <div className="max-w-[1200px] mx-auto px-[34px]">
          
          <div className="max-w-[900px] mb-[80px]">
            <p className="text-[18px] text-[#100404] leading-[28.8px] font-light">
              Have a question, interested in getting involved, or want more information? We would love to talk with you. Please enter your contact details below and we will be in touch as soon as possible.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Name */}
                <div>
                  <label className="text-[16px] text-[#100404] mb-2 block">Name</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="firstName" className="text-[12px] text-gray-500 mb-1">First Name <span className="text-gray-400">(required)</span></label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="px-3 py-2 border border-gray-400 bg-transparent focus:outline-none focus:border-reap-green focus:ring-1 focus:ring-reap-green transition-all rounded-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="lastName" className="text-[12px] text-gray-500 mb-1">Last Name <span className="text-gray-400">(required)</span></label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="px-3 py-2 border border-gray-400 bg-transparent focus:outline-none focus:border-reap-green focus:ring-1 focus:ring-reap-green transition-all rounded-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-[16px] text-[#100404] mb-1">Email Address <span className="text-gray-500 text-[12px] ml-1">(required)</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-3 py-2 border border-gray-400 bg-transparent focus:outline-none focus:border-reap-green focus:ring-1 focus:ring-reap-green transition-all rounded-none"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-[16px] text-[#100404] mb-1">Subject <span className="text-gray-500 text-[12px] ml-1">(required)</span></label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="px-3 py-2 border border-gray-400 bg-transparent focus:outline-none focus:border-reap-green focus:ring-1 focus:ring-reap-green transition-all rounded-none"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-[16px] text-[#100404] mb-1">Message <span className="text-gray-500 text-[12px] ml-1">(required)</span></label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="px-3 py-2 border border-gray-400 bg-transparent focus:outline-none focus:border-reap-green focus:ring-1 focus:ring-reap-green transition-all resize-y rounded-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    className="px-10 py-3 border-[1.5px] border-reap-green text-reap-green font-semibold text-[15px] rounded-[50px] hover:bg-reap-green hover:text-white transition-all bg-transparent"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Address & Map */}
            <div className="lg:w-1/3">
              <div className="mb-8">
                <h2 className="text-[18px] font-semibold text-reap-green uppercase tracking-widest mb-6">
                  OUR ADDRESS
                </h2>
                <div className="text-[16px] font-light text-[#100404] leading-[25.6px]">
                  <p>Rwanda Education Assistance Project</p>
                  <p>P.O. Box 90</p>
                  <p>Rwamagana, Musha, Rwanda</p>
                </div>
              </div>
              
              <div className="w-full h-[350px] bg-gray-200 overflow-hidden relative">
                 <iframe 
                    title="Map of Musha, Rwanda"
                    src="https://maps.google.com/maps?q=Musha,+Rwamagana,+Rwanda&t=&z=12&ie=UTF8&iwloc=&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                 ></iframe>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
