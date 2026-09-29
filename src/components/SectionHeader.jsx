import React from 'react';

const SectionHeader = ({ title, subtitle, alignment = 'center', className = '' }) => {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }[alignment];

  return (
    <div className={`mb-12 ${alignmentClass} ${className}`}>
      <h2 className="text-[47px] leading-[56.4px] font-semibold text-reap-yellow tracking-[1.41px] mb-4 font-sans whitespace-pre-wrap">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 font-medium font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
