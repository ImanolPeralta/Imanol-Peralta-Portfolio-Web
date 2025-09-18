import React from "react";

const HoverBorderGradient = ({ children }) => {
  return (
    <button className="hover-border-gradient">
      <span className="content">{children}</span>
    </button>
  );
};

export default HoverBorderGradient;
