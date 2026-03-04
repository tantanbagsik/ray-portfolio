"use client";
import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-white"
    : "text-[#ADB7BE] border-[#ADB7BE] hover:border-white hover:text-white";
  
  return (
    <button
      onClick={onClick}
      className={`${buttonStyles} py-2 px-4 rounded-full border-2 text-xl transition-all duration-300`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
