import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to, href, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center font-sans font-semibold transition-all duration-300 focus:outline-none rounded-[300px]";
  
  // padding 21px 34px => approx py-[21px] px-[34px]
  // fontSize 16.5px => text-[16.5px]
  const sizeStyle = "py-[21px] px-[34px] text-[16.5px] leading-normal";

  const variants = {
    primary: "bg-white text-reap-yellow hover:opacity-90",
    secondary: "bg-reap-yellow text-white hover:opacity-90",
    outline: "border border-reap-yellow text-reap-yellow hover:bg-reap-yellow hover:text-white",
    white: "bg-white text-reap-yellow hover:bg-gray-100"
  };

  const combinedClasses = `${baseStyle} ${sizeStyle} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
