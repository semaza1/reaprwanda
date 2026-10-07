import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';

const Gallery = () => {
  const galleryItems = [
    { src: "/images/about-us-home.jpg", caption: "About Us" },
    { src: "/images/family.jpg", caption: "Our Family" },
    { src: "/images/history-hero.jpg", caption: "Our History" },
    { src: "/images/holistic-education.jpg", caption: "Holistic Education" },
    { src: "/images/mental-health support.jpeg", caption: "Mental Health Support" },
    { src: "/images/philosophy.jpeg", caption: "Our Philosophy" },
    { src: "/images/reap-achievement-celebration.jpg", caption: "Achievement & Celebration" },
    { src: "/images/gallery/reap-gallery/0154-SRC0270RwandaFieldStudy14061002100.jpg", caption: "Community Resilience" },
    { src: "/images/gallery/reap-gallery/0134-SRC0270RwandaFieldStudy14062014752.jpg", caption: "Field Study Initiatives" },
    { src: "/images/gallery/reap-gallery/0159-IMG_0385.jpg", caption: "Empowering Women" },
    { src: "/images/gallery/reap-gallery/0161-IMG_0662.jpg", caption: "Literacy Programs" },
    { src: "/images/gallery/reap-gallery/0127-IMG_7695.jpg", caption: "Education Enrichment" },
    { src: "/images/gallery/reap-gallery/0141-SRC0270RwandaFieldStudy14061811840.jpg", caption: "Student Engagement" },
    { src: "/images/gallery/reap-gallery/0144-SRC0270RwandaFieldStudy14061608439-1.jpg", caption: "Building Infrastructure" },
    { src: "/images/gallery/reap-gallery/0146-SRC0270RwandaFieldStudy14061608478.jpg", caption: "Rwanda Field Study" },
    { src: "/images/gallery/reap-gallery/0151-SRC0270RwandaFieldStudy14061103683.jpg", caption: "Early Childhood Development" },
    { src: "/images/gallery/reap-gallery/0121-MpsandcommunitymembersinthenewREAPCenter.jpg", caption: "REAP Center Activities" },
    { src: "/images/gallery/reap-gallery/0093-AUD_3156-scaled.jpg", caption: "Local Partnerships" },
    { src: "/images/gallery/reap-gallery/0096-DSC_0016-scaled.jpg", caption: "Joyful Learning" },
    { src: "/images/gallery/reap-gallery/0083-XTJS2200.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0087-SRC0270RwandaFieldStudy14060900252Crop.jpg", caption: "Rwanda Field Study" },
    { src: "/images/gallery/reap-gallery/0088-AUD4968-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0089-AUD_3321-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0090-AUD_3316-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0091-AUD_3314-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0092-AUD_3247-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0094-AUD_3063-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0095-DSC_0045-1-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0097-WhatsApp-Image-2022-06-06-at-1.10.38-AM-1.jpeg", caption: "Community Update" },
    { src: "/images/gallery/reap-gallery/0098-WhatsApp-Image-2022-06-06-at-1.10.37-AM-1.jpeg", caption: "Community Update" },
    { src: "/images/gallery/reap-gallery/0099-539A9585-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0100-539A9579-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0101-539A9577-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0102-539A9566-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0103-539A9560-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0104-539A9532-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0105-539A9861-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0106-539A9843-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0107-539A9818-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0108-539A9812-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0109-539A9810-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0110-539A9799-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0111-539A9792-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0112-539A9752-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0113-539A9536-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0114-539A9506-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0115-539A9463-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0116-539A9970-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0117-539A0090-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0118-539A9975-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0119-4Y4A9745-scaled.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0120-XBIG6444.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0122-MUG_7126.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0123-IMG_E0698.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0124-IMG_E07221.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0125-IMG_E0699.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0126-IMG_20181102_133632.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0128-IMG_4164.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0129-DSC_5813.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0130-DSC_5538.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0131-DSC_5708.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0132-DSC_5255.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0133-bd47156d-a8d7-45b1-b147-489fb9db2bab.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0135-SRC0270RwandaFieldStudy14061812831.jpg", caption: "Rwanda Field Study" },
    { src: "/images/gallery/reap-gallery/0136-SRC0270RwandaFieldStudy14062014932-1.jpg", caption: "Rwanda Field Study" },
    { src: "/images/gallery/reap-gallery/0137-SRC0270RwandaFieldStudy14061812424.jpg", caption: "Rwanda Field Study" },
    { src: "/images/gallery/reap-gallery/0138-SRC0270RwandaFieldStudy14061812285.jpg", caption: "Rwanda Field Study" },
    { src: "/images/gallery/reap-gallery/0139-SRC0270RwandaFieldStudy14061812036.jpg", caption: "Rwanda Field Study" },
    { src: "/images/gallery/reap-gallery/0140-SRC0270RwandaFieldStudy14061812003.jpg", caption: "Rwanda Field Study" },
    { src: "/images/gallery/reap-gallery/0142-SRC0270RwandaFieldStudy14061811529.jpg", caption: "Rwanda Field Study" },
    { src: "/images/gallery/reap-gallery/0143-SRC0270RwandaFieldStudy14061811395.jpg", caption: "Rwanda Field Study" },
    { src: "/images/gallery/reap-gallery/0145-SRC0270RwandaFieldStudy14061608439.jpg", caption: "Rwanda Field Study" },
    { src: "/images/gallery/reap-gallery/0147-SRC0270RwandaFieldStudy14061609117.jpg", caption: "Rwanda Field Study" },
    { src: "/images/gallery/reap-gallery/0148-SRC0270RwandaFieldStudy14061710564.jpg", caption: "Rwanda Field Study" },
    { src: "/images/gallery/reap-gallery/0149-SRC0270RwandaFieldStudy14061811395-1.jpg", caption: "Rwanda Field Study" },
    { src: "/images/gallery/reap-gallery/0150-SRC0270RwandaFieldStudy14061710450.jpg", caption: "Rwanda Field Study" },
    { src: "/images/gallery/reap-gallery/0152-SRC0270RwandaFieldStudy14061103483.jpg", caption: "Rwanda Field Study" },
    { src: "/images/gallery/reap-gallery/0153-SRC0270RwandaFieldStudy14061103464.jpg", caption: "Rwanda Field Study" },
    { src: "/images/gallery/reap-gallery/0155-SRC0270RwandaFieldStudy14061001622.jpg", caption: "Rwanda Field Study" },
    { src: "/images/gallery/reap-gallery/0156-ScreenShot2015-02-17at3.00.35PM.png", caption: "" },
    { src: "/images/gallery/reap-gallery/0157-IMG_1062.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0158-IMG_3621copy.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0160-IMG_0441.jpg", caption: "" },
    { src: "/images/gallery/reap-gallery/0162-IMG_0783.jpg", caption: "" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      <Navbar />

      {/* Hero Section */}
            <section className="relative h-[618px] w-full flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="../images/gallery-hero.jpg"
                        alt="Gallery"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="relative z-10 text-center w-[828px] max-w-full mx-auto px-4">
                    <h1 className="text-[63px] leading-[69.3px] font-sans font-normal text-white my-[42.21px] max-w-[828px] mx-auto whitespace-pre-wrap">
                        Gallery
                    </h1>
                    
                </div>
            </section>

      {/* Edge-to-Edge Grid Gallery Section */}
      <main className="flex-grow w-full">
        {/* Gallery section */}
        <div className='bg-white py-[50px]'>
          <SectionHeader title="View REAP Rwanda through a lens" alignment="center" className='text-reap-dark-green' />
          <p className='text-[16px] text-gray-800 mb-8 leading-[25.6px] font-sans font-light max-w-[1200px] mx-auto px-[34px] mt-[50px]'>
            Thank you for being a part of our community! Your continued support enables us to nurture and support vulnerable youth in Rwanda through education, mentorship, and care. Here are some photos capturing the joy and spirit of the children at Reap Rwanda:
            </p>
        </div>
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
          {galleryItems.map((item, index) => (
            <div key={index} className="w-full aspect-square relative group overflow-hidden bg-gray-100 cursor-pointer">
              <img 
                src={item.src} 
                alt={item.caption} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
              
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
