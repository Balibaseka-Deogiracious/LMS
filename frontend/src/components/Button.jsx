// Button Component
import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyles = `px-4 py-2 rounded font-medium transition-all duration-300 focus:outline-none`;
  const variants = {
    primary: `bg-library-500 text-white hover:bg-library-600`,
    secondary: `bg-gray-200 text-gray-800 hover:bg-gray-300`,
    outline: `border border-library-500 text-library-500 hover:bg-library-50`,
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;