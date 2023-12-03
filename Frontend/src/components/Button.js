import React from 'react';
import PropTypes from "prop-types";


const Button = ({ children, className, size, variant, onClick }) => {
    const buttonClasses = [
      "text-white text-lg font-bold rounded-xl transition duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-opacity-50",
      size === "small" ? "px-4 py-3" : size === "medium" ? "px-6 py-4" : "w-full px-4 py-3",
      variant === "primary" ? "bg-marigold focus:ring-marigold" : variant === "secondary" ? "bg-tomato focus:ring-tomato" : "bg-black focus:ring-white",
      className,
    ].join(" ");


  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    variant: PropTypes.oneOf(["primary", "secondary", "dark"]),
    onClick: PropTypes.func,
  };

export default Button;