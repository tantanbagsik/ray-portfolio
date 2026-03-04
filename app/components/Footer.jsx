import React from "react";
import { portfolioData } from "../../data/portfolioData";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>{portfolioData.personal.logo}</span>
        <p className="text-slate-600">{portfolioData.footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
