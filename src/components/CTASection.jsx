import React from 'react';
import Button from './Button';

const CTASection = ({ title, description, buttonText, buttonHref, buttonTo, imageBg }) => {
  return (
    <section className="relative h-[738px] bg-asyv-bg overflow-hidden flex flex-col justify-center items-center">
      {imageBg && (
        <div className="absolute inset-0 z-0">
          <img src={imageBg} alt="Background" className="w-full h-full object-cover opacity-30" />
        </div>
      )}
      <div className="relative z-10 max-w-[1200px] mx-auto px-[34px] text-center w-full">
        <h2 className="text-[47px] leading-[56.4px] font-semibold text-asyv-orange tracking-[1.41px] mb-6 font-sans whitespace-pre-wrap">
          {title}
        </h2>
        {description && (
          <p className="text-[18px] text-gray-800 mb-10 max-w-3xl mx-auto leading-relaxed font-sans font-light">
            {description}
          </p>
        )}
        <Button 
          href={buttonHref} 
          to={buttonTo} 
          variant={imageBg ? 'white' : 'primary'}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
