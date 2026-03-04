"use client";
import React from "react";

const TabButton = ({ children, selectTab, active }) => {
  return (
    <button
      onClick={selectTab}
      className={`${
        active
          ? "text-white border-white border-b-2"
          : "text-[#ADB7BE] hover:text-white"
      } py-2 px-1 border-b-2 border-transparent text-xl hover:text-white transition-all`}
    >
      {children}
    </button>
  );
};

export default TabButton;
