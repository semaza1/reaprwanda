import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Financials = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[618px] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/P1370380.JPG" 
            alt="Financials" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-center w-[828px] max-w-full mx-auto px-4">
          <h1 className="text-[63px] leading-[69.3px] font-sans font-normal text-white my-[42.21px] max-w-[828px] mx-auto whitespace-pre-wrap">
            Financials
          </h1>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto px-[34px] py-[60px]">
        {/* Intro */}
        <div className="mb-[60px]">
          <h2 className="text-[47px] font-semibold tracking-[1.41px] leading-[56.4px] text-reap-yellow mb-[16px] font-sans">
            Delivering on our goals
          </h2>
          <div className="max-w-[800px]">
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
              The Agahozo-Shalom Youth Village lives its values in everything we do, including integrity in our fiscal reporting. We pride ourselves as a best-in-class non-profit in transparency and accountability and we strive to ensure that donated dollars go directly to the kids we serve.
            </p>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-4">
              By donating to ASYV, you are transforming lives - and also joining a community that believes in the future of Rwanda.
            </p>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px]">
              The Agahozo-Shalom Youth Village is a registered 501(c)(3) non-profit organization and is recognized by <a href="https://www.guidestar.org/profile/27-3530769" target="_blank" rel="noreferrer" className="text-reap-green hover:underline">GuideStar</a>.
            </p>
          </div>
        </div>

        <hr className="border-t border-gray-200 my-[60px]" />

        {/* Multi-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Strategic Plan & Annual Reports */}
          <div className="lg:col-span-5">
            <h3 className="text-[24px] font-semibold text-reap-green mb-[15px]">
              Our strategic plan
            </h3>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-8">
              <a href="https://asyv.org/strategicplan" target="_blank" rel="noreferrer" className="hover:underline text-[#100404]">
                2022–2025 Strategic Plan
              </a>
            </p>

            <h3 className="text-[24px] font-semibold text-reap-green mb-[15px]">
              Annual Reports
            </h3>
            
            <p className="text-[16px] font-bold text-[#100404] leading-[25.6px] mb-4">
              <a href="https://my.visme.co/view/33p3w4wq-asyv-2024-2025-annual-report#s1" target="_blank" rel="noreferrer" className="hover:underline text-[#100404]">
                2024–2025 Annual Report
              </a>
            </p>

            {/* Embedded Visme Report */}
            <div className="mb-6 relative w-full overflow-hidden" style={{ maxWidth: '445px' }}>
              <iframe 
                src="https://my.visme.co/_embed/33p3w4wq-asyv-2024-2025-annual-report?responsive=1" 
                title="ASYV 2024–2025 Annual Report" 
                width="100%" 
                height="576" 
                allowFullScreen 
                style={{ border: 'none' }}
              ></iframe>
            </div>

            <ul className="space-y-2">
              <li><a href="https://my.visme.co/view/4d6nw8o9-asyv-2023-2024-annual-report-2" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">2023–2024 Annual Report</a></li>
              <li><a href="https://asyv.yearly.report/2022-2023-annual-report#/-NaIRz9iOZ1LTeHmVoqh" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">2022–2023 Annual Report</a></li>
              <li><a href="https://app.yearly.report/newbuilder/#/from/asyv/asyv-20212022-annual-report" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">2021–2022 Annual Report</a></li>
              <li><a href="https://yearly.report/from/#/asyv/20-21annualreport" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">2020–2021 Annual Report</a></li>
              <li><a href="https://legacy.app.yearly.report/preview/?havefooter=false&rid=507&uid=HU6gJ1TGQDeHF6KOiC7DikeAwwO2" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">2019 Annual Report</a></li>
              <li><a href="https://drive.google.com/file/d/1YzGHLwQyEyHWrg5Vp84h0xH4h3O0yiSO/view" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">2018 Annual Report</a></li>
              <li><a href="https://drive.google.com/file/d/1UvfLy7lYAkNNblMshXmU_0aMKNcllc-9/view?usp=sharing" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">2017 Annual Report</a></li>
              <li><a href="/s/2016-ASYV-Annual-Report-Digital-dmln.pdf" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">2016 Annual Report</a></li>
              <li><a href="/s/ASYV-2014AR-Web.pdf" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">2014 Annual Report</a></li>
              <li><a href="/s/AnnualReport2013.pdf" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">2013 Annual Report</a></li>
              <li><a href="/s/Agahozo-Shalom-Youth-Village-2012-Annual-Report.pdf" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">2012 Annual Report</a></li>
              <li><a href="/s/ASYV-Annual-Report-2011.pdf" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">2011 Annual Report</a></li>
            </ul>
          </div>

          {/* Column 2: 501(c)(3) Status & Fiscal Reports */}
          <div className="lg:col-span-4">
            <h3 className="text-[24px] font-semibold text-reap-green mb-[15px]">
              501(c)(3) Status
            </h3>
            <p className="text-[16px] font-light text-[#100404] leading-[25.6px] mb-8">
              <a href="/s/ASYV-501c3-Status.pdf" target="_blank" rel="noreferrer" className="hover:underline text-[#100404]">
                501(c)3 Determination Letter
              </a>
            </p>

            <h3 className="text-[24px] font-semibold text-reap-green mb-[15px]">
              Fiscal Reports
            </h3>
            <ul className="space-y-2">
              <li><a href="/s/FY2025-ASYV-Form-990-Public-Inspection-Copy.pdf" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">Fiscal Year 2025 IRS Form 990</a></li>
              <li><a href="/s/FY2024-ASYV-Form-990.pdf" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">Fiscal Year 2024 IRS Form 990</a></li>
              <li><a href="/s/FY2023-ASYV-Form-990-Public-Inspection-Copy-1.pdf" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">Fiscal Year 2023 IRS Form 990</a></li>
              <li><a href="/s/FY2022-ASYV-Form-990-Public-Inspection-Copy.pdf" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">Fiscal Year 2022 IRS Form 990</a></li>
              <li><a href="/s/FY2021-990-ASYV-Paper-File.pdf" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">Fiscal Year 2021 IRS Form 990</a></li>
              <li><a href="https://drive.google.com/file/d/11GITtm43TGpGqNcvZg1ozDP7g8aHRe85/view?usp=sharing" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">2020 IRS Form 990</a></li>
              <li><a href="/s/2019-Form-990.pdf" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">2019 IRS Form 990</a></li>
              <li><a href="/s/2018-Form-990.pdf" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">2018 IRS Form 990</a></li>
              <li><a href="/s/ASYV-2017-990.pdf" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">2017 IRS Form 990</a></li>
              <li><a href="/s/2016-Form-990.pdf" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">2016 IRS Form 990</a></li>
              <li><a href="/s/2015-990.pdf" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">2015 IRS Form 990</a></li>
              <li><a href="https://drive.google.com/file/d/0B-qMMkbYLzCyY1luaGVBZVZjNEk/view?usp=sharing" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">2014 IRS Form 990</a></li>
              <li><a href="/s/2013-Form-990.pdf" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">2013 IRS Form 990</a></li>
              <li><a href="/s/2012-Form-990.pdf" target="_blank" rel="noreferrer" className="text-[16px] font-light text-[#100404] hover:underline">2012 IRS Form 990</a></li>
            </ul>
          </div>

          {/* Column 3: Badges */}
          <div className="lg:col-span-3 flex flex-col space-y-8 mt-4 lg:mt-0 items-start">
            <a href="https://www.charitynavigator.org/ein/273530769" target="_blank" rel="noreferrer" className="block w-full max-w-[200px]">
              <img src="/images/CN_Encompass_121321_Takeaway_100.png" alt="Charity Navigator" className="w-full h-auto" />
            </a>
            
            <a href="https://www.guidestar.org/profile/27-3530769" target="_blank" rel="noreferrer" className="block w-full max-w-[230px]">
              <img src="/images/logo-guidestar-230x71.gif" alt="GuideStar" className="w-full h-auto" />
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Financials;
