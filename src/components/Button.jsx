import React from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'; 

const Button = ({
  children,
  intent = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
  className,
  leftIcon,
  rightIcon,
  ...props
}) => {
  // Styles based on intent and size
  const baseStyles = "inline-flex items-center justify-center rounded-md font-semibold transition-colors";
  const intentStyles = {
    primary: "bg-customblue text-white",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-md",
    lg: "px-5 py-2.5 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={twMerge(
        baseStyles,
        intentStyles[intent],
        sizeStyles[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...props}
    >
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin w-5 h-5 mr-2" /> 
      ) : (
        leftIcon && <span className="mr-2">{leftIcon}</span>
      )}
      <span>{children}</span>
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

// Set PropTypes for better type checking
Button.propTypes = {
  children: PropTypes.node.isRequired,
  intent: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
};

export default Button;
