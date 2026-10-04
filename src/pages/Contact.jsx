import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
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
    setFormData({ name: '', email: '', subject: '', message: '' });
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

      <main className="flex-grow max-w-[1200px] mx-auto px-6 py-[80px] w-full">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Information */}
          <div className="lg:w-1/3">
            <h2 className="text-[32px] font-semibold text-reap-green mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[18px] font-bold text-[#100404] mb-2 uppercase tracking-wide">Rwanda Office</h3>
                <p className="text-[16px] font-light text-[#100404] leading-relaxed">
                  REAP Rwanda<br />
                  Kigali, Rwanda<br />
                  KN 5 Rd
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-bold text-[#100404] mb-2 uppercase tracking-wide">Email Us</h3>
                <p className="text-[16px] font-light text-[#100404] leading-relaxed">
                  <a href="mailto:info@reaprwanda.org" className="hover:text-reap-yellow transition-colors">info@reaprwanda.org</a>
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-bold text-[#100404] mb-2 uppercase tracking-wide">Call Us</h3>
                <p className="text-[16px] font-light text-[#100404] leading-relaxed">
                  +250 788 123 456
                </p>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-[18px] font-bold text-[#100404] mb-4 uppercase tracking-wide">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-reap-dark-green text-white flex items-center justify-center hover:bg-opacity-80 transition-all">
                    {/* Facebook Icon Placeholder */}
                    <span className="font-bold">F</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-reap-dark-green text-white flex items-center justify-center hover:bg-opacity-80 transition-all">
                    {/* Twitter Icon Placeholder */}
                    <span className="font-bold">X</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-reap-dark-green text-white flex items-center justify-center hover:bg-opacity-80 transition-all">
                    {/* Instagram Icon Placeholder */}
                    <span className="font-bold">I</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-gray-50 p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-[32px] font-semibold text-reap-yellow mb-2">Send us a message</h2>
            <p className="text-[16px] font-light text-[#100404] mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-[14px] font-semibold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-reap-green focus:border-transparent transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-[14px] font-semibold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-reap-green focus:border-transparent transition-all"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject" className="text-[14px] font-semibold text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-reap-green focus:border-transparent transition-all"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-[14px] font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-reap-green focus:border-transparent transition-all resize-y"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full md:w-auto px-10 py-4 bg-reap-dark-green text-white font-semibold text-[16px] uppercase tracking-wider hover:bg-opacity-90 transition-all rounded-md shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
